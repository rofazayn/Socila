import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='/sign-in' />
        )
      }
    />
  );
};
