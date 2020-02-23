import React from 'react';
import ThemeProvider from './style/ThemeProvider';
import { themeObject } from './style/theme';
import { Typography } from '@material-ui/core';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={themeObject}>
        <Typography variant='h1'>Hello world!</Typography>
      </ThemeProvider>
    </div>
  );
};

export default App;
