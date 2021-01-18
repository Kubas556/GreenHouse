import Link from 'next/link';
import useSWR from 'swr';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, { useEffect, useState } from 'react';
import { orange } from '@material-ui/core/colors';
import { useRouter } from 'next/router';
import { Typography, Paper, isWidthDown, Color } from '@material-ui/core';
import withAuth from '../../components/WithAuth';
import WithDrawerAppBar from '../../components/WithDrawerAppBar';
import SaveIcon from '@material-ui/icons/Save';
import Tempmeter from '../../components/Tempmeter';
import Termostat from '../../components/Termostat';
import { auth, firebase } from '../../firebase/index';
import IPageProps from '../../interfaces/IPageProps';
import Loading from '../../components/Loading';
import { object, string } from 'prop-types';
import { Line } from 'react-chartjs-2';
import onlyDesktop from '../../components/OnlyDesktop';
import FireBackground from '../../components/FireBackground';
import { width } from '@material-ui/system';
import { url } from 'inspector';
import SoilHumidity from '../../components/SoilHumidity';
import AirHumidity from '../../components/AirHumidity';
import WaterMixer from '../../components/waterMixer';
import withWidth from '@material-ui/core/withWidth/withWidth';
import ISoilHumidityConfig from '../../interfaces/ISoilHumidityConfig';
import IAirHumidityConfig from '../../interfaces/IAirHumidityConfig';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SoilHumidityAnalogForm from '../../components/SoilHumidityAnalogForm';

const useStyle = makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  saveBtn: {
    right: '0px',
    position: 'absolute',
  },
  page: {
    width: '100%',
    position: 'relative',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  controllComponent: {
    margin: 'auto',
    width: 'min-content',
    padding: '1rem',
  },
}));

