import React, { useContext } from 'react';
import { Styled } from './style';
import { Typography, IconButton } from '@material-ui/core';
import { AuthContext } from '../../context/auth-context';
import { ReactComponent as EnvelopeIconSvg } from '../../assets/icons/bx-envelope.svg';
import { ReactComponent as TrashIconSvg } from '../../assets/icons/bx-trash.svg';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { ReactComponent as PhoneIconSvg } from '../../assets/icons/bx-phone.svg';
import { ReactComponent as LockIconSvg } from '../../assets/icons/bx-lock-alt.svg';
import { ReactComponent as FontIconSvg } from '../../assets/icons/bx-font.svg';
import { ReactComponent as PlanetIconSvg } from '../../assets/icons/bx-planet.svg';

const SettingsMenu = () => {
  const { userDetails } = useContext(AuthContext);
  return (
    <Styled.SettingsMenu>
      <Styled.SettingsMenuHeader>
        <Typography variant='h6'>Account settings</Typography>
      </Styled.SettingsMenuHeader>
      <Styled.SettingsMenuBody>
        <Styled.SettingsMenuItem to='/settings/email'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Email
            </Typography>
            <Typography className='data' variant='body2'>
              {userDetails.email}
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <EnvelopeIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
        <Styled.SettingsMenuItem to='/settings/username'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Username
            </Typography>
            <Typography className='data' variant='body2'>
              @{userDetails.username}
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <UserIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
        <Styled.SettingsMenuItem to='/settings/phone'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Phone
            </Typography>
            <Typography className='data' variant='body2'>
              {userDetails.phone || 'No phone number'}
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <PhoneIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
        <Styled.SettingsMenuItem to='/settings/password'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Password
            </Typography>
            <Typography className='data' variant='body2'>
              *******
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <LockIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
        <Styled.SettingsMenuItem to='/settings/language'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Display language
            </Typography>
            <Typography className='data' variant='body2'>
              {userDetails.language || 'English'}
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <FontIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
        <Styled.SettingsMenuItem to='/settings/location'>
          <div className='info'>
            <Typography className='label' variant='body2'>
              Location
            </Typography>
            <Typography className='data' variant='body2'>
              {userDetails.location || 'Not selected'}
            </Typography>
          </div>
          <div className='action'>
            <IconButton>
              <PlanetIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>{' '}
        <Styled.SettingsMenuItem to='/settings/deactivation'>
          <div className='info'>
            <Typography className='label --danger' variant='body2'>
              Deactivate your account
            </Typography>
            <Typography className='data' variant='body2'>
              Be careful here!
            </Typography>
          </div>
          <div className='action --danger'>
            <IconButton>
              <TrashIconSvg />
            </IconButton>
          </div>
        </Styled.SettingsMenuItem>
      </Styled.SettingsMenuBody>
    </Styled.SettingsMenu>
  );
};

export default SettingsMenu;
