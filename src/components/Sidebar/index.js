import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';

const Sidebar = () => {
  return (
    <Styled.Sidebar className='sidebar'>
      <Wrapper>
        <div className='search-placeholder'></div>
        <div className='sidebar-placeholder'></div>
      </Wrapper>
    </Styled.Sidebar>
  );
};

export default Sidebar;
