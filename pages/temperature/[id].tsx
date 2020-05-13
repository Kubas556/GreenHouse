import Link from "next/link";
import useSWR from 'swr';
import {DatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, {useEffect, useState} from "react";
import {orange} from "@material-ui/core/colors";
import {useRouter} from "next/router";
import {Typography,Paper} from "@material-ui/core";
import withAuth from "../../components/WithAuth";
import WithDrawerAppBar from "../../components/WithDrawerAppBar";
import Tempmeter from "../../components/Tempmeter";
import Termostat from "../../components/Termostat";
import {firebase} from "../../firebase/index";
import IPageProps from "../../interfaces/IPageProps";
import Loading from "../../components/Loading";

const useStyle = makeStyles(theme=>({
    center:{
        display:'flex'
    },
    controllComponent:{
        margin:'50px',
        padding:'1rem'
    }
}));

function Id(props:IPageProps) {
    const classes = useStyle();
    const [temp,setTemp] = useState(-50);
    const [defTemp,setDefTemp] = useState<number>();
    const router = useRouter();
    const { id } = router.query;

    let tempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/temp");
    let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

    const termostatChange = (value:string) => {
        firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp").set(value);
    };

    useEffect(()=>{
        tempData.on('value',data=>{
            setTemp(data.val());
        });

        targetTempData.once('value',data=>{
            setDefTemp(data.val());
        });

    },[]);

 return(
     <div>
         <Typography component={"h1"} variant={"h2"}>
             Teplota
         </Typography>
         <div className={classes.center}>
             <div className={classes.controllComponent}>
                 <Paper elevation={3} style={{padding: '1rem'}}>
                     <Tempmeter theme={props.theme} temp={temp}/>
                 </Paper>
             </div>
             <div className={classes.controllComponent}>
                 <Paper elevation={3}>
                     <Termostat theme={props.theme} onValueChanged={termostatChange} defaultValue={defTemp}/>
                 </Paper>
             </div>
         </div>
     </div>
 )
}

function ex(props:IPageProps) {
    const router = useRouter();
    const { id } = router.query;
    const [name,setName] = useState("");
    let nameData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/name");
    useEffect(()=>{
        nameData.on('value',data=>{
            setName(data.val());
        });
    },[]);
    return(
        <WithDrawerAppBar component={Id} title={name} componentProps={props}/>
    )
}

export default withAuth(ex);