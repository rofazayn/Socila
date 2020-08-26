import React, { useContext, useState, useEffect } from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as InfoIconSvg } from '../../assets/icons/bx-info-circle.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
import { AuthContext } from '../../context/auth-context';
import fb, { firestore } from '../../firebase';

import { AnimatePresence, motion } from 'framer-motion';

const AccountDeactivationSettings = () => {
  const { userDetails } = useContext(AuthContext);
  const user = fb.auth().currentUser;
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  async function updateLanguage(
    values,
    { setSubmitting, resetForm, setFieldError }
  ) {
    // let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      // setSubmitting(true);
      // await user
      //   .updateEmail(values.newEmail)
      //   .then(async () => {
      //     await userRef
      //       .update({ email: values.newEmail })
      //       .then(() => {
      //         setSubmitting(false);
      //         resetForm({
      //           values: { currentEmail: values.newEmail, newEmail: '' },
      //         });
      //         setSaved(true);
      //       })
      //       .catch((err) => {
      //         setSubmitting(false);
      //         console.error('test', err);
      //       });
      //   })
      //   .catch((err) => {
      //     setSubmitting(false);
      //     setFieldError('general', err.message);
      //     console.error(err);
      //   });
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  }

  return (
    <SettingsBox>
      <Formik
        initialValues={{
          currentLanguage: 'English',
        }}
        validateOnMount
        onSubmit={updateLanguage}
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
              <Typography variant='h6'>Account deactivation</Typography>
              <Typography variant='body2'>
                If you are tired of social media and you want to take a break,
                it is a good idea to deactivate your account.
              </Typography>
            </div>
            <div className='box-body'>
              <div className='soon'>
                <InfoIconSvg />
                <Typography variant='body2' className='soon'>
                  This feature is coming soon!
                </Typography>
              </div>
              {/* <TextField
                label='Display language'
                fullWidth
                placeholder='You current display language'
                name='currentEmail'
                value={values.currentLanguage}
                onChange={handleChange}
                disabled
              /> */}
              {/* <TextField
                label='New email'
                fullWidth
                placeholder='Enter your new email'
                name='newEmail'
                value={values.newEmail}
                onChange={handleChange}
                error={touched.newEmail && errors.newEmail}
              >
                {touched.newEmail && errors.newEmail ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20, height: 0 }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '100%' }}
                      className='error-text'
                    >
                      <ErrorMessage name='newEmail' />
                    </motion.div>
                  </AnimatePresence>
                ) : null}
              </TextField> */}

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

            {/* <div className='box-footer'>
              <div className='status'>
                <InfoIconSvg />
                <Typography variant='body2' className='info-text'>
                  Status
                </Typography>
                <div
                  className={`status-state ${
                    isSubmitting
                      ? '--submitting'
                      : isSaved && values.newEmail === ''
                      ? '--saved'
                      : values.newEmail !== ''
                      ? '--on-change'
                      : !isSaved
                      ? '--no-save'
                      : ''
                  }`}
                >
                  <Typography variant='body2' className='info-value'>
                    {isSubmitting
                      ? 'Saving changes..'
                      : !isSaved && values.newEmail === ''
                      ? 'No changes'
                      : values.newEmail !== ''
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
            </div> */}
          </form>
        )}
      </Formik>
    </SettingsBox>
  );
};

export default AccountDeactivationSettings;
