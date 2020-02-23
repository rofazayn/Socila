import React from 'react';
import GlobalStyle from './style/global-style';
import ThemeProvider from './style/ThemeProvider';
import { themeObject } from './style/theme';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        <h1>Hello world</h1>
      </ThemeProvider>
    </div>
  );
};

export default App;
