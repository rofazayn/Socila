import React from 'react';
import { Styled } from './style';
import { IconButton } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';

import Avatar from '../Avatar';

const PostCreator = () => {
  return (
    <Styled.PostCreator className='.post-creator'>
      <div className='form-wrapper'>
        <Avatar imgUrl='https://avatars0.githubusercontent.com/u/37586909?s=460&u=c8cfa92dc4dac1270cd4a290cd5f27c4aa55c576&v=4' />
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
