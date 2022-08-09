import { navigate } from 'gatsby';
import React from 'react';
import { useAuth } from '../../context/auth.context';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return <Component {...rest} />;
};
