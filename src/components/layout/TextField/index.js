import React, { forwardRef } from 'react';
import { Styled } from './style';
import { Typography } from '@material-ui/core';

const TextField = forwardRef((props, ref) => {
  let { fullWidth, fat, label, error, endIcon, children, ...rest } = props;
  return (
    <Styled.TextField {...props} className={error ? '--error' : ''}>
      {label && (
        <label className={`label ${error ? '--error' : ''}`} htmlFor={label}>
          <Typography variant='caption' className='label-text'>
            {label}
          </Typography>
        </label>
      )}
      <div
        className={`input ${error ? '--error' : ''} ${
          fullWidth && 'full-width'
        } ${fat && 'fat'} `}
      >
        <input {...rest} ref={ref} id={label} />
        <div className='icon-end'>{endIcon}</div>
      </div>
      {children}
    </Styled.TextField>
  );
});

export default TextField;
