import { Typography, Card, Box } from '@material-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import withAuth from '../components/WithAuth';
import WithAppBar from '../components/WithAppBar';
import IPageProps from '../interfaces/IPageProps';
import { database } from '../firebase/index';
import DeviceInfoCard from '../components/DeviceInfoCard';
import Loading from '../components/Loading';
import { ref, onValue } from 'firebase/database';

function index(props: IPageProps) {
  const devicesData = ref(database, `/users/${props.user}/devices`);
  const [devices, setDevices] = useState<string[]>([]);

  useEffect(() => {
    onValue(devicesData, (data) => {
      setDevices(Object.keys(data.val()));
    });
  }, []);

  return (
    <div>
      <div>
        <Typography variant="h4" component="h2">
          Seznam chytrých zařízení
        </Typography>
        <div style={{ display: 'flex' }}>
          {devices.length !== 0 ? (
            devices.map((id: string, index: number) => (
              <div>
                <Link href={'/temperature/[id]'} as={`/temperature/${id}`}>
                  <Box component={'a'}>
                    <DeviceInfoCard key={index} id={id} userId={props.user} />
                  </Box>
                </Link>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default withAuth((props: IPageProps) => {
  return <WithAppBar component={index} title={'Index'} componentProps={props} />;
});
