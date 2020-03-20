import React, { useContext, useState } from 'react';
import { Styled } from './style';
import { IconButton } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';

import Avatar from '../Avatar';
import { AuthContext } from '../../context/auth-context';
import fb from '../../firebase';
import { postsTypes } from '../../constants';
import usePosts from '../../hooks/usePosts';

const PostCreator = () => {
  const { userDetails } = useContext(AuthContext);
  const [postInput, setPostInput] = useState('');

  const { postsDispatch } = usePosts();

  async function createPost(e) {
    e.preventDefault();
    let postsRef = fb.firestore().collection('posts');

    let newPost = {
      authorFullName: userDetails.fullName,
      authorImage: userDetails.profileImage,
      authorUsername: userDetails.username,
      body: postInput.trim(),
      commentCount: 0,
      likeCount: 0,
      shareCount: 0,
      createdAt: new Date().toISOString()
    };

    await postsRef
      .doc()
      .set(newPost)
      .then(() => {
        setPostInput('');
        return postsDispatch({ type: postsTypes.ADD_POST, payload: newPost });
      })
      .catch(err => console.error(err));
  }

  return (
    <Styled.PostCreator className='.post-creator'>
      <div className='form-wrapper'>
        <Avatar imgUrl={userDetails.profileImage || null} />
        <form noValidate onSubmit={createPost}>
          <textarea
            type='text'
            value={postInput}
            autoComplete='false'
            onChange={e => setPostInput(e.target.value)}
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
