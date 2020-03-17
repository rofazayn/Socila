import React from 'react';
import { AuthContext } from '../../context/auth-context';
import Loader from '../Loader';
import Dashboard from '../Dashboard';
import Landing from '../Landing';

const Welcome = () => {
  const { currentUser, userDetails } = React.useContext(AuthContext);

  return (
    <>
      {currentUser === null || userDetails === null ? (
        <Loader />
      ) : currentUser === false && userDetails === false ? (
        <Landing />
      ) : currentUser && userDetails ? (
        <Dashboard />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;
