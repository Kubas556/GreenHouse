import {
    AppBar,
    Tabs,
    Tab,
    IconButton,
    Toolbar,
    Typography,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SvgIcon
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/Inbox'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PhoneIcon from '@material-ui/icons/Phone'
import ApartmentIcon from '@material-ui/icons/Apartment';
import PersonPinIcon from '@material-ui/icons/Person'
import Link from 'next/link'
import React from "react";
import clsx from 'clsx';
import {makeStyles,useTheme} from "@material-ui/core/styles";
import {auth} from "../firebase/index";
import TempIcon from "../icons/tempIcon";
import WaterCanIcon from "../icons/waterCanIcon";
import IAppBar from "../interfaces/IAppBar"

const useStyles = makeStyles(theme => ({
    root:{
      display:'flex'
    },
    grow: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    appBar: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
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
        marginLeft: theme.spacing(2)
    },
    drawer: {
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: 240,
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
    toolbarOffset:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function WithAppBar(props:IAppBar) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const Component = props.component;
    const compProps = props.componentProps;
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        auth.signOut().then(function() {
            alert('Logout successful');
        }).catch(function(error) {
            alert('OOps something went wrong check your console');
            console.log(error);
        });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed"  className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
                <Toolbar variant="dense" >
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
                    <Typography className={classes.title} variant="h5" noWrap component={"div"}>
                        {props.title}
                    </Typography>
                    <div className={classes.grow}/>
                    <IconButton onClick={compProps.switchTheme} aria-label="display more actions" edge="end" color="inherit">
                        {compProps.theme===true?<Brightness7Icon />:<Brightness4Icon />}
                    </IconButton>
                    <Link href={{pathname:"/login", query:{refresh:'false'}}}>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <VpnKeyIcon />
                        </IconButton>
                    </Link>
                    <IconButton onClick={handleLogout} aria-label="display more actions" edge="end" color="inherit">
                        <VpnKeyIcon />
                    </IconButton>
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
                    <Link href={{pathname:"/temperature"}}>
                    <ListItem button>
                        <ListItemIcon>{<TempIcon/>}</ListItemIcon>
                        <ListItemText primary={"Teplota"} />
                    </ListItem>
                    </Link>
                    <Link href={{pathname:"/irrigation"}}>
                    <ListItem button>
                        <ListItemIcon>{<WaterCanIcon/>}</ListItemIcon>
                        <ListItemText primary={"Zavlažování"} />
                    </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>{<TempIcon/>}</ListItemIcon>
                        <ListItemText primary={"Hnojení"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>{<TempIcon/>}</ListItemIcon>
                        <ListItemText primary={"Statistiky"} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbarOffset}/>
                <Component {...compProps}/>
            </main>
        </div>
    );
}