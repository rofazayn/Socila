import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const ThemeProvider = ({ theme, children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
