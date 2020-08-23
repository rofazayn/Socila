import React from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as CheckIconSvg } from '../../assets/icons/bx-check.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';

const EmailSettings = () => {
  return (
    <SettingsBox>
      <div className='box-header'>
        <Typography variant='h6'>Email settings</Typography>
        <Typography variant='body2'>
          Please make sure that you have full ownership and control over the new
          email.
        </Typography>
      </div>
      <div className='box-body'>
        <form>
          <TextField
            label='Current email'
            fullWidth
            placeholder='Enter your current email'
          />
          <TextField
            label='New email'
            fullWidth
            placeholder='Enter your new email'
          />
        </form>
      </div>
      <div className='box-footer'>
        <div className='status'>
          <Typography variant='body2'>
            Status{' '}
            <span className='status-state'>
              <CheckIconSvg />
              Saved
            </span>
          </Typography>
        </div>
        <div className='actions'>
          <Button className='fancy-button' startIcon={<SaveIconSvg />}>
            Save
          </Button>
        </div>
      </div>
    </SettingsBox>
  );
};

export default EmailSettings;
