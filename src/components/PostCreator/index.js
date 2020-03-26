import React, { useContext } from 'react';
import { Styled } from './style';
import { IconButton, CircularProgress } from '@material-ui/core';
import { ReactComponent as SendIconSvg } from '../../assets/icons/bx-send.svg';
import Avatar from '../Avatar';
import { AuthContext } from '../../context/auth-context';
import { Formik, ErrorMessage } from 'formik';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';
import usePosts from '../../hooks/usePosts';

const PostCreator = () => {
  const { userDetails } = useContext(AuthContext);
  const { postsActions } = usePosts();

  const initialValues = { body: '' };

  return (
    <Styled.PostCreator className='.post-creator'>
      <Formik
        validateOnMount={true}
        initialValues={initialValues}
        onSubmit={postsActions.createPost}
        validationSchema={vSchema}
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
              {errors.body && false ? (
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
