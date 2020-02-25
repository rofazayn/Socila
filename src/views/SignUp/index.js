import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Container from '../../components/layout/Container';
import { Styled } from './style';
import { ReactComponent as SignUpSvg } from '../../assets/svg/DancingDoodle.svg';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <Styled.SignUpView>
      <Container>
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
        <div className='illustration-section'>
          <SignUpSvg />
        </div>
      </Container>
    </Styled.SignUpView>
  );
};

export default SignUp;
