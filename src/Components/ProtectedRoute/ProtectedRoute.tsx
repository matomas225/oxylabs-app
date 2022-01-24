import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  needAuth: boolean;
}

function ProtectedRoute({ needAuth }: ProtectedRouteProps) {
  const isLogged = document.cookie.split('x-access-token=')[1];

  if (needAuth) {
    return isLogged ? <Outlet /> : <Navigate to="/" />;
  }
  return isLogged ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default ProtectedRoute;
