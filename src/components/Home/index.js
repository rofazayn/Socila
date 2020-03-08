import React, { useContext } from 'react';
import { Styled } from './style';
import TopBar from '../TopBar';
import { ReactComponent as HomeIconSvg } from '../../assets/icons/bx-home.svg';
import Wrapper from '../Wrapper';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/auth-context';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Home className='home-page'>
        <TopBar title={`Home`} icon={<HomeIconSvg />} />
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
      </Styled.Home>
    </motion.div>
  );
};

export default Home;
