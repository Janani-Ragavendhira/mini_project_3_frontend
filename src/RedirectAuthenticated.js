import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './ContextProviders/AuthContext'

const RedirectAuthenticated = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home page if logged in
    }
  }, [user, navigate]);

  return user ? null : children; // Render nothing if user is logged in, otherwise render the children
};

export default RedirectAuthenticated;
