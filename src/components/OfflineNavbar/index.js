import React, { useContext } from 'react';
import { Styled } from './style';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../layout/Logo';
import Container from '../layout/Container';
import { Typography } from '@material-ui/core';
import fb from '../../firebase';
import { AuthContext } from '../../context/auth-context';

const OfflineNavbar = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (!location.pathname.startsWith('/app')) {
    return (
      <Styled.OfflineNavbar>
        <Container>
          <div className='inner-w'>
            <div className='logo'>
              <Logo />
            </div>
            <div className='menu'>
              <ul>
                {!currentUser ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <li>
                      <Typography variant='button'>
                        <NavLink to='/app'>Dashboard</NavLink>
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant='button'
                        className='logout-button'
                        onClick={() => fb.auth().signOut()}
                      >
                        Logout
                      </Typography>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </Styled.OfflineNavbar>
    );
  }

  return null;
};

export default OfflineNavbar;
