import React, { useContext } from 'react';
import { Styled } from './style';
import { Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import { AuthContext } from '../../context/auth-context';
import { ReactComponent as CameraIconSvg } from '../../assets/icons/bx-camera.svg';
import { ReactComponent as CloseIconSvg } from '../../assets/icons/bx-x.svg';

const AvatarChanger = ({ openAvatarDialog, setOpenAvatarDialog }) => {
  function handleAvatarClose() {
    setOpenAvatarDialog(false);
  }

  const { userDetails } = useContext(AuthContext);

  return (
    <Styled.AvatarChanger>
      <Dialog
        open={openAvatarDialog}
        onClose={handleAvatarClose}
        disableScrollLock={true}
        className='avatar-creator creator'
        disablePortal
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle className='title' disableTypography>
          <div className='text'>
            <CameraIconSvg />
            <Typography variant='body2'>
              Change your profile picture.
            </Typography>
          </div>
          <IconButton size='medium' onClick={handleAvatarClose}>
            <CloseIconSvg className='create-post-icon' />
          </IconButton>
        </DialogTitle>
      </Dialog>
    </Styled.AvatarChanger>
  );
};

export default AvatarChanger;
