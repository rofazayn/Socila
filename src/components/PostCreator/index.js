import React, { useContext, useEffect } from 'react';
import { Styled } from './style';
import { IconButton } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';

import Avatar from '../Avatar';
import { AuthContext } from '../../context/auth-context';

const PostCreator = () => {
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    console.log(userDetails);
  });

  return (
    <Styled.PostCreator className='.post-creator'>
      <div className='form-wrapper'>
        <Avatar imgUrl={userDetails.profileImage} />
        <form noValidate>
          <textarea
            type='text'
            autoComplete='false'
            placeholder={`What's on your mind, ${userDetails &&
              userDetails.firstName}`}
          />
          <div className='submit-button'>
            <IconButton type='submit' size='medium'>
              <SendIconSvg />
            </IconButton>
          </div>
        </form>
      </div>
    </Styled.PostCreator>
  );
};

export default PostCreator;
