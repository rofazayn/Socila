import React, { useRef, useEffect } from 'react';
import { Styled } from './style';
import { Formik } from 'formik';
import fb from '../../firebase';
import { useHistory } from 'react-router-dom';
import {
  // TextField,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core';
import TextField from '../layout/TextField';
import vSchema from './validation';

const SignInForm = () => {
  let emailRef = useRef();
  const history = useHistory();

  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef]);

  return (
    <Styled.SignInForm>
      <Formik
        validationSchema={vSchema}
        validateOnMount={true}
        initialValues={{
          email: '',
          password: '',
          remember: false
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          fb.auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(user => {
              console.log(user);
              setSubmitting(false);
              history.push('/');
            })
            .catch(err => {
              console.error(err);
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          isInitialValid
        }) => (
          <form onSubmit={handleSubmit} noValidate>
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
              ref={emailRef}
            />
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
            />
            <div className='form-controlers'>
              <FormControlLabel
                className='remember-checkbox'
                control={
                  <Checkbox
                    checked={values.remember}
                    onChange={handleChange}
                    name='remember'
                    value='remember'
                    color='primary'
                  />
                }
                label='Remember me'
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting || !isValid}
              >
                Login
                {isSubmitting && (
                  <CircularProgress
                    style={{ marginInlineStart: '16px' }}
                    size={20}
                  />
                )}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Styled.SignInForm>
  );
};

export default SignInForm;
