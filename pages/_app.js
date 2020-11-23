import React, {useEffect, useState} from 'react';
import App from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import { ThemeProvider,makeStyles,useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {lightTheme,darkTheme} from '../components/Theme';
import {
    Switch,
    FormControlLabel,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    AppBar, Toolbar, Typography
} from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import clsx from 'clsx';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import {auth} from '../firebase';
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Link from "next/link";

export default function MyApp (props) {

        const [theme,setTheme] = useState(false);
        //const [showBtn,setShowBtn] = useState(true);
        const themeReg = /theme=(\w+)/;
        const classes = useTheme();
        const router = useRouter();
        const [touchDisplay,setTouchDisplay] = useState(false);
        const [content,setContent] = useState(<div></div>);

    useEffect(()=> {
        const themeCookie = document.cookie.match(themeReg);
        setTouchDisplay(navigator.maxTouchPoints);
        if(themeCookie)
            setTheme(JSON.parse(themeCookie[1]));

        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    },[]);

    const switchTheme = () => {
        document.cookie = 'theme='+(!theme)+";path=/";
        setTheme(!theme);
    };

    /*function toggleThemeSwitch(value) {
        setShowBtn(value);
    };*/

    const { Component, pageProps } = props;

    return (
        <React.Fragment>
            <Head>
                <title>Smart devices controll</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={theme?darkTheme:lightTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                {/*<div style={
                            {display: "flex",
                            flexFlow: "column",
                            height: "100vh"}
                        }>*/}
                <CssBaseline />
                <Component appTheme={theme} touchDisplay={touchDisplay} {...pageProps} /*setThemeBtn={toggleThemeSwitch.bind(this)}*/ switchTheme={switchTheme.bind(this)} />
                {/*showBtn?<CustomAppBar component={Component} theme={theme} componentProps={pageProps} text={"Some name"}/>:null*/}

                {/*showBtn?
                            <FormControlLabel labelPlacement={"start"} label={"Dark mode"} control={<Switch checked={theme} onChange={switchTheme.bind(this)}/>}/>
                            :null*/}
                {/*</div>*/}

            </ThemeProvider>
        </React.Fragment>
    )

}