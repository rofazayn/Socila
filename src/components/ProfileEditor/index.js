import React, { useContext, useState, useEffect } from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '../layout/TextField';
import { ReactComponent as InfoIconSvg } from '../../assets/icons/bx-info-circle.svg';
import { ReactComponent as SaveIconSvg } from '../../assets/icons/bx-save.svg';
import { Formik, ErrorMessage } from 'formik';
import { AuthContext } from '../../context/auth-context';
import fb, { firestore } from '../../firebase';
import vSchema from './validation';
import { AnimatePresence, motion } from 'framer-motion';
import { Styled } from './style';

const ProfileEditor = () => {
  const { userDetails } = useContext(AuthContext);
  const user = fb.auth().currentUser;
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  async function updateProfile(
    values,
    { setSubmitting, resetForm, setFieldError }
  ) {
    let userRef = firestore.collection('users').doc(userDetails.userId);

    try {
      setSubmitting(true);
      await user
        .updateProfile({
          displayName: `${values.firstName} ${values.lastName}`,
        })
        .then(async () => {
          await userRef
            .update({
              firstName: values.firstName,
              lastName: values.lastName,
              fullName: `${values.firstName} ${values.lastName}`,
              bio: values.bio,
            })
            .then(() => {
              setSubmitting(false);
              setSaved(true);
            })
            .catch((err) => {
              setSubmitting(false);
              console.error('Oops!', err);
            });
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
    <Styled.ProfileEditor>
      <Formik
        initialValues={{
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          bio: userDetails.bio || '',
        }}
        validationSchema={vSchema}
        validateOnMount
        onSubmit={updateProfile}
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
              <Typography variant='h6'>Edit your profile</Typography>
              <Typography variant='body2'>
                You could update your profile details by changing the fields
                down below, it's recommended that you use your correct
                information.
              </Typography>
            </div>
            <div className='box-body'>
              <TextField
                label='First name'
                fullWidth
                placeholder='Enter your first name'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
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
                label='Last name'
                fullWidth
                placeholder='Enter your last name'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && errors.lastName}
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
                label='Biography'
                fullWidth
                placeholder='Enter your bio'
                name='bio'
                value={values.bio}
                onChange={handleChange}
                error={touched.bio && errors.bio}
              >
                {touched.bio && errors.bio ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20, height: 0 }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: '100%' }}
                      className='error-text'
                    >
                      <ErrorMessage name='bio' />
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
            </div>
          </form>
        )}
      </Formik>
    </Styled.ProfileEditor>
  );
};

export default ProfileEditor;
