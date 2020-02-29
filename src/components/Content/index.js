import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Profile from '../Profile';
import Settings from '../Settings';
import { Styled } from './style';

const Content = () => {
  return (
    <Styled.Content className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/notifications' component={Notifications} />
        <Route exact path='/messages' component={Messages} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/settings' component={Settings} />
        <Redirect to='/' />
      </Switch>
    </Styled.Content>
  );
};

export default Content;
