import React from 'react';
import { Styled } from './style';
import { IconButton } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';

const PostCreator = () => {
  return (
    <Styled.PostCreator className='.post-creator'>
      <div className='form-wrapper'>
        <div className='avatar'>
          <UserIconSvg />
        </div>
        <form noValidate>
          <textarea
            type='text'
            autoComplete='false'
            placeholder="What's on your mind, Khaleed?"
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
