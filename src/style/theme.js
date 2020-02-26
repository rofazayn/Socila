import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let themeObject = createMuiTheme({
  palette: {
    primary: {
      main: '#5271ff'
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      root: {
        borderRadius: 8
      }
    }
  },
  typography: {
    fontSize: 15,
    fontFamily: [
      '"Open Sans"',
      '"Montserrat"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    button: {
      textTransform: 'none',
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'Montserrat',
      fontWeight: 700
    }
  }
});

// Make fonts responsive
themeObject = responsiveFontSizes(themeObject);

export { themeObject };
