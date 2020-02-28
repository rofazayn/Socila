import React from 'react';
import { Styled } from './style';
import Logo from '../layout/Logo';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import fb from '../../firebase';
import 'boxicons';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <div className='navbar-top'>
        <Logo className='navbar-logo' />
        <div className='navbar-menu'>
          <ul>
            <li>
              <Typography variant='h6'>
                <NavLink to='/app' exact>
                  <box-icon name='home' className='icon'></box-icon>
                  Home
                </NavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='h6'>
                <NavLink to='/app/notifications' exact>
                  <box-icon name='bell'></box-icon>
                  Notifications
                </NavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='h6'>
                <NavLink to='/app/messages' exact>
                  <box-icon name='message'></box-icon>
                  Messages
                </NavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='h6'>
                <NavLink to='/app/profile' exact>
                  <box-icon name='user'></box-icon>
                  Profile
                </NavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='h6'>
                <NavLink to='/app/settings' exact>
                  <box-icon name='cog'></box-icon>
                  Settings
                </NavLink>
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-bot'>
        <Typography
          as='button'
          variant='h6'
          onClick={() => fb.auth().signOut()}
          className='navbar-logout'
        >
          <box-icon name='log-out'></box-icon>
          Logout
        </Typography>
      </div>
    </Styled.Navbar>
  );
};

export default Navbar;
