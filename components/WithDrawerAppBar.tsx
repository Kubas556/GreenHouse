import {
  AppBar,
  Tooltip,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { auth, firebase } from '../firebase/index';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TempIcon from '../icons/tempIcon';
import WaterCanIconFilled from '../icons/waterCanIconFilled';
import FertilizerIcon from '../icons/fertilizerIcon';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Router from 'next/router';
import IWithDrawerAppBar from '../interfaces/IWithDrawerAppBar';
import ProfileEditForm from './ProfileEditForm';
import NotchedOutline from '@material-ui/core/OutlinedInput/NotchedOutline';
import Badge from '@material-ui/core/Badge';
import { JSXElement } from '@babel/types';
import { Alert } from '@material-ui/lab';
import { use } from 'ast-types';
import text from 'node-html-parser/dist/nodes/text';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatarIcon: {
    cursor: 'pointer',
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  appBar: {
    background: theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
  tabs: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 240,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  },
  toolbarOffset: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function WithDrawerAppBar(props: IWithDrawerAppBar) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState<boolean>(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
  const [notificationsMenuOpen, setNotificationsMenuOpen] = useState<boolean>(false);
  const [outOfWaterNotifi, setOutOfWaterNotifi] = useState<boolean>(false);
  const [outOfFertiliserNotifi, setOutOfFertiliserNotifi] = useState<boolean>(false);
  const [notificationsNumber, setNotificationsNumber] = useState<number>(0);
  const avatarAnchor = useRef<HTMLDivElement>(null);
  const notificationsAnchor = useRef<any>();
  const devId = props.deviceId;

  const Component = props.component;
  const compProps = props.componentProps;

  const notificationsData = firebase.database().ref(`/users/${auth.currentUser?.uid}/devices/${devId}/notifications`);

  useEffect(() => {
    notificationsData.on('value', (snapshot) => {
      const data = snapshot.val();
      setOutOfWaterNotifi(!!parseInt(data.lowWater));
      setOutOfFertiliserNotifi(!!parseInt(data.lowFertiliser));

      setNotificationsNumber([data.lowWater, data.lowFertiliser].filter((data) => parseInt(data)).length);
    });

    return () => {
      notificationsData.off('value');
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        alert('Logout successful');
      })
      .catch((error) => {
        alert('OOps something went wrong check your console');
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar variant="dense">
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap component={'div'}>
            {props.title}
          </Typography>
          <div className={classes.grow} />
          <div ref={notificationsAnchor}>
            <IconButton onClick={() => setNotificationsMenuOpen(true)} aria-label="notifications">
              <Badge color="secondary" overlap="circle" badgeContent={notificationsNumber}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              getContentAnchorEl={null}
              open={notificationsMenuOpen}
              onClick={() => setNotificationsMenuOpen(false)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              anchorEl={notificationsAnchor.current}
            >
              {outOfWaterNotifi ? (
                <MenuItem>
                  <Alert severity="error">Došla voda!</Alert>
                </MenuItem>
              ) : null}
              {outOfFertiliserNotifi ? (
                <MenuItem>
                  <Alert severity="error">Došlo hnojivo!</Alert>
                </MenuItem>
              ) : null}
            </Menu>
          </div>
          <IconButton onClick={compProps.switchTheme} aria-label="display more actions" color="inherit">
            {compProps.appTheme === true ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {auth.currentUser ? (
            <div ref={avatarAnchor}>
              <Avatar onClick={() => setAvatarMenuOpen(true)} className={classes.avatarIcon}></Avatar>
              <Menu
                getContentAnchorEl={null}
                open={avatarMenuOpen}
                onClick={() => setAvatarMenuOpen(false)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                anchorEl={avatarAnchor.current}
              >
                <MenuItem onClick={() => setProfileMenuOpen(true)}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton onClick={() => Router.push('/login')} aria-label="display more actions" color="inherit">
              <VpnKeyIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href={`/temperature/${devId}`}>
            <ListItem button>
              <ListItemIcon>{<TempIcon />}</ListItemIcon>
              <ListItemText primary={'Teplota'} />
            </ListItem>
          </Link>
          <Link href={`/irrigation/${devId}`}>
            <ListItem button>
              <ListItemIcon>{<WaterCanIconFilled />}</ListItemIcon>
              <ListItemText primary={'Zavlažování'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <ListItem button>
            <ListItemIcon>{<ShowChartIcon />}</ListItemIcon>
            <ListItemText primary={'Statistiky'} />
          </ListItem>
          <div className={classes.grow} />
          <ListItem style={{ padding: '2px' }}>
            <Tooltip title="Zpět na list" aria-label="add">
              <Button
                variant={'contained'}
                onClick={() => Router.push('/')}
                startIcon={<ArrowBackIcon />}
                color="secondary"
              ></Button>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <ProfileEditForm open={profileMenuOpen} handleClose={() => setProfileMenuOpen(!profileMenuOpen)} />
        <div className={classes.toolbarOffset} />
        <Component {...compProps} />
      </main>
    </div>
  );
}
