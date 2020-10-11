import Link from "next/link";
import useSWR from 'swr';
import {DatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, {useEffect, useState} from "react";
import {orange} from "@material-ui/core/colors";
import {useRouter} from "next/router";
import withWidth,{isWidthDown} from "@material-ui/core/withWidth";
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
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import ITermostatConfig from "../../interfaces/ITermostatConfig";

const useStyle = makeStyles(theme=>({
    center: {
        display:'flex',
        width: 'calc(100% - 1px)',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column'
        }
    },
    page: {
        width: '100%',
        position: 'relative'
    },
    controllComponent: {
        [theme.breakpoints.down('sm')]: {
            margin:'5px',
        },
        [theme.breakpoints.up('xl')]: {
            margin:'50px',
        },
        width:'min-content',
        padding:'1rem'
    },
}));

function Id(props:IPageProps) {
    const classes = useStyle();
    const [temp,setTemp] = useState<number>(-50);
    const [tempHistoryCharData,setTempHistoryCharData] = useState<any>();
    const [tempHistoryCharLabels,setTempHistoryCharLabels] = useState<any>();
    const [defTemp,setDefTemp] = useState<number>();
    const [pageSize,setPageSize] = useState<Breakpoint>('xl');
    const router = useRouter();
    const { id } = router.query;
    const timeFormat = 'MM/DD/YYYY HH:mm';


    let tempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/temp");
    let tempHistoryData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/history/temps");
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

    let thermostatConfig:ITermostatConfig = {
        width: isWidthDown('xs',props.width)?200:337,
        height: isWidthDown('xs',props.width)?200:337,
        centerTextSize:isWidthDown('xs',props.width)?"1rem":"2rem",
        outerLinesLeftOffset: isWidthDown('xs',props.width)?"0px":"0.5rem",
        outerLinesHeight: isWidthDown('xs',props.width)?"5px":"5px",
        outerLinesWidth: isWidthDown('xs',props.width)?"1rem":"2rem",
        innerLinesLeftOffset: isWidthDown('xs',props.width)?"1.5rem":"3.5rem",
        innerLinesTextLeftOffset: isWidthDown('xs',props.width)?"3px":"0.5rem",
    }

    return(
     <div className={classes.page}>
         <Typography component={"h1"} variant={"h2"}>
             Teplota
         </Typography>
         <div className={classes.center}>
             <div className={classes.controllComponent}>
                 <Paper elevation={3} style={{padding: '1rem'}}>
                     <Tempmeter theme={props.appTheme} temp={temp}/>
                 </Paper>
             </div>
             <div className={classes.controllComponent}>
                 <Paper elevation={3} style={{padding: '1rem'}}>
                     <Termostat theme={props.appTheme} onValueChanged={termostatChange} defaultValue={defTemp} config={thermostatConfig}/>
                 </Paper>
             </div>
         </div>
         <div className={classes.center}>
            <div className={classes.controllComponent} style={{width:'calc(100% - 100px)',maxWidth:' calc(100% - 100px)'}}>
                <Paper>
                    <Line height={200} data={{
                        labels:tempHistoryCharLabels,
                        datasets: [{
                            label: 'temp',
                            data: tempHistoryCharData,
                            backgroundColor: function(context:any) {
                                let gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
                                gradient.addColorStop(0, 'rgba(244,67,54,0.5)');
                                gradient.addColorStop(1, 'rgba(244,67,54,0)');
                                return gradient;
                            },
                            pointBackgroundColor: 'red',
                            borderColor: 'red',
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
                                    color:props.appTheme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
                                    zeroLineColor:props.appTheme==1?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.1)',
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
                        maintainAspectRatio: false,
                        responsive:true
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

export default withWidth()(withAuth(ex));