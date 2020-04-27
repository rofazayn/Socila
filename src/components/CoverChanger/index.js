import React, { useContext } from 'react';
import { Styled } from './style';
import { Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import { AuthContext } from '../../context/auth-context';
import { ReactComponent as CameraIconSvg } from '../../assets/icons/bx-camera.svg';
import { ReactComponent as CloseIconSvg } from '../../assets/icons/bx-x.svg';

const CoverChanger = ({ openCoverDialog, setOpenCoverDialog }) => {
  function handleCoverClose() {
    setOpenCoverDialog(false);
  }

  return (
    <Dialog
      open={openCoverDialog}
      onClose={handleCoverClose}
      disableScrollLock={true}
      disablePortal
      fullWidth
      maxWidth='xs'
    >
      <Styled.CoverChanger className='creator'>
        <div className='dialog-header'>
          <div className='text'>
            <CameraIconSvg />
            <Typography variant='body2'>Change your cover picture.</Typography>
          </div>
          <IconButton size='medium' onClick={handleCoverClose}>
            <CloseIconSvg className='close-icon' />
          </IconButton>
        </div>
      </Styled.CoverChanger>
    </Dialog>
  );
};

export default CoverChanger;
