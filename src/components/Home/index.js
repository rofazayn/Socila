import React from 'react';
import { Typography } from '@material-ui/core';
import { ReactComponent as HomeIconSvg } from '../../assets/icons/bx-home.svg';
import { Styled } from './style';

const Home = () => {
  return (
    <Styled.Home>
      <div className='content-top'>
        <Typography variant='h6' className='page-title'>
          Home
        </Typography>
        <HomeIconSvg />
      </div>
    </Styled.Home>
  );
};

export default Home;
