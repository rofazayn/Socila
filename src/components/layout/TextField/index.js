import React, { forwardRef } from 'react';
import { Styled } from './style';
import { Typography } from '@material-ui/core';

const TextField = forwardRef((props, ref) => {
  let { fullWidth, label, error, endIcon, ...rest } = props;
  return (
    <Styled.TextField {...props}>
      {label && (
        <label className='label' htmlFor={label}>
          <Typography variant='caption' className='label-text'>
            {label}
          </Typography>
        </label>
      )}
      <div className={`input ${fullWidth && 'full-width'}`}>
        <input {...rest} ref={ref} id={label} />
        <div className='icon-end'>{endIcon}</div>
      </div>
    </Styled.TextField>
  );
});

export default TextField;
