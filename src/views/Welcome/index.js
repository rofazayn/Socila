import React from 'react';
import { AuthContext } from '../../context/auth-context';
import Loader from '../Loader';
import Dashboard from '../Dashboard';
import Landing from '../Landing';

const Welcome = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <>
      {currentUser === null ? (
        <Loader />
      ) : currentUser === false ? (
        <Landing />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Welcome;
