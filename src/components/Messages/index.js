import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';
import TopBar from '../TopBar';
import { ReactComponent as MessageIconSvg } from '../../assets/icons/bx-message.svg';
import { motion } from 'framer-motion';

const Messages = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Messages className='messages-page'>
        <TopBar title={'Messages'} icon={<MessageIconSvg />} />
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
      </Styled.Messages>
    </motion.div>
  );
};

export default Messages;
