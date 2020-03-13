import React from 'react';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { Styled } from './style.js';

const Avatar = ({ imgUrl, alt }) => {
  return (
    <Styled.Avatar>
      {imgUrl ? <img src={imgUrl} alt={alt} /> : <UserIconSvg alt={alt} />}
    </Styled.Avatar>
  );
};

export default Avatar;
