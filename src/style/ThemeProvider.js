import React from 'react';
import {
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  StylesProvider
} from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import GlobalStyle from './global-style';

const ThemeProvider = ({ theme, children }) => {
  console.log(theme);
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </SCThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
