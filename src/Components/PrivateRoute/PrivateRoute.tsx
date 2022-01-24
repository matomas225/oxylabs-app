import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: JSX.Element;
  needAuth: boolean;
}

function PrivateRoute({ children, needAuth }: PrivateProps) {
  const [cookies] = useCookies();

  if (needAuth) {
    return !Array.isArray(cookies['x-access-token']) ? (
      children
    ) : (
      <Navigate to="/" />
    );
  }
  return !Array.isArray(cookies['x-access-token']) ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
}

export default PrivateRoute;
