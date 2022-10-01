import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Typography, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import withAuth from '../../components/WithAuth';
import WithDrawerAppBar from '../../components/WithDrawerAppBar';
import Tempmeter from '../../components/Tempmeter';
import Termostat from '../../components/Termostat';
import { database } from '../../firebase/index';
import IPageProps from '../../interfaces/IPageProps';
import { Line } from 'react-chartjs-2';
import ITermostatConfig from '../../interfaces/ITermostatConfig';
import Snackbar from '@material-ui/core/Snackbar';
import Slider from '@material-ui/core/Slider';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import { get, limitToLast, off, onValue, query, ref, set } from 'firebase/database';
import 'chart.js/auto';

const useStyle = makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  page: {
    width: '100%',
    position: 'relative',
  },
  saveBtn: {
    right: '0px',
    position: 'absolute',
  },
  controllComponent: {
    margin: 'auto',
    width: 'min-content',
    padding: '1rem',
  },
}));

function Id(props: IPageProps) {
  const classes = useStyle();
  const [temp, setTemp] = useState<number>(-50);
  const [tempHistoryCharData, setTempHistoryCharData] = useState<any>();
  const [tempHistoryCharLabels, setTempHistoryCharLabels] = useState<any>();
  const [targetTemp, setTargetTemp] = useState<number>(0);
  const [tempTolerant, setTempTolerant] = useState<{ n: number; p: number }>({ n: 0, p: 0 });
  const [defTargetTemp, setDefTargetTemp] = useState<number>(0);
  const [saveSnackbarOpen, setSaveSnackbarOpen] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
  const timeFormat = 'MM/DD/YYYY HH:mm';

  // ##########################
  // firebase data fetch variables
  // ##########################
  const tempData = ref(database, `/users/${props.user}/devices/${id}/temp`);
  const tempHistoryData = query(ref(database, `/users/${props.user}/devices/${id}/history/temps`), limitToLast(100));
  const targetTempData = ref(database, `/users/${props.user}/devices/${id}/targetTemp`);

  // ##########################
  //    data to change
  // ##########################
  const [termostatDataToChange, setTermostatDataToChange] = useState<number>();
  const [termostatTolerantDataToChange, setTermostatTolerantDataToChange] = useState<{ n: number; p: number }>();

  // ##########################
  //    on change events
  // ##########################
  const termostatChange = (value: number) => {
    setTargetTemp(value);
    setTermostatDataToChange(value);
  };

  const onTermostatTolerantChange = (e: any, numbers: any) => {
    const values = numbers as number[];
    setTempTolerant({ n: values[0] - targetTemp, p: values[1] - targetTemp });
    setTermostatTolerantDataToChange({ n: values[0] - targetTemp, p: values[1] - targetTemp });
  };

  // ##########################
  //    save data function
  // ##########################
  const saveChanges = () => {
    if (termostatDataToChange) {
      set(ref(database, `/users/${props.user}/devices/${id}/targetTemp/temp`), termostatDataToChange).then(() => {
        setTermostatDataToChange(undefined);
        setSaveSnackbarOpen(true);
      });
    }

    if (termostatTolerantDataToChange) {
      set(
        ref(database, `/users/${props.user}/devices/${id}/targetTemp/tempTolerantN`),
        termostatTolerantDataToChange.n
      );

      set(
        ref(database, `/users/${props.user}/devices/${id}/targetTemp/tempTolerantP`),
        termostatTolerantDataToChange.p
      ).then(() => {
        setTermostatTolerantDataToChange(undefined);
        setSaveSnackbarOpen(true);
      });
    }
  };

  // ##########################
  //  firebase data fetching
  // ##########################
  useEffect(() => {
    onValue(tempData, (data) => {
      setTemp(Number.parseFloat(data.val()));
    });

    onValue(tempHistoryData, (data) => {
      if (data.val()) {
        const charData: any[] = [];
        const charLabels: any[] = [];
        Object.keys(data.val()).forEach((key) => {
          charData.push(data.val()[key].temp);
          charLabels.push(
            `${data.val()[key].time[1]}/${data.val()[key].time[2]}/${data.val()[key].time[0]} ${
              data.val()[key].time[3]
            }:${data.val()[key].time[4]}`
          );
        });

        setTempHistoryCharData(charData);
        console.log(data.val());
        setTempHistoryCharLabels(charLabels);
      }
    });

    get(targetTempData).then((data) => {
      setTargetTemp(data.val().temp);
      setDefTargetTemp(data.val().temp);
      setTempTolerant({ n: data.val().tempTolerantN, p: data.val().tempTolerantP });
    });

    return () => {
      off(tempData, 'value');
      off(tempHistoryData, 'value');
    };
  }, []);

  // ##########################
  //    custom component configuration
  // ##########################
  const thermostatConfig: ITermostatConfig = {
    width: isWidthDown('xs', props.width) ? 200 : 337,
    height: isWidthDown('xs', props.width) ? 200 : 337,
    centerTextSize: isWidthDown('xs', props.width) ? '1rem' : '2rem',
    outerLinesLeftOffset: isWidthDown('xs', props.width) ? '0px' : '0.5rem',
    outerLinesHeight: isWidthDown('xs', props.width) ? '5px' : '5px',
    outerLinesWidth: isWidthDown('xs', props.width) ? '1rem' : '2rem',
    innerLinesLeftOffset: isWidthDown('xs', props.width) ? '1.5rem' : '3.5rem',
    innerLinesTextLeftOffset: isWidthDown('xs', props.width) ? '3px' : '0.5rem',
  };

  return (
    <div className={classes.page}>
      <Typography component={'h1'} variant={'h2'}>
        Teplota
      </Typography>
      <div className={classes.center}>
        <div className={classes.controllComponent}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Tempmeter theme={props.appTheme} temp={temp} />
          </Paper>
        </div>
        <div className={classes.controllComponent}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Termostat
              theme={props.appTheme}
              onValueChanged={termostatChange}
              defaultValue={defTargetTemp}
              config={thermostatConfig}
            />
            <Slider
              value={[targetTemp + tempTolerant.n, targetTemp + tempTolerant.p]}
              min={0}
              max={50}
              valueLabelDisplay="on"
              onChange={onTermostatTolerantChange}
              marks={[
                { value: 0, label: '0°C' },
                { value: targetTemp, label: `${targetTemp}°C` },
                { value: 50, label: '50°C' },
              ]}
            />
          </Paper>
        </div>
      </div>
      <div className={classes.center}>
        <div className={classes.controllComponent} style={{ width: '100%', maxWidth: '100%' }}>
          <Paper>
            <Line
              height={200}
              data={{
                labels: tempHistoryCharLabels,
                datasets: [
                  {
                    label: 'temp',
                    xAxisID: 'xAxes',
                    yAxisID: 'yAxes',
                    data: tempHistoryCharData,
                    backgroundColor(context: any) {
                      const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
                      gradient.addColorStop(0, 'rgba(244,67,54,0.5)');
                      gradient.addColorStop(1, 'rgba(244,67,54,0)');
                      return gradient;
                    },
                    pointBackgroundColor: 'rgba(0,0,0,0)', // 'red',
                    pointBorderColor: 'rgba(0,0,0,0)',
                    borderColor: 'red',
                    borderWidth: 0.5,
                    fill: true,
                  },
                ],
              }}
              options={{
                scales: {
                  xAxes: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                  yAxes: {
                    display: true,
                    type: 'linear',
                    grid: {
                      color: props.appTheme === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      /*zeroLineColor: props.appTheme === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',*/
                      drawTicks: false,
                      display: false,
                    },
                    ticks: {
                      stepSize: 10,
                      padding: 10,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                  },
                  tooltip: {
                    intersect: false,
                  },
                },
                maintainAspectRatio: false,
                responsive: true,
              }}
            />
          </Paper>
        </div>
      </div>
      <Fab
        variant="extended"
        disabled={!termostatDataToChange && !termostatTolerantDataToChange}
        className={classes.saveBtn}
        color={'secondary'}
        onClick={saveChanges}
      >
        <SaveIcon />
        Uložit změny
      </Fab>
      <Snackbar open={saveSnackbarOpen} autoHideDuration={6000} onClose={() => setSaveSnackbarOpen(false)}>
        <Alert severity={'success'}>Změny Uloženy</Alert>
      </Snackbar>
    </div>
  );
}

function ex(props: IPageProps) {
  const router = useRouter();
  const id = router.query.id as string;
  const [name, setName] = useState('');
  const nameData = ref(database, `/users/${props.user}/devices/${id}/name`);
  useEffect(() => {
    onValue(nameData, (data) => {
      setName(data.val());
    });
    return () => {
      off(nameData, 'value');
    };
  }, []);
  return <WithDrawerAppBar component={Id} title={name} deviceId={id.toString()} componentProps={props} />;
}

export default withWidth()(withAuth(ex));
