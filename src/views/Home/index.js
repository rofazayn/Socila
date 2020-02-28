import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Container from '../../components/layout/Container';
import { motion } from 'framer-motion';
import { Styled } from './style';
import fb from '../../firebase';
import Navbar from '../../components/Navbar';
import 'boxicons';
import Main from '../../components/Main';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Styled.Home>
          <Navbar />
          <Main />
          {/* Main */}
          {/* Sidebar */}
        </Styled.Home>
      </Container>
    </motion.div>
  );
};

export default Home;
