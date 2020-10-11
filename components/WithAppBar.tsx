import {
    AppBar,
    Avatar,
    Menu,
    MenuItem,
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
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import React, {createRef, useRef, useState} from "react";
import clsx from 'clsx';
import {makeStyles,useTheme} from "@material-ui/core/styles";
import {auth} from "../firebase/index";

import IAppBar from "../interfaces/IAppBar"
import Router from "next/router";

const useStyles = makeStyles(theme => ({
    root: {
      display:'flex'
    },
    avatarIcon: {
        cursor: "pointer"
    },
    grow: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    appBar: {
        background: theme.palette.type=="dark"?theme.palette.background.paper:theme.palette.primary.main,
        color: theme.palette.primary.contrastText,// theme.palette.text.primary
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

export default function WithDrawerAppBar(props:IAppBar) {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const [avatarOpen,setAvatarOpen] = useState<boolean>(false);
    const avatarAnchor = useRef<HTMLDivElement>(null);

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
            <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
                <Toolbar variant="dense">
                    <Typography className={classes.title} variant="h5" noWrap component={"div"}>
                        {props.title}
                    </Typography>
                    <div className={classes.grow}/>
                    <IconButton onClick={compProps.switchTheme} aria-label="display more actions" color="inherit">
                        {compProps.appTheme===true?<Brightness7Icon />:<Brightness4Icon />}
                    </IconButton>
                    {
                        auth.currentUser?
                            <div ref={avatarAnchor}>
                                <Avatar onClick={()=>setAvatarOpen(true)} className={classes.avatarIcon}>
                                </Avatar>
                                <Menu open={avatarOpen} onClick={()=>setAvatarOpen(false)} anchorEl={avatarAnchor.current}>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                                </Menu>
                            </div>:
                            <IconButton onClick={()=>Router.push("/login")} aria-label="display more actions" color="inherit">
                                <VpnKeyIcon />
                            </IconButton>
                    }
                    </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.toolbarOffset}/>
                <Component {...compProps}/>
            </main>
        </div>
    );
}