import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';
import TopBar from '../TopBar';
import { ReactComponent as CogIconSvg } from '../../assets/icons/bx-cog.svg';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Settings className='settings-page'>
        <TopBar title={'Settings'} icon={<CogIconSvg />} />
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
      </Styled.Settings>
    </motion.div>
  );
};

export default Settings;
