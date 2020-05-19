import {Typography, Card, CardContent, Box, Menu, MenuItem} from "@material-ui/core";
import Link from 'next/link';
import React, {createRef, useEffect, useRef, useState} from "react";
import withAuth from "../components/WithAuth";
import WithAppBar from "../components/WithAppBar";
import IPageProps from "../interfaces/IPageProps";
import {firebase} from "../firebase/index";
import DeviceInfoCard from "../components/DeviceInfoCard";
import Loading from "../components/Loading";

function index(props:IPageProps){
    let devicesData = firebase.database().ref("/users/"+props.user+"/devices");
    let [devices,setDevices] = useState<string[]>([]);

    useEffect(()=>{
        devicesData.on('value',data=>{
            //console.log(Object.keys(data.val()));
            setDevices(Object.keys(data.val()));
            /*console.log(Object.keys(data.val()).map(value => {
                let out = "";
                firebase.database().ref("/users/"+props.user+"/devices/"+value+"/name").once('value',data=>{ out = data.val()});
                return out;
            }));*/
        });
    },[]);

    const test = useRef(null);
    return(
        <div>
            <div>
                <Typography variant="h4" component="h2">
                    Seznam chytrých zařízení
                </Typography>
                <div style={{display:"flex"}}>
                    {
                        devices.length!=0?
                        devices.map(
                            (id:string,index:number) =>
                            <div>
                                <Link href={'/temperature/[id]'} as={`/temperature/${id}`}>
                                    <Box component={"a"}>
                                        <DeviceInfoCard key={index} id={id} userId={props.user}/>
                                    </Box>
                                </Link>
                            </div>
                        ):<Loading/>
                    }
                </div>
            </div>
        </div>
    );
}

export default withAuth((props:IPageProps)=>{return(
    <WithAppBar component={index} title={"Index"} componentProps={props}/>
)});