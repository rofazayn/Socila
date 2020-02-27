import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Container from '../../components/layout/Container';
import { Styled } from './style';
import { ReactComponent as SignUpSvg } from '../../assets/svg/LovingDoodle.svg';
import SignUpForm from '../../components/SignUpForm';
import { motion } from 'framer-motion';

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Styled.SignUpView>
        <Container>
          <div className='auth-section'>
            <div className='header-section'>
              <Typography variant='h6' className='header-text'>
                Create a new account
              </Typography>
            </div>
            <SignUpForm />
            <div className='helper-section'>
              <Typography variant='caption' className='helper-text'>
                Already have an account?{' '}
                <span className='--underlined --clickable-text'>
                  <Link to='/sign-in'>Sign in</Link>
                </span>
              </Typography>
            </div>
          </div>
        </Container>
        <div className='illustration-section'>
          <SignUpSvg />
        </div>
      </Styled.SignUpView>
    </motion.div>
  );
};

export default SignUp;
