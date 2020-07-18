import React, { forwardRef } from 'react';
import { Styled } from './style';

const TextField = forwardRef((props, ref) => {
  let { error, endIcon, ...rest } = props;
  return (
    <Styled.TextField {...props}>
      <input {...rest} ref={ref} />
      <div className='icon-end'>{endIcon}</div>
    </Styled.TextField>
  );
});

export default TextField;
