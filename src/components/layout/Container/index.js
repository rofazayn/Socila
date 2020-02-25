import React from 'react';
import { Styled } from './style';

const Container = ({ children, ...rest }) => {
  return (
    <Styled.Container className='container' {...rest}>
      {children}
    </Styled.Container>
  );
};

export default Container;
