import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '../../components/layout/Container';

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <Typography variant='h4' gutterBottom>
          Welcome to Socila.
        </Typography>
        <Typography variant='body1' style={{ color: 'gray' }}>
          Socila is currently under development process, please comeback later.
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
