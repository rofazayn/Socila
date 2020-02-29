import React from 'react';
import { Styled } from './style';

const Wrapper = ({ children, ...rest }) => {
  return (
    <Styled.Wrapper className='wrapper' {...rest}>
      {children}
    </Styled.Wrapper>
  );
};

export default Wrapper;
