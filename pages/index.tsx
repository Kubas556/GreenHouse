import Link from "next/link";
import useSWR from 'swr';
import {DatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, {useEffect, useState} from "react";
import {orange} from "@material-ui/core/colors";
import {useRouter} from "next/router";
import {Typography} from "@material-ui/core";
import withAuth from "../components/WithAuth";
import WithAppBar from "../components/WithAppBar";
import Tempmeter from "../components/Tempmeter";
import Termostat from "../components/Termostat";
import {firebase} from "../firebase/index.js";
import IPageProps from "../interfaces/IPageProps";

const useStyle = makeStyles(theme=>({
    center:{
        display:'flex'
    },
    tempmeter:{
        margin:'50px'
    }
}));

function Index(props:IPageProps) {
    const classes = useStyle();
    const [temp,setTemp] = useState(-50);
    let tempData = firebase.database().ref("/users/"+props.user+"/greenhouse/temp");

    useEffect(()=>{
        tempData.on('value',data=>{
            setTemp(data.val());
        });
    },[]);

 return(
     <div className={classes.center}>
         <div className={classes.tempmeter}>
            <Tempmeter theme={props.theme} temp={temp} />
            <Termostat theme={props.theme} defaultValue={40}/>
         </div>
     </div>
 )
}

function ex(props:IPageProps) {
    return(
        <WithAppBar component={Index} componentProps={props}/>
    )
}

export default withAuth(ex);