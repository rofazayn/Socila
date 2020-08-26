import React from 'react';
import { Styled } from './style';
import { Formik, ErrorMessage } from 'formik';
import fb from '../../firebase';

import {
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from '@material-ui/core';
import TextField from '../layout/TextField';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const SignUpForm = () => {
  return (
    <Styled.SignUpForm>
      <Formik
        validateOnMount={true}
        validationSchema={vSchema}
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          agreed: false,
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);

          let usersRef = fb.firestore().collection('users');
          let usernamesRef = fb.firestore().collection('usernames');

          fb.firestore()
            .doc(`/usernames/${values.username}`)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setFieldError('general', 'Username is taken');
                setSubmitting(false);
              } else {
                return fb
                  .auth()
                  .createUserWithEmailAndPassword(values.email, values.password)
                  .then((userCreds) => {
                    usernamesRef
                      .doc(`${values.username}`)
                      .set({ userId: userCreds.user.uid });
                    usersRef.doc(`${userCreds.user.uid}`).set({
                      userId: userCreds.user.uid,
                      email: values.email,
                      username: values.username,
                      firstName: values.firstName,
                      lastName: values.lastName,
                      fullName: `${values.firstName} ${values.lastName}`,
                      createdAt: new Date().toISOString(),
                      bio: '',
                      followerCount: 0,
                      followingCount: 0,
                      profileImage: null,
                      coverImage: null,
                    });
                  })
                  .catch((err) => {
                    setSubmitting(false);
                    console.error(err);
                    setFieldError('general', err.message);
                  });
              }
            });
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              type='text'
              name='firstName'
              value={values.firstName}
              placeholder='First name'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='firstName'
              label='First name'
              error={touched.firstName && errors.firstName ? true : false}
            >
              {touched.firstName && errors.firstName ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='error-text'
                  >
                    <ErrorMessage name='firstName' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </TextField>

            <TextField
              variant='outlined'
              type='text'
              name='lastName'
              value={values.lastName}
              placeholder='Last name'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='lastName'
              label='Last name'
              error={touched.lastName && errors.lastName ? true : false}
            >
              {touched.lastName && errors.lastName ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='error-text'
                  >
                    <ErrorMessage name='lastName' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </TextField>

            <TextField
              variant='outlined'
              type='text'
              name='username'
              value={values.username}
              placeholder='Username'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='Username'
              label='Username'
              error={touched.username && errors.username ? true : false}
            >
              {touched.username && errors.username ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='error-text'
                  >
                    <ErrorMessage name='username' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </TextField>
            <TextField
              variant='outlined'
              type='email'
              name='email'
              value={values.email}
              placeholder='Email'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='email'
              label='Email'
              error={touched.email && errors.email ? true : false}
            >
              {touched.email && errors.email ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='error-text'
                  >
                    <ErrorMessage name='email' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </TextField>

            <TextField
              variant='outlined'
              type='password'
              name='password'
              value={values.password}
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='current-password'
              label='Password'
              error={touched.password && errors.password ? true : false}
            >
              {touched.password && errors.password ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='error-text'
                  >
                    <ErrorMessage name='password' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </TextField>

            {errors.general ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: '100%' }}
                  className='--error --center-text'
                >
                  {errors.general}
                </motion.div>
              </AnimatePresence>
            ) : null}

            <div className='form-controlers'>
              <FormControlLabel
                className='remember-checkbox'
                control={
                  <Checkbox
                    checked={values.agreed}
                    onChange={handleChange}
                    name='agreed'
                    value='agreed'
                    color='primary'
                  />
                }
                label='I agree to the terms'
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting || !isValid}
              >
                Sign up
                {isSubmitting && (
                  <CircularProgress
                    style={{ marginInlineStart: '16px' }}
                    size={20}
                  />
                )}
              </Button>
            </div>
            {touched.agreed && errors.agreed ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  exit={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='--error --center-text'
                >
                  <ErrorMessage name='agreed' />
                </motion.div>
              </AnimatePresence>
            ) : null}
          </form>
        )}
      </Formik>
    </Styled.SignUpForm>
  );
};

export default SignUpForm;
