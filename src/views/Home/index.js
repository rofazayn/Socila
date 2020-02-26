import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '../../components/layout/Container';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='home'>
        <Container>
          <Typography variant='h2' gutterBottom>
            Welcome to Socila.
          </Typography>
          <Typography variant='body1' style={{ color: 'gray' }}>
            Socila is currently under development process, please comeback
            later.
          </Typography>
        </Container>
      </div>
    </motion.div>
  );
};

export default Home;
