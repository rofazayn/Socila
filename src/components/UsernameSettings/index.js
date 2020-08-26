import React, { useContext, useState, useEffect } from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as InfoIconSvg } from '../../assets/icons/bx-info-circle.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
import { AuthContext } from '../../context/auth-context';
import fb, { firestore } from '../../firebase';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const UsernameSettings = () => {
  const { userDetails } = useContext(AuthContext);
  const user = fb.auth().currentUser;
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  async function updateUsername(
    values,
    { setSubmitting, resetForm, setFieldError }
  ) {
    let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      setSubmitting(true);
      await userRef
        .update({ username: values.newUsername })
        .then(() => {
          setSubmitting(false);
          resetForm({
            values: { currentUsername: values.newUsername, newUsername: '' },
          });
          setSaved(true);
        })
        .catch((err) => {
          setSubmitting(false);
          console.error('test', err);
          setFieldError('general', err.message);
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
          currentUsername: userDetails.username,
          newUsername: '',
        }}
        validationSchema={vSchema}
        validateOnMount
        onSubmit={updateUsername}
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
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='box-header'>
              <Typography variant='h6'>Username settings</Typography>
              <Typography variant='body2'>
                You can update your username by changing the new username field
                down below.
              </Typography>
            </div>
            <div className='box-body'>
              <TextField
                label='Current username'
                fullWidth
                placeholder='Enter your current username'
                type='text'
                name='currentUsername'
                value={values.currentUsername}
                onChange={handleChange}
                disabled
              />
              <TextField
                label='New username'
                fullWidth
                placeholder='Enter your new username'
                type='text'
                name='newUsername'
                value={values.newUsername}
                onChange={handleChange}
                error={touched.newUsername && errors.newUsername}
              >
                {touched.newUsername && errors.newUsername ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20, height: 0 }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '100%' }}
                      className='error-text'
                    >
                      <ErrorMessage name='newUsername' />
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
                    className='--error'
                  >
                    {errors.general}
                  </motion.div>
                </AnimatePresence>
              ) : null}
            </div>

            <div className='box-footer'>
              <div className='status'>
                <InfoIconSvg />
                <Typography variant='body2' className='info-text'>
                  Status
                </Typography>
                <div
                  className={`status-state ${
                    isSubmitting
                      ? '--submitting'
                      : isSaved && values.newUsername === ''
                      ? '--saved'
                      : values.newUsername !== ''
                      ? '--on-change'
                      : !isSaved
                      ? '--no-save'
                      : ''
                  }`}
                >
                  <Typography variant='body2' className='info-value'>
                    {isSubmitting
                      ? 'Saving changes..'
                      : !isSaved && values.newUsername === ''
                      ? 'No changes'
                      : values.newUsername !== ''
                      ? 'Not saved'
                      : 'Saved'}
                  </Typography>
                </div>
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

export default UsernameSettings;
