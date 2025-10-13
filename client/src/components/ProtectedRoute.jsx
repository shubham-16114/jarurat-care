import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/auth" replace />;
  }

  // If token exists, render the component that was passed in
  return children;
}

export default ProtectedRoute;