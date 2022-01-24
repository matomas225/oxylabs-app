import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoginPage from './Pages/LoginPage/LoginPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute needAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<ProtectedRoute needAuth={false} />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
