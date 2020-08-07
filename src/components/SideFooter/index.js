import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Styled } from './style';

const SideFooter = () => {
  return (
    <Styled.SideFooter>
      <ul>
        <li>
          <Link to='/terms'>
            <Typography variant='caption'>Terms</Typography>
          </Link>
        </li>
        <li>
          <Link to='/terms'>
            <Typography variant='caption'>Privacy policy</Typography>
          </Link>
        </li>
        <li>
          <Link to='/terms'>
            <Typography variant='caption'>Cookies</Typography>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Typography variant='caption'>&copy; Socila - 2020</Typography>
          </Link>
        </li>
      </ul>
    </Styled.SideFooter>
  );
};

export default SideFooter;