function Id(props: IPageProps) {
  const classes = useStyle();
  const [soilHumidity, setSoilHumidity] = useState<number>(133);
  const [saveSnackbarOpen, setSaveSnackbarOpen] = useState<boolean>(false);
  const [soilHumidityAnalog, setSoilHumidityAnalog] = useState<{ min: number; max: number }>({ min: 0, max: 1 });
  const [airHumidity, setAirHumidity] = useState<number>(0);
  const [airHumidityHistoryCharData, setAirHumidityHistoryCharData] = useState<any>([0]);
  const [airHumidityHistoryCharLabels, setAirHumidityHistoryCharLabels] = useState<any>();
  const [targetSoilHumidity, setTargetSoilHumidity] = useState<number>(-1);
  const [watering, setWatering] = useState<{ fertiliser: number; total: number }>({ fertiliser: 0, total: 500 });
  const [soilHumidityAnalogConfigForm, setSoilHumidityAnalogConfigForm] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
  const timeFormat = 'MM/DD/YYYY HH:mm';

  // ##########################
  // firebase data fetch variables
  // ##########################
  const soilHumidityData = firebase.database().ref(`/users/${props.user}/devices/${id}/soilHumidity`);
  const soilHumidityAnalogData = firebase.database().ref(`/users/${props.user}/devices/${id}/soilHumidityAnalog`);
  const airHumidityData = firebase.database().ref(`/users/${props.user}/devices/${id}/airHumidity`);
  const humidityHistoryData = firebase
    .database()
    .ref(`/users/${props.user}/devices/${id}/history/soilHumidity`)
    .limitToLast(100);
  const wateringData = firebase.database().ref(`/users/${props.user}/devices/${id}/irrigation`);
  const targetSoilHumidityData = firebase.database().ref(`/users/${props.user}/devices/${id}/irrigationSoilHumidity`);

  // ##########################
  //    data to change
  // ##########################
  const [wateringDataToChange, setWateringDataToChange] = useState<{
    water: number;
    fertiliser: number;
    ratio: string;
    total: number;
  }>();
  const [targetSoilHumidityDataToChange, setTargetSoilHumidityDataToChange] = useState<number>();
  const [soilHumidityAnalogDataToChange, setSoilHumidityAnalogDataToChange] = useState<{ min: number; max: number }>();

  // ##########################
  //    on change events
  // ##########################
  const waterMixChanged = (obj: { water: number; fertiliser: number; ratio: string; total: number }) => {
    setWateringDataToChange(obj);
  };

  const targetSoilHumidityChanged = (evnt: any, value: number | number[]) => {
    setTargetSoilHumidity(value as number);
    setTargetSoilHumidityDataToChange(value as number);
  };

  const soilHumidityAnalogChanged = (analogData: { min: number; max: number }) => {
    setSoilHumidityAnalog(analogData);
    setSoilHumidityAnalogDataToChange(analogData);
  };

  // ##########################
  //    save data function
  // ##########################
  const saveChanges = () => {
    if (wateringDataToChange) {
      firebase
        .database()
        .ref(`/users/${props.user}/devices/${id}/irrigation`)
        .set(wateringDataToChange)
        .then(() => {
          setSaveSnackbarOpen(true);
          setWateringDataToChange(undefined);
        });
    }

    if (targetSoilHumidityDataToChange) {
      firebase
        .database()
        .ref(`/users/${props.user}/devices/${id}/irrigationSoilHumidity`)
        .set(targetSoilHumidityDataToChange)
        .then(() => {
          setSaveSnackbarOpen(true);
          setTargetSoilHumidityDataToChange(undefined);
        });
    }

    if (soilHumidityAnalogDataToChange) {
      firebase
        .database()
        .ref(`/users/${props.user}/devices/${id}/soilHumidityAnalog`)
        .set(soilHumidityAnalogDataToChange)
        .then(() => {
          setSaveSnackbarOpen(true);
          setSoilHumidityAnalogDataToChange(undefined);
        });
    }
  };

  // ##########################
  //  firebase data fetching
  // ##########################
  useEffect(() => {
    soilHumidityData.on('value', (data) => {
      setSoilHumidity(data.val());
    });

    soilHumidityAnalogData.on('value', (data) => {
      setSoilHumidityAnalog(data.val());
    });

    airHumidityData.on('value', (data) => {
      setAirHumidity(data.val());
    });

    humidityHistoryData.on('value', (data) => {
      if (data.val()) {
        const charData: any[] = [];
        const charLabels: any[] = [];
        Object.keys(data.val()).forEach((key) => {
          charData.push(data.val()[key].value);
          charLabels.push(
            `${data.val()[key].time[1]}/${data.val()[key].time[2]}/${data.val()[key].time[0]} ${
              data.val()[key].time[3]
            }:${data.val()[key].time[4]}`
          );
        });

        setAirHumidityHistoryCharData(charData);
        setAirHumidityHistoryCharLabels(charLabels);
      }
    });

    wateringData.once('value', (data) => {
      setWatering(data.val());
    });

    targetSoilHumidityData.once('value', (data) => {
      setTargetSoilHumidity(data.val());
    });

    return () => {
      soilHumidityData.off('value');
      soilHumidityAnalogData.off('value');
      airHumidityData.off('value');
      humidityHistoryData.off('value');
    };
  }, []);

  // ##########################
  //    custom component configuration
  // ##########################
  const soilHumidityConfig: ISoilHumidityConfig = {
    width: isWidthDown('xs', props.width) ? 200 : 337,
    height: isWidthDown('xs', props.width) ? 200 : 337,
  };

  const airHumidityConfig: IAirHumidityConfig = {
    width: isWidthDown('xs', props.width) ? 200 : 337,
    height: isWidthDown('xs', props.width) ? 200 : 337,
  };

  const waterMixerConfig: IAirHumidityConfig = {
    width: isWidthDown('xs', props.width) ? 200 : 337,
    height: isWidthDown('xs', props.width) ? 200 : 337,
  };

  return (
    <div className={classes.page}>
      <Typography component={'h1'} className={classes.title} variant={'h2'}>
        Zavlažování
      </Typography>
      <div className={classes.center}>
        <div className={classes.controllComponent}>
          <Paper elevation={3} style={{ padding: '1rem', backdropFilter: 'blur(2px)' }}>
            <SoilHumidity
              config={soilHumidityConfig}
              theme={props.appTheme}
              value={
                soilHumidity < soilHumidityAnalog.max
                  ? 100
                  : soilHumidity > soilHumidityAnalog.min
                  ? 0
                  : (100 / (soilHumidityAnalog.max - soilHumidityAnalog.min)) * (soilHumidity - soilHumidityAnalog.min)
              }
            />
            <Slider
              value={targetSoilHumidity}
              disabled={targetSoilHumidity < 0}
              valueLabelDisplay="on"
              valueLabelFormat={(value) =>
                `${
                  100 -
                  Math.round(
                    ((value - soilHumidityAnalog.max) / (soilHumidityAnalog.min - soilHumidityAnalog.max)) * 100
                  )
                }%`
              }
              step={0.5}
              track={false}
              onChange={targetSoilHumidityChanged}
              min={soilHumidityAnalog.max}
              max={soilHumidityAnalog.min}
              marks={[
                { value: soilHumidityAnalog.min, label: '0%' },
                { value: soilHumidityAnalog.max, label: '100%' },
              ]}
            />
            <IconButton
              color={'primary'}
              onClick={() => setSoilHumidityAnalogConfigForm(!soilHumidityAnalogConfigForm)}
              style={{ marginLeft: 'auto', display: 'block' }}
              aria-label="soil humidity analog settings"
            >
              <SettingsIcon />
            </IconButton>
            <SoilHumidityAnalogForm
              onChange={soilHumidityAnalogChanged}
              analogData={soilHumidityAnalog}
              open={soilHumidityAnalogConfigForm}
              handleClose={() => setSoilHumidityAnalogConfigForm(!soilHumidityAnalogConfigForm)}
            />
          </Paper>
        </div>
        <div className={classes.controllComponent}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <AirHumidity config={airHumidityConfig} theme={props.appTheme} value={airHumidity} />
          </Paper>
        </div>
        <div className={classes.controllComponent}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <WaterMixer
              config={waterMixerConfig}
              defaults={watering}
              theme={props.appTheme}
              onChange={waterMixChanged}
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
                labels: airHumidityHistoryCharLabels,
                datasets: [
                  {
                    label: 'air humidity',
                    data: airHumidityHistoryCharData,
                    backgroundColor(context: any) {
                      const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
                      gradient.addColorStop(0, 'rgba(24,184,212,0.5)');
                      gradient.addColorStop(1, 'rgba(24,184,212,0)');
                      return gradient;
                    },
                    pointBackgroundColor: 'rgba(0,0,0,0)', // original color 'rgb(24,184,212)'
                    pointBorderColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgb(24,184,212)',
                    borderWidth: 0,
                    fill: true,
                  },
                ],
              }}
              options={{
                scales: {
                  xAxes: [
                    {
                      display: false,
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: true,
                      gridLines: {
                        color: props.appTheme === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        zeroLineColor: props.appTheme === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        drawTicks: false,
                        display: false,
                      },
                      ticks: {
                        stepSize: 10,
                        padding: 10,
                      },
                    },
                  ],
                },
                legend: {
                  display: true,
                },
                tooltips: {
                  intersect: false,
                },
                maintainAspectRatio: false,
                responsive: true,
              }}
            />
          </Paper>
        </div>
      </div>
      <Snackbar open={saveSnackbarOpen} autoHideDuration={6000} onClose={() => setSaveSnackbarOpen(false)}>
        <Alert severity="success">Změny Uloženy</Alert>
      </Snackbar>
      <Fab
        variant="extended"
        disabled={!wateringDataToChange && !targetSoilHumidityDataToChange && !soilHumidityAnalogDataToChange}
        className={classes.saveBtn}
        color={'secondary'}
        onClick={saveChanges}
      >
        <SaveIcon />
        Uložit změny
      </Fab>
    </div>
  );
}

function ex2(props: IPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const nameData = firebase.database().ref(`/users/${props.user}/devices/${id}/name`);
  useEffect(() => {
    nameData.on('value', (data) => {
      setName(data.val());
    });
    return () => {
      nameData.off('value');
    };
  }, []);
  return <WithDrawerAppBar component={Id} title={name} deviceId={id.toString()} componentProps={props} />;
}

export default withWidth()(withAuth(ex2));
