import {Typography, Card, CardContent, Box} from "@material-ui/core";
import Link from 'next/link';
import React, {useEffect, useState} from "react";
import withAuth from "../components/WithAuth";
import WithAppBar from "../components/WithAppBar";
import IPageProps from "../interfaces/IPageProps";
import {firebase} from "../firebase/index";
import DeviceInfoCard from "../components/DeviceInfoCard";

function index(props:IPageProps){
    let devicesData = firebase.database().ref("/users/"+props.user+"/devices");
    let [devices,setDevices] = useState<string[]>([]);

    useEffect(()=>{
        devicesData.on('value',data=>{
            //console.log(Object.keys(data.val()));
            setDevices(Object.keys(data.val()));
        });
    },[]);

    return(
        <div>
            <div>
                <Typography variant="h4" component="h2">
                    Seznam chytrých zařízení
                </Typography>
                <div style={{display:"flex"}}>
                    {
                        devices.map((id:string,index:number)=>
                            <div>
                                <Link href={{ pathname: '/temperature', query: { name: 'test' } }}>
                                    <Box component={"a"}>
                                        <DeviceInfoCard key={index} id={id} userId={props.user}/>
                                    </Box>
                                </Link>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default withAuth((props:IPageProps)=>{return(
    <WithAppBar component={index} title={"Index"} componentProps={props}/>
)});