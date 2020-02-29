import React from 'react';
import { Styled } from './style';
import Content from '../Content';

const Main = () => {
  return (
    <Styled.Main>
      <Content />
      <div className='sidebar'></div>
    </Styled.Main>
  );
};

export default Main;
