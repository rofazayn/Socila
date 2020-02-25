import React from 'react';
import { Styled } from './style';
import { Formik } from 'formik';
import fb from '../../firebase';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core';

const SignUpForm = () => {
  const history = useHistory();
  return (
    <Styled.SignUpForm>
      <Formik
        initialValues={{
          email: '',
          password: '',
          agreed: false
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const user = await fb
              .auth()
              .createUserWithEmailAndPassword(values.email, values.password);
            console.log(user);
            setSubmitting(false);
            history.push('/');
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              type='name'
              name='name'
              value={values.name}
              placeholder='Your name'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='name'
              label='Name'
            />
            <TextField
              variant='outlined'
              type='email'
              name='email'
              value={values.email}
              placeholder='Your email'
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='email'
              label='Email'
            />
            <TextField
              variant='outlined'
              type='password'
              name='password'
              value={values.password}
              placeholder='Your password'
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
                    checked={values.agreed}
                    onChange={handleChange}
                    name='agreed'
                    value='agreed'
                    color='primary'
                    required
                  />
                }
                label='I agree to the terms'
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
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
