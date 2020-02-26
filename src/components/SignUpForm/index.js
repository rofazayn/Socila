import React, { useEffect, useRef } from 'react';
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

const SignUpForm = () => {
  let nameRef = useRef();
  const history = useHistory();

  useEffect(() => {
    nameRef.current.focus();
  }, [nameRef]);

  return (
    <Styled.SignUpForm>
      <Formik
        validateOnMount={true}
        validationSchema={vSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          agreed: false
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          fb.auth()
            .createUserWithEmailAndPassword(values.email, values.password)
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
          </form>
        )}
      </Formik>
    </Styled.SignUpForm>
  );
};

export default SignUpForm;
