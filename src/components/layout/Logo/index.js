import React from 'react';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo.svg';
// import { NavLink } from 'react-router-dom';
import { Styled } from './style';

const Logo = () => {
  return (
    <Styled.Logo to='/' exact>
      <LogoSvg className='logo-svg' />
    </Styled.Logo>
  );
};

export default Logo;
