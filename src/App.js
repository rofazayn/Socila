import React from 'react';
import ThemeProvider from './style/ThemeProvider';
import { themeObject } from './style/theme';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './views/SignIn';
import Home from './views/Home';
import SignUp from './views/SignUp';
import DummyNavbar from './components/DummyNavbar';

const App = () => {
  return (
    <ThemeProvider theme={themeObject}>
      <div className='App'>
        <DummyNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
          <Redirect to='/' />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
