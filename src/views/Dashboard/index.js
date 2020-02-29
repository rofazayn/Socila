import React from 'react';
import Container from '../../components/layout/Container';
import { motion } from 'framer-motion';
import { Styled } from './style';
import Navbar from '../../components/Navbar';
import Main from '../../components/Main';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Styled.Dashboard>
          <Navbar />
          <Main />
        </Styled.Dashboard>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
