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

  const { userDetails } = useContext(AuthContext);

  return (
    <Styled.CoverChanger>
      <Dialog
        open={openCoverDialog}
        onClose={handleCoverClose}
        disableScrollLock={true}
        className='Cover-creator creator'
        disablePortal
        fullWidth
        maxWidth='xs'
      >
        <DialogTitle className='title' disableTypography>
          <div className='text'>
            <CameraIconSvg />
            <Typography variant='body2'>Change your cover picture.</Typography>
          </div>
          <IconButton size='medium' onClick={handleCoverClose}>
            <CloseIconSvg className='create-post-icon' />
          </IconButton>
        </DialogTitle>
      </Dialog>
    </Styled.CoverChanger>
  );
};

export default CoverChanger;
