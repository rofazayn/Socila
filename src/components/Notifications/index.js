import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';
import TopBar from '../TopBar';
import { ReactComponent as BellIconSvg } from '../../assets/icons/bx-bell.svg';
import { motion } from 'framer-motion';

const Notifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Notifications className='notifications-page'>
        <TopBar title={'Notifications'} icon={<BellIconSvg />} />
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
      </Styled.Notifications>
    </motion.div>
  );
};

export default Notifications;
