import {createMuiTheme,ThemeOptions} from "@material-ui/core/styles";
import {orange, red} from "@material-ui/core/colors";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        status:{
            danger: string
        }
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        status?:{
            danger?: string
        }
    }
}


const lightTheme = createMuiTheme({
    palette: {
        type:"light",
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main:'#ffc400'
        },
    },
    status:{
        danger: red[500]
    },
    typography: {
        //fontFamily: '"Inter", sans-serif'
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type:"dark",
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main:'#ffc400'
        },
        background:{
            paper:"#303030",
            default:"#212121"
        }
    },
    status:{
        danger: red[500]
    },
    typography: {
        //fontFamily: '"Inter", sans-serif'
    }
});


export { lightTheme,darkTheme };