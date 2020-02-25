import React, { useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import fb from '../../firebase';
import { useHistory, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Container from '../../components/layout/Container';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const user = await fb.auth().signInWithEmailAndPassword(email, password);
      console.log(user);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-in'>
      <Container>
        <Typography variant='h1'>Sign in</Typography>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              value={email}
              placeholder='You email'
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Your password'
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button type='submit'>Sign in</button>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
