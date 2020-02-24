import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import fb from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const user = await fb.auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='sign-in'>
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
    </div>
  );
};

export default SignIn;
