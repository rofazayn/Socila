import React from 'react';
import ThemeProvider from './style/ThemeProvider';
import { themeObject } from './style/theme';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './views/SignIn';
import Home from './views/Home';
import SignUp from './views/SignUp';
// import DummyNavbar from './components/DummyNavbar';
import { AuthProvider } from './context/auth-context';
import { ProtectedRoute } from './routes';
import OfflineNavbar from './components/OfflineNavbar';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={themeObject}>
        <div className='App'>
          {/* <DummyNavbar /> */}
          <OfflineNavbar />
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Redirect to='/' />
          </Switch>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
