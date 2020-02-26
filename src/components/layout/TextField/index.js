import React, { forwardRef } from 'react';
import { Styled } from './style';

const TextField = forwardRef((props, ref) => {
  return (
    <Styled.TextField>
      <input {...props} ref={ref} />
    </Styled.TextField>
  );
});

export default TextField;
