import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

let themeObject = createMuiTheme({
  palette: {
    primary: {
      main: '#5271ff',
      background: '#eaeeff',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
      },
      adornedEnd: {
        fill: grey[500],
      },
    },
  },
  typography: {
    fontSize: 14,
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
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
});

// Make fonts responsive
themeObject = responsiveFontSizes(themeObject);

export { themeObject };
