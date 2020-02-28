import React from 'react';
import { motion } from 'framer-motion';
import { Styled } from './style';
// import Logo from '../../components/layout/Logo';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';
import { Typography } from '@material-ui/core';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Styled.Loader>
        <LogoSvg />
        <Typography variant='h6'>Loading...</Typography>
      </Styled.Loader>
    </motion.div>
  );
};

export default Loader;
