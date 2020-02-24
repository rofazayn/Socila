import React from 'react';
import { Typography } from '@material-ui/core';
import fb from '../../firebase';

const Home = () => {
  return (
    <div className='home'>
      <Typography variant='h1'>Welcome to Socila.</Typography>
      <button onClick={() => fb.auth().signOut()}>Log out</button>
    </div>
  );
};

export default Home;
