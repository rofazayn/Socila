import React, { useContext } from 'react';
import { Styled } from './style';
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { AuthContext } from '../../context/auth-context';
import { ReactComponent as CameraIconSvg } from '../../assets/icons/bx-camera.svg';
import { ReactComponent as CloseIconSvg } from '../../assets/icons/bx-x.svg';
import DropzoneInput from '../layout/DropzoneInput';

const AvatarChanger = ({ openAvatarDialog, setOpenAvatarDialog }) => {
  function handleAvatarClose() {
    setOpenAvatarDialog(false);
  }

  const { userDetails } = useContext(AuthContext);

  return (
    <Dialog
      open={openAvatarDialog}
      onClose={handleAvatarClose}
      disableScrollLock={true}
      disablePortal
      fullWidth
      maxWidth='xs'
    >
      <Styled.AvatarChanger className='creator'>
        <div className='dialog-header'>
          <div className='text'>
            <CameraIconSvg />
            <Typography variant='body2'>
              Change your profile picture.
            </Typography>
          </div>
          <IconButton size='medium' onClick={handleAvatarClose}>
            <CloseIconSvg className='close-icon' />
          </IconButton>
        </div>
        <div className='dialog-content'>
          <DropzoneInput text='Click or drag & drop image' />
        </div>
        <div className='dialog-footer'>
          <Button onClick={handleAvatarClose} className='fancy-button'>
            Cancel
          </Button>
          <Button variant='contained' color='primary'>
            Upload & Change
          </Button>
        </div>
      </Styled.AvatarChanger>
    </Dialog>
  );
};

export default AvatarChanger;
