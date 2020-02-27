import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Container from '../../components/layout/Container';
import SignInForm from '../../components/SignInForm';
import { Styled } from './style';
import { ReactComponent as SignInSvg } from '../../assets/svg/GroovySittingDoodle.svg';
import { motion } from 'framer-motion';

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Styled.SignInView>
        <Container>
          <div className='auth-section'>
            <div className='header-section'>
              <Typography variant='h6' className='header-text'>
                Login into your account
              </Typography>
            </div>
            <SignInForm />
            <div className='helper-section'>
              <Typography variant='caption' className='helper-text'>
                No account?{' '}
                <span className='--underlined --clickable-text'>
                  <Link to='/sign-up'>Sign up</Link>
                </span>
              </Typography>
              <Typography variant='caption' className='helper-text'>
                |
              </Typography>
              <Typography variant='caption' className='helper-text'>
                Forgot my{' '}
                <span className='--underlined --clickable-text'>password</span>
              </Typography>
            </div>
          </div>
        </Container>
        <div className='illustration-section'>
          <SignInSvg />
        </div>
      </Styled.SignInView>
    </motion.div>
  );
};

export default SignIn;
