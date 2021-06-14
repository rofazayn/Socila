import React from 'react';
import { Styled } from './style';
import Logo from '../layout/Logo';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import fb from '../../firebase';
import { ReactComponent as HomeIconSvg } from '../../assets/icons/bx-home.svg';
import { ReactComponent as BellIconSvg } from '../../assets/icons/bx-bell.svg';
import { ReactComponent as MessageIconSvg } from '../../assets/icons/bx-message.svg';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { ReactComponent as CogIconSvg } from '../../assets/icons/bx-cog.svg';
import { ReactComponent as LogOutIconSvg } from '../../assets/icons/bx-log-out.svg';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <div className='navbar-top'>
        <Logo className='navbar-logo' />
        <div className='navbar-menu'>
          <ul>
            <li>
              <Typography variant='button'>
                <NavLink to='/' exact>
                  <div className='icon'>
                    <HomeIconSvg />
                  </div>
                  Home
                </NavLink>
              </Typography>
            </li>
            {/* <li>
              <Typography variant='button'>
                <NavLink to='/notifications' exact>
                  <div className='icon'>
                    <BellIconSvg />
                  </div>
                  Notifications
                </NavLink>
              </Typography>
            </li> */}
            {/* <li>
              <Typography variant='button'>
                <NavLink to='/messages' exact>
                  <div className='icon'>
                    <MessageIconSvg />
                  </div>
                  Messages
                </NavLink>
              </Typography>
            </li> */}
            <li>
              <Typography variant='button'>
                <NavLink to='/profile'>
                  <div className='icon'>
                    <UserIconSvg />
                  </div>
                  Profile
                </NavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='button'>
                <NavLink to='/settings'>
                  <div className='icon'>
                    <CogIconSvg />
                  </div>
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
          variant='button'
          onClick={() => fb.auth().signOut()}
          className='navbar-logout'
        >
          <div className='icon'>
            <LogOutIconSvg />
          </div>
          Logout
        </Typography>
      </div>
    </Styled.Navbar>
  );
};

export default Navbar;
