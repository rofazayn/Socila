import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as UploadIconSvg } from '../../../assets/icons/bx-upload.svg';
import { Styled } from './style';

function DropzoneInput() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
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
      </div>
    </Styled.Dropzone>
  );
}

export default DropzoneInput;
