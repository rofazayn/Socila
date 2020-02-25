import React from 'react';
import { Typography } from '@material-ui/core';
import fb from '../../firebase';
import Container from '../../components/layout/Container';

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <Typography variant='h1'>Welcome to Socila.</Typography>
        <button
          onClick={() => {
            fb.auth().signOut();
          }}
        >
          Log out
        </button>
      </Container>
    </div>
  );
};

export default Home;
