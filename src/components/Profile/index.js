import React, { useContext } from 'react';
import { Styled } from './style';
import TopBar from '../TopBar';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { motion } from 'framer-motion';
import ProfileInfo from '../ProfileInfo';
import PostsList from '../PostsList';
import { AuthContext } from '../../context/auth-context';
import { useFetchPosts } from '../../hooks/usePosts';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProfileEditor from '../ProfileEditor';
import UserFollowers from '../UserFollowers';

const Profile = () => {
  const { userDetails } = useContext(AuthContext);
  const { posts } = useFetchPosts(userDetails.userId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.Profile className='profile-page'>
        <TopBar title={'Profile'} icon={<UserIconSvg />} />
        <ProfileInfo user={userDetails} />
        <Switch>
          <Route
            exact
            path='/profile'
            render={() => <PostsList posts={posts} />}
          />
          <Route exact path='/profile/followers' component={UserFollowers} />
          <Route exact path='/profile/edit' component={ProfileEditor} />
          <Redirect to='/' />
        </Switch>
        {/* <ProfileActions />
        <ProfileContent /> */}
      </Styled.Profile>
    </motion.div>
  );
};

export default Profile;
