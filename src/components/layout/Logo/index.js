import React, { useContext } from 'react';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo.svg';
// import { NavLink } from 'react-router-dom';
import { Styled } from './style';
import { AuthContext } from '../../../context/auth-context';

const Logo = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Styled.Logo to={!!currentUser ? '/app' : '/'} exact>
      <LogoSvg className='logo-svg' />
    </Styled.Logo>
  );
};

export default Logo;
