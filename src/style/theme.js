import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let themeObject = createMuiTheme({
  palette: {
    primary: {
      main: '#00ce4b'
    }
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
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

// Make fonts responsive
themeObject = responsiveFontSizes(themeObject);

export { themeObject };
