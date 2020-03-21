import React, { useContext } from 'react';
import { Styled } from './style';
import { IconButton, CircularProgress } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';

import Avatar from '../Avatar';
import { AuthContext } from '../../context/auth-context';
import fb from '../../firebase';
import { postsTypes } from '../../constants';
import usePosts from '../../hooks/usePosts';
import { Formik } from 'formik';

const PostCreator = () => {
  const { userDetails } = useContext(AuthContext);

  const { postsDispatch } = usePosts();

  async function createPost(values, actions) {
    let postsRef = fb.firestore().collection('posts');

    let newPost = {
      authorFullName: userDetails.fullName,
      authorImage: userDetails.profileImage,
      authorUsername: userDetails.username,
      body: values.body.trim(),
      commentCount: 0,
      likeCount: 0,
      shareCount: 0,
      createdAt: new Date().toISOString()
    };

    try {
      await postsRef
        .doc()
        .set(newPost)
        .then(() => {
          actions.resetForm();
          return postsDispatch({ type: postsTypes.ADD_POST, payload: newPost });
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Styled.PostCreator className='.post-creator'>
      <div className='form-wrapper'>
        <Avatar imgUrl={userDetails.profileImage || null} />
        <Formik initialValues={{ body: '' }} onSubmit={createPost}>
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form noValidate onSubmit={handleSubmit}>
              <textarea
                type='text'
                name='body'
                value={values.body}
                autoComplete='false'
                onChange={handleChange}
                placeholder={`What's on your mind, ${userDetails &&
                  userDetails.firstName}`}
              />
              <div className='submit-button'>
                <IconButton type='submit' size='medium'>
                  {isSubmitting ? (
                    <CircularProgress size={32} />
                  ) : (
                    <SendIconSvg className='create-post-icon' />
                  )}
                </IconButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Styled.PostCreator>
  );
};

export default PostCreator;
