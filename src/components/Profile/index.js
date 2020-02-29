import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';
import TopBar from '../TopBar';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Profile className='profile-page'>
        <TopBar title={'Profile'} icon={<UserIconSvg />} />
        <Wrapper>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
        </Wrapper>
      </Styled.Profile>
    </motion.div>
  );
};

export default Profile;
