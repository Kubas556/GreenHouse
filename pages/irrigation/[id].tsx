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
import FireBackground from "../../components/FireBackground";
import {width} from "@material-ui/system";
import {url} from "inspector";
import SoilHumidity from "../../components/SoilHumidity";
import AirHumidity from "../../components/AirHumidity";

const useStyle = makeStyles(theme=>({
    center:{
        display:'flex',
        width: 'calc(100% - 1px)'
    },
    page:{
        width: '100%',
        position: 'relative'
    },
    controllComponent:{
        margin:'50px',
        width:'min-content',
        padding:'1rem'
    }
}));

function Id(props:IPageProps) {
    const classes = useStyle();
    const [soilHumidity,setSoilHumidity] = useState<number>(0);
    const [airHumidity,setAirHumidity] = useState<number>(0);
    const [airHumidityHistoryCharData,setAirHumidityHistoryCharData] = useState<any>();
    const [aitHumidityHistoryCharLabels,setAirHumidityHistoryCharLabels] = useState<any>();
    const [defTemp,setDefTemp] = useState<number>();
    const router = useRouter();
    const { id } = router.query;
    const timeFormat = 'MM/DD/YYYY HH:mm';


    let soilHumidityData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/soilHumidity");
    let airHumidityData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/airHumidity");
    let humidityHistoryData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/history/airHumidity");
    //let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

    const termostatChange = (value:number) => {
        firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp").set(value);
    };

    useEffect(()=>{
        soilHumidityData.on('value',data=>{
            setSoilHumidity(data.val());
        });

        airHumidityData.on('value',data=>{
            setAirHumidity(data.val());
        });

        humidityHistoryData.on('value',data=>{
            let charData:any[] = [];
            let charLabels:any[] = [];
            Object.keys(data.val()).forEach(key => {
                charData.push(data.val()[key].value);
                charLabels.push(data.val()[key].time[1]+'/'+data.val()[key].time[2]+'/'+data.val()[key].time[0]+' '+data.val()[key].time[3]+':'+data.val()[key].time[4])
            });

            setAirHumidityHistoryCharData(charData);
            setAirHumidityHistoryCharLabels(charLabels);
        });

        /*targetTempData.once('value',data=>{
            setDefTemp(data.val());
        });*/

    },[]);

 return(
     <div className={classes.page}>
         <Typography component={"h1"} variant={"h2"}>
             Zavlažování
         </Typography>
         <div className={classes.center}>
             <div className={classes.controllComponent}>
                 <Paper elevation={3} style={{padding: '1rem'}}>
                     <SoilHumidity theme={props.theme} value={soilHumidity}/>
                 </Paper>
             </div>
             <div className={classes.controllComponent}>
                 <Paper elevation={3} style={{padding: '1rem'}}>
                    <AirHumidity theme={props.theme} value={airHumidity} />
                 </Paper>
             </div>
         </div>
         <div className={classes.center}>
            <div className={classes.controllComponent} style={{width:'calc(100% - 100px)'}}>
                <Paper>
                    <Line height={200} data={{
                        labels:aitHumidityHistoryCharLabels,
                        datasets: [{
                            label: 'value',
                            data: airHumidityHistoryCharData,
                            backgroundColor: function(context:any) {
                                let gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
                                gradient.addColorStop(0, 'rgba(24,184,212,0.5)');
                                gradient.addColorStop(1, 'rgba(24,184,212,0)');
                                return gradient;
                            },
                            pointBackgroundColor: 'rgb(24,184,212)',
                            borderColor: 'rgb(24,184,212)',
                            borderWidth: 0,
                            fill:true
                        }]
                    }} options={{
                        scales:{
                            xAxes: [{
                                display:false,
                                gridLines: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                display:true,
                                gridLines: {
                                    color:props.theme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
                                    zeroLineColor:props.theme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
                                    drawTicks:false,
                                    display:false
                                },
                                ticks: {
                                    stepSize: 10,
                                    padding:10
                                }
                            }],
                        },
                        legend: {
                            display: true,
                        },
                        maintainAspectRatio: false
                    }}/>
                </Paper>
            </div>
         </div>
     </div>
 )
}

function ex2(props:IPageProps) {
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

export default withAuth(ex2);