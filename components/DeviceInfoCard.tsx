import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {firebase} from "../firebase/index";
import LaunchIcon from '@material-ui/icons/Launch';
import IDeviceCard from "../interfaces/IDeviceCard";

function DeviceInfoCard(props:IDeviceCard) {
    const [temp,setTemp] = useState<string>("waiting");
    const [name,setName] = useState<string>("waiting");
    const [type,setType] = useState<string>("waiting");
    let tempData = firebase.database().ref("/users/"+props.userId+"/devices/"+props.id+"/temp");
    let nameData = firebase.database().ref("/users/"+props.userId+"/devices/"+props.id+"/name");
    let typeData = firebase.database().ref("/users/"+props.userId+"/devices/"+props.id+"/type");



    useEffect(()=>{
        tempData.once('value',data => {
            setTemp(data.val());
        });
        nameData.once('value',data => {
            setName(data.val());
            //console.log(Object.keys(data.val()));
        });
        typeData.once('value',data => {
           setType(data.val());
        });
    },[]);
    return(
            <Card>
                <CardContent>
                    <Typography variant={"body1"}>
                        {name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Typ: {type}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Aktuální teplota: {temp}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" endIcon={<LaunchIcon/>}>Otevřít</Button>
                </CardActions>
            </Card>
    );
}
export default React.forwardRef(DeviceInfoCard);