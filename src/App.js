import React from 'react'
import ThemeProvider from './style/ThemeProvider'
import { themeObject } from './style/theme'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import { AuthProvider } from './context/auth-context'
// import { ProtectedRoute } from './routes';
import OfflineNavbar from './components/OfflineNavbar'
import { AnimatePresence } from 'framer-motion'
import Welcome from './views/Welcome'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={themeObject}>
          <ScrollToTop />
          <div className='App'>
            <OfflineNavbar />
            <AnimatePresence>
              <Switch>
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route path='/' component={Welcome} />
                <Redirect to='/' />
              </Switch>
            </AnimatePresence>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
