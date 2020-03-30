import React, { useContext } from 'react';
import { Styled } from './style';
import TopBar from '../TopBar';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { motion } from 'framer-motion';
import ProfileInfo from '../ProfileInfo';
import PostsList from '../PostsList';
import { AuthContext } from '../../context/auth-context';

const Profile = () => {
  const { userDetails } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.Profile className='profile-page'>
        <TopBar title={'Profile'} icon={<UserIconSvg />} />
        <ProfileInfo user={userDetails} />
        <PostsList userId={userDetails.userId} />
        {/* <ProfileActions />
        <ProfileContent /> */}
      </Styled.Profile>
    </motion.div>
  );
};

export default Profile;
