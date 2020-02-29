import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Profile from '../Profile';
import Settings from '../Settings';

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route path='/app/notifications' component={Notifications} />
        <Route path='/app/messages' component={Messages} />
        <Route path='/app/profile' component={Profile} />
        <Route path='/app/settings' component={Settings} />
        <Route path='/app' component={Home} />
        <Redirect to='/app' />
      </Switch>
    </div>
  );
};

export default Content;
