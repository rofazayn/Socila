import React, { useContext } from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as CheckIconSvg } from '../../assets/icons/bx-check.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
import { AuthContext } from '../../context/auth-context';
import fb, { firestore } from '../../firebase';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const EmailSettings = () => {
  const { userDetails } = useContext(AuthContext);
  const user = fb.auth().currentUser;

  async function updateEmail(values, { setSubmitting, resetForm }) {
    let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      setSubmitting(true);
      await user
        .updateEmail(values.newEmail)
        .then(async () => {
          await userRef
            .update({ email: values.newEmail })
            .then(() => {
              setSubmitting(false);
              resetForm({
                values: { currentEmail: values.newEmail, newEmail: '' },
              });
            })
            .catch((err) => {
              setSubmitting(false);
              console.error(err);
            });
        })
        .catch((err) => {
          setSubmitting(false);
          console.error(err);
        });
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  }

  return (
    <SettingsBox>
      <Formik
        initialValues={{
          currentEmail: user.email,
          newEmail: '',
        }}
        validationSchema={vSchema}
        onSubmit={updateEmail}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          isValid,
          touched,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='box-header'>
              <Typography variant='h6'>Email settings</Typography>
              <Typography variant='body2'>
                Please make sure that you have full ownership and control over
                the new email.
              </Typography>
            </div>
            <div className='box-body'>
              <TextField
                label='Current email'
                fullWidth
                placeholder='Enter your current email'
                name='currentEmail'
                value={values.currentEmail}
                onChange={handleChange}
                disabled
              />
              <TextField
                label='New email'
                fullWidth
                placeholder='Enter your new email'
                name='newEmail'
                value={values.newEmail}
                onChange={handleChange}
              />
              {touched.newEmail && errors.newEmail ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    exit={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: '100%' }}
                    className='--error'
                  >
                    <ErrorMessage name='newEmail' />
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </div>

            <div className='box-footer'>
              <div className='status'>
                <Typography variant='body2'>
                  Status{' '}
                  <span className='status-state'>
                    <CheckIconSvg />
                    Saved
                  </span>
                </Typography>
              </div>
              <div className='actions'>
                <Button
                  type='submit'
                  className='fancy-button'
                  disabled={isSubmitting || !isValid}
                  endIcon={
                    isSubmitting ? (
                      <CircularProgress size={20} />
                    ) : (
                      <SaveIconSvg />
                    )
                  }
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </SettingsBox>
  );
};

export default EmailSettings;
