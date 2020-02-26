import React, { forwardRef } from 'react';
import { Styled } from './style';

const TextField = forwardRef((props, ref) => {
  let { error, ...rest } = props;
  return (
    <Styled.TextField {...props}>
      <input {...rest} ref={ref} />
    </Styled.TextField>
  );
});

export default TextField;
