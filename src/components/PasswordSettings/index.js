import React, { useState, useEffect } from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as InfoIconSvg } from '../../assets/icons/bx-info-circle.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
// import { AuthContext } from '../../context/auth-context';
import fb from '../../firebase';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const PasswordSettings = () => {
  // const { userDetails } = useContext(AuthContext);
  const user = fb.auth().currentUser;
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  async function updatePassword(
    values,
    { setSubmitting, resetForm, setFieldError }
  ) {
    // let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      setSubmitting(true);
      await user
        .updatePassword(values.newPassword)
        .then(() => {
          setSubmitting(false);
          resetForm({
            values: { currentPassword: '********', newPassword: '' },
          });
          setSaved(true);
        })
        .catch((err) => {
          setSubmitting(false);
          setFieldError('general', err.message);
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
          currentPassword: '********',
          newPassword: '',
        }}
        validationSchema={vSchema}
        validateOnMount
        onSubmit={updatePassword}
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
              <Typography variant='h6'>Password settings</Typography>
              <Typography variant='body2'>
                Careful! proceeding with filling up this form requires extreme
                caution.
              </Typography>
            </div>
            <div className='box-body'>
              <TextField
                label='Current password'
                fullWidth
                placeholder='Enter your current password'
                type='password'
                name='currentPassword'
                value={values.currentPassword}
                onChange={handleChange}
                disabled
              />
              <TextField
                label='New password'
                fullWidth
                placeholder='Enter your new password'
                type='password'
                name='newPassword'
                value={values.newPassword}
                onChange={handleChange}
                error={touched.newPassword && errors.newPassword}
              >
                {touched.newPassword && errors.newPassword ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20, height: 0 }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '100%' }}
                      className='error-text'
                    >
                      <ErrorMessage name='newPassword' />
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
                      : isSaved && values.newPassword === ''
                      ? '--saved'
                      : values.newPassword !== ''
                      ? '--on-change'
                      : !isSaved
                      ? '--no-save'
                      : ''
                  }`}
                >
                  <Typography variant='body2' className='info-value'>
                    {isSubmitting
                      ? 'Saving changes..'
                      : !isSaved && values.newPassword === ''
                      ? 'No changes'
                      : values.newPassword !== ''
                      ? 'Not saved'
                      : 'Saved'}
                  </Typography>
                </div>
              </div>
              <div className='actions'>
                <Button
                  type='submit'
                  className='fancy-button'
                  disabled={isSubmitting}
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

export default PasswordSettings;
