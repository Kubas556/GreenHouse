import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { ref, get } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../firebase/index';
import LaunchIcon from '@material-ui/icons/Launch';
import IDeviceCard from '../interfaces/IDeviceCard';

function DeviceInfoCard(props: IDeviceCard) {
  const [temp, setTemp] = useState<string>('waiting');
  const [name, setName] = useState<string>('waiting');
  const [type, setType] = useState<string>('waiting');
  const tempData = ref(database, `/users/${props.userId}/devices/${props.id}/temp`);
  const nameData = ref(database, `/users/${props.userId}/devices/${props.id}/name`);
  const typeData = ref(database, `/users/${props.userId}/devices/${props.id}/type`);

  useEffect(() => {
    get(tempData).then((data) => {
      setTemp(data.val());
    });
    get(nameData).then((data) => {
      setName(data.val());
      // console.log(Object.keys(data.val()));
    });
    get(typeData).then((data) => {
      setType(data.val());
    });
  }, []);
  return (
    <Card>
      <CardContent>
        <Typography variant={'body1'}>{name}</Typography>
        <Typography color="textSecondary" gutterBottom>
          Typ: {type}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Aktuální teplota: {temp}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<LaunchIcon />}>
          Otevřít
        </Button>
      </CardActions>
    </Card>
  );
}
export default React.forwardRef(DeviceInfoCard);
