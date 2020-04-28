import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as UploadIconSvg } from '../../../assets/icons/bx-upload.svg';
import { Styled } from './style';
import { Typography } from '@material-ui/core';

function DropzoneInput({ text, setFiles }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  });

  return (
    <Styled.Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={`inner ${isDragActive && '--active'}`}>
        <UploadIconSvg />
        <Typography variant='body2' className='--disabled-text'>
          {text}
        </Typography>
      </div>
    </Styled.Dropzone>
  );
}

export default DropzoneInput;
