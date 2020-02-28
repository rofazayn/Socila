import React, { useContext } from 'react';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo.svg';
// import { NavLink } from 'react-router-dom';
import { Styled } from './style';
import { AuthContext } from '../../../context/auth-context';
import { useLocation } from 'react-router-dom';

const Logo = props => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <Styled.LogoDiv {...props}>
        <LogoSvg className='logo-svg' />
      </Styled.LogoDiv>
    );
  } else {
    return (
      <Styled.LogoLink {...props} to={!!currentUser ? '/app' : '/'} exact>
        <LogoSvg className='logo-svg' />
      </Styled.LogoLink>
    );
  }
};

export default Logo;
