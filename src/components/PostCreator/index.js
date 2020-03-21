import React, { useContext } from 'react';
import { Styled } from './style';
import { IconButton, CircularProgress } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';
import Avatar from '../Avatar';
import { AuthContext } from '../../context/auth-context';
import fb from '../../firebase';
import { postsTypes } from '../../constants';
import usePosts from '../../hooks/usePosts';
import { Formik, ErrorMessage } from 'formik';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

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
      <Formik
        initialValues={{ body: '' }}
        onSubmit={createPost}
        validationSchema={vSchema}
        validateOnMount={true}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          touched,
          errors
        }) => (
          <>
            <div className='form-wrapper'>
              <Avatar imgUrl={userDetails.profileImage || null} />
              <form noValidate onSubmit={handleSubmit}>
                <textarea
                  type='text'
                  name='body'
                  value={values.body}
                  autoComplete='false'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={`What's on your mind, ${userDetails &&
                    userDetails.firstName}`}
                />
                <div className='submit-button'>
                  <IconButton
                    type='submit'
                    size='medium'
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={32} />
                    ) : (
                      <SendIconSvg className='create-post-icon' />
                    )}
                  </IconButton>
                </div>
              </form>
            </div>
            <div className='error-area'>
              {touched.body && errors.body ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='--error --center-text'
                  >
                    <ErrorMessage name='body' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </div>
          </>
        )}
      </Formik>
    </Styled.PostCreator>
  );
};

export default PostCreator;
