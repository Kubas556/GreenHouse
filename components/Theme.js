import {createMuiTheme} from "@material-ui/core";
import {orange, red} from "@material-ui/core/colors";

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
    }
});

export { lightTheme,darkTheme };