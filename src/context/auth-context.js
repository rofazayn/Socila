import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import fb from '../firebase';

// Initiate the auth context
export const AuthContext = createContext();

// Make an auth provider that provides the current user
export const AuthProvider = ({ children }) => {
  // Use a user state and initialize it with no current user *null*
  const [currentUser, setCurrentUser] = useState(null);

  // Update the current state whenever firebase's auth observer changes
  useEffect(() => {
    fb.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  // Return my auth provider and pass the current user as its value
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
