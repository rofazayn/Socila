import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '../../components/layout/Container';
import { motion } from 'framer-motion';
import { Styled } from './style';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Styled.Welcome>
        <Container>
          <Typography variant='h3'>
            See what's happening in the world right now.
          </Typography>
        </Container>
      </Styled.Welcome>
    </motion.div>
  );
};

export default Welcome;
