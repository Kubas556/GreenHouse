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
import {auth, firebase} from "../../firebase/index";
import IPageProps from "../../interfaces/IPageProps";
import Loading from "../../components/Loading";
import {object, string} from "prop-types";
import {Line} from "react-chartjs-2";
import onlyDesktop from "../../components/OnlyDesktop";
import {width} from "@material-ui/system";

const useStyle = makeStyles(theme=>({
    center:{
        display:'flex'
    },
    controllComponent:{
        margin:'50px',
        width:'min-content',
        padding:'1rem'
    }
}));

function Id(props:IPageProps) {
    const classes = useStyle();
    const [temp,setTemp] = useState<number>(-50);
    const [tempHistoryCharData,setTempHistoryCharData] = useState<any>();
    const [tempHistoryCharLabels,setTempHistoryCharLabels] = useState<any>();
    const [defTemp,setDefTemp] = useState<number>();
    const router = useRouter();
    const { id } = router.query;
    const timeFormat = 'MM/DD/YYYY HH:mm';


    let tempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/temp");
    let tempHistoryData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/temps");
    let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

    const termostatChange = (value:number) => {
        firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp").set(value);
    };

    useEffect(()=>{
        tempData.on('value',data=>{
            setTemp(data.val());
        });

        tempHistoryData.on('value',data=>{
            let charData:any[] = [];
            let charLabels:any[] = [];
            Object.keys(data.val()).forEach(key => {
                charData.push(data.val()[key].temp);
                charLabels.push(data.val()[key].time[1]+'/'+data.val()[key].time[2]+'/'+data.val()[key].time[0]+' '+data.val()[key].time[3]+':'+data.val()[key].time[4])
            });

            setTempHistoryCharData(charData);
            setTempHistoryCharLabels(charLabels);
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
                 <Paper elevation={3} style={{padding: '1rem'}}>
                     <Termostat theme={props.theme} onValueChanged={termostatChange} defaultValue={defTemp}/>
                 </Paper>
             </div>
         </div>
         <div className={classes.center}>
            <div className={classes.controllComponent} style={{width:'calc(100% - 100px)'}}>
                <Paper>
                    <Line data={{
                        labels:tempHistoryCharLabels,
                        datasets: [{
                            label: 'temp',
                            data: tempHistoryCharData,
                            backgroundColor: 'rgba(0,0,0,0)',
                            pointBackgroundColor: 'red',
                            borderColor: 'red',
                            borderWidth: 0
                        }]
                    }} options={{
                        scales:{
                            xAxes: [{
                                gridLines: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    color:props.theme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
                                    zeroLineColor:props.theme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
                                    drawTicks:false,
                                },
                                ticks: {
                                    stepSize: 10,
                                    padding:10
                                }
                            }],
                        },
                        maintainAspectRatio: false,
                        /*xAxes:[{

                        }]*/
                    }}/>
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
        <WithDrawerAppBar component={Id} title={name} deviceId={id.toString()} componentProps={props}/>
    )
}

export default onlyDesktop(withAuth(ex));