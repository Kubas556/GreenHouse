import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {firebase} from "../firebase/index";
import IDeviceCard from "../interfaces/IDeviceCard";

function DeviceInfoCard(props:IDeviceCard) {
    const [temp,setTemp] = useState("waiting");
    const [name,setName] = useState("waiting");
    let tempData = firebase.database().ref("/users/"+props.userId+"/devices/"+props.id+"/temp");
    let nameData = firebase.database().ref("/users/"+props.userId+"/devices/"+props.id+"/name");



    useEffect(()=>{
        tempData.on('value',data=>{
            setTemp(data.val());
        });
        nameData.on('value',data=>{
            setName(data.val());
            //console.log(Object.keys(data.val()));
        });
    },[]);
    return(
            <Card>
                <CardContent>
                    <Typography variant={"body1"}>
                        {name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Typ: Skleník
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Aktuální teplota: {temp}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Otevřít</Button>
                </CardActions>
            </Card>
    );
}
export default React.forwardRef(DeviceInfoCard);