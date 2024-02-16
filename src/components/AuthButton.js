// Example component using login/logout buttons
import React from 'react';
import { useAuth } from './AuthContext';

const AuthButtons = () => {
  const { authenticated, login, logout } = useAuth();

  return (
    <div>
      {authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default AuthButtons;
