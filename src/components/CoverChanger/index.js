import React, { useState } from 'react';
import { Styled } from './style';
import {
  Dialog,
  Typography,
  IconButton,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { ReactComponent as CameraIconSvg } from '../../assets/icons/bx-camera.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { ReactComponent as CloseIconSvg } from '../../assets/icons/bx-x.svg';
import DropzoneInput from '../layout/DropzoneInput';
import { useEffect } from 'react';
import CropperInput from '../layout/CropperInput';
import useUser from '../../hooks/useUser';

const CoverChanger = ({ openCoverDialog, setOpenCoverDialog }) => {
  function handleCoverClose() {
    setOpenCoverDialog(false);
    setFiles([]);
    setImage(null);
  }

  const { userActions } = useUser();

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  // Clean up files memory allocation
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  useEffect(() => {
    console.log(image);
  }, [image]);

  const [isUploading, setUploading] = useState(false);

  const handleUploadCover = async () => {
    setUploading(true);
    await userActions.updateCoverPicture(image, handleCoverClose, () =>
      setUploading(false)
    );
  };

  return (
    <Dialog
      open={openCoverDialog}
      onClose={handleCoverClose}
      keepMounted={false}
      disableScrollLock={true}
      disablePortal
      fullWidth
      maxWidth='xs'
    >
      <Styled.CoverChanger className='creator'>
        <div className='dialog-header'>
          <div className='text'>
            <CameraIconSvg />
            <Typography variant='body2'>
              Change your profile picture.
            </Typography>
          </div>
          <IconButton size='medium' onClick={handleCoverClose}>
            <CloseIconSvg className='close-icon' />
          </IconButton>
        </div>
        <div className='dialog-content'>
          {files.length > 0 ? (
            <div className='preview'>
              <div className='preview-img'></div>
              <CropperInput
                setImage={setImage}
                image={files[0].preview}
                aspectRatioType='cover'
              />
            </div>
          ) : (
            <DropzoneInput
              text='Click or drag & drop image'
              setFiles={setFiles}
            />
          )}
        </div>
        <div className='dialog-footer'>
          <Button onClick={handleCoverClose} className='fancy-button'>
            Cancel
          </Button>

          <Button
            disabled={!image || isUploading}
            className='fancy-button'
            startIcon={
              isUploading ? <CircularProgress size={18} /> : <SaveIconSvg />
            }
            onClick={handleUploadCover}
          >
            Save
          </Button>
        </div>
      </Styled.CoverChanger>
    </Dialog>
  );
};

export default CoverChanger;
