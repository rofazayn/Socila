import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Profile from '../Profile';
import Settings from '../Settings';
import { Styled } from './style';
import PublicProfile from '../PublicProfile';
import PostDetailed from '../PostDetailed';
import HashtagResults from '../HashtagResults';

const Content = () => {
  return (
    <Styled.Content className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts/:postId' component={PostDetailed} />
        <Route exact path='/notifications' component={Notifications} />
        <Route exact path='/messages' component={Messages} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/users/:userId' component={PublicProfile} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/hashtag/:hashtag' component={HashtagResults} />
        <Redirect to='/' />
      </Switch>
    </Styled.Content>
  );
};

export default Content;
