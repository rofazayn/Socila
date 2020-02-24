import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import fb from '../firebase';

// Initiate the auth context
export const AuthContext = createContext();

// Make an auth provider that provides the current user
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fb.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
