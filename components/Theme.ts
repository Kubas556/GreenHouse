import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles'


const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ffc400',
    },
    error: { 
      main: red[500]
    }
  },
  typography: {
    // fontFamily: '"Inter", sans-serif'
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ffc400',
    },
    background: {
      paper: '#303030',
      default: '#212121',
    },
    error: { 
      main: red[500]
    }
  },
  typography: {
    // fontFamily: '"Inter", sans-serif'
  },
});

export { lightTheme, darkTheme };
