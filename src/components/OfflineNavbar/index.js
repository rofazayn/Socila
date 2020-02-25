import React from 'react';
import { Styled } from './style';
import { NavLink } from 'react-router-dom';
import Logo from '../layout/Logo';
import Container from '../layout/Container';
import { Typography } from '@material-ui/core';

const OfflineNavbar = () => {
  return (
    <Styled.OfflineNavbar>
      <Container>
        <div className='inner-w'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='menu'>
            <ul>
              <li>
                <Typography variant='button'>
                  <NavLink to='/sign-in' exact>
                    Login
                  </NavLink>
                </Typography>
              </li>
              <li>
                <Typography variant='button'>
                  <NavLink to='/sign-up' exact>
                    Sign up
                  </NavLink>
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Styled.OfflineNavbar>
  );
};

export default OfflineNavbar;
