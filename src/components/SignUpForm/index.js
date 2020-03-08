import React, { useEffect, useRef } from 'react';
import { Styled } from './style';
import { Formik, ErrorMessage } from 'formik';
import fb from '../../firebase';
// import { useHistory } from 'react-router-dom';
import {
  // TextField,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core';
import TextField from '../layout/TextField';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const SignUpForm = () => {
  let nameRef = useRef();
  // const history = useHistory();

  useEffect(() => {
    // nameRef.current.focus();
  }, [nameRef]);

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
          agreed: false
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);

          let usersRef = fb.firestore().collection('users');

          fb.firestore()
            .doc(`/users/${values.username}`)
            .get()
            .then(doc => {
              if (doc.exists) {
                return setFieldError('general', 'Username is already taken');
              } else {
                return fb
                  .auth()
                  .createUserWithEmailAndPassword(values.email, values.password)
                  .then(userCreds => {
                    usersRef.doc(`${userCreds.user.uid}`).set({
                      email: values.email,
                      username: values.username,
                      name: values.name,
                      createdAt: new Date().toISOString(),
                      userId: userCreds.user.uid
                    });
                    setSubmitting(false);
                  })
                  .catch(err => {
                    console.error(err);
                    setFieldError('general', err.message);
                  })
                  .finally(() => {
                    setSubmitting(false);
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
          isValid
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              type='text'
              name='name'
              value={values.name}
              placeholder='Name'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='name'
              label='Name'
              ref={nameRef}
              error={touched.name && errors.name ? true : false}
            />
            {touched.name && errors.name ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: '100%' }}
                  className='--error --center-text'
                >
                  <ErrorMessage name='name' />
                </motion.div>
              </AnimatePresence>
            ) : null}
            <TextField
              variant='outlined'
              type='text'
              name='username'
              value={values.username}
              placeholder='Username'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='Username'
              label='username'
              error={touched.username && errors.username ? true : false}
            />
            {touched.username && errors.username ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: '100%' }}
                  className='--error --center-text'
                >
                  <ErrorMessage name='username' />
                </motion.div>
              </AnimatePresence>
            ) : null}
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
            />
            {touched.email && errors.email ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: '100%' }}
                  className='--error --center-text'
                >
                  <ErrorMessage name='email' />
                </motion.div>
              </AnimatePresence>
            ) : null}
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
            />
            {touched.password && errors.password ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: '100%' }}
                  className='--error --center-text'
                >
                  <ErrorMessage name='password' />
                </motion.div>
              </AnimatePresence>
            ) : null}

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
