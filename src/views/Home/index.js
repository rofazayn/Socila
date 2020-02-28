import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Container from '../../components/layout/Container';
import { motion } from 'framer-motion';
import fb from '../../firebase';

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
          <Typography
            variant='body1'
            style={{ color: 'gray', marginBottom: 32 }}
          >
            Socila is currently under development process, please comeback
            later.
          </Typography>
          <Button variant='contained' onClick={() => fb.auth().signOut()}>
            Log out
          </Button>
        </Container>
      </div>
    </motion.div>
  );
};

export default Home;
