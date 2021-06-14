import React from 'react';
import { Styled } from './style';
import { motion } from 'framer-motion';
import { Button, Typography } from '@material-ui/core';
import Container from '../../components/layout/Container';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Styled.Landing>
        <Container>
          <Typography variant='h3' className='hero-text'>
            See what's happening in the world right now.
          </Typography>
          <NavLink to='/sign-in'>
            <Button variant='contained' color='primary'>
              Start here
            </Button>
          </NavLink>
        </Container>
      </Styled.Landing>
    </motion.div>
  );
};

export default Landing;
