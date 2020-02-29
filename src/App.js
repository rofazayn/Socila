import React from 'react';
import ThemeProvider from './style/ThemeProvider';
import { themeObject } from './style/theme';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { AuthProvider } from './context/auth-context';
import { ProtectedRoute } from './routes';
import OfflineNavbar from './components/OfflineNavbar';
import { AnimatePresence } from 'framer-motion';
import Welcome from './views/Welcome';
import Dashboard from './views/Dashboard';
// import Loader from './views/Loader';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={themeObject}>
        <div className='App'>
          {/* <Loader /> */}
          <OfflineNavbar />
          <AnimatePresence>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/sign-up' component={SignUp} />
              <ProtectedRoute path='/app' component={Dashboard} />
              <Redirect to='/app' />
            </Switch>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
