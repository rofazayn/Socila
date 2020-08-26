import React, { useContext, useState, useEffect } from 'react';
import SettingsBox from '../SettingsBox';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as InfoIconSvg } from '../../assets/icons/bx-info-circle.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
import { AuthContext } from '../../context/auth-context';
import { firestore } from '../../firebase';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';

const PhoneSettings = () => {
  const { userDetails } = useContext(AuthContext);
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  async function updatePhone(
    values,
    { setSubmitting, resetForm, setFieldError }
  ) {
    let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      setSubmitting(true);
      await userRef
        .update({ phoneNumber: values.newPhone })
        .then(() => {
          setSubmitting(false);
          resetForm({
            values: { currentPhone: values.newPhone || '', newPhone: '' },
          });
          setSaved(true);
        })
        .catch((err) => {
          setSubmitting(false);
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
          currentPhone: userDetails.phoneNumber || '',
          newPhone: '',
        }}
        validationSchema={vSchema}
        validateOnMount
        onSubmit={updatePhone}
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
              <Typography variant='h6'>Phone settings</Typography>
              <Typography variant='body2'>
                You can update your phone number by changing the new phone
                number field down below.
              </Typography>
            </div>
            <div className='box-body'>
              <TextField
                label='Current phone number'
                fullWidth
                placeholder={`${
                  values.currentPhone === ''
                    ? 'Enter your current phone number'
                    : 'No phone number is set.'
                }`}
                type='text'
                name='currentPhone'
                value={values.currentPhone}
                onChange={handleChange}
                disabled
              />
              <TextField
                label='New phone number'
                fullWidth
                placeholder='Enter your new phone number'
                type='text'
                name='newPhone'
                value={values.newPhone}
                onChange={handleChange}
                error={touched.newPhone && errors.newPhone}
              >
                {touched.newPhone && errors.newPhone ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20, height: 0 }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '100%' }}
                      className='error-text'
                    >
                      <ErrorMessage name='newPhone' />
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
                      : isSaved && values.newPhone === ''
                      ? '--saved'
                      : values.newPhone !== ''
                      ? '--on-change'
                      : !isSaved
                      ? '--no-save'
                      : ''
                  }`}
                >
                  <Typography variant='body2' className='info-value'>
                    {isSubmitting
                      ? 'Saving changes..'
                      : !isSaved && values.newPhone === ''
                      ? 'No changes'
                      : values.newPhone !== ''
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

export default PhoneSettings;
