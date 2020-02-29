import React from 'react';
import { Typography } from '@material-ui/core';

import { Styled } from './style';

const TopBar = ({ title, icon }) => {
  return (
    <Styled.TopBar className='content-top'>
      <Typography variant='h6' className='page-title'>
        {title}
      </Typography>
      {icon}
    </Styled.TopBar>
  );
};

export default TopBar;
