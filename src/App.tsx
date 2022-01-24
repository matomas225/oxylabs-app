import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoginPage from './Pages/LoginPage/LoginPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute needAuth={false}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute needAuth>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
