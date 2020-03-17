import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import fb from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = fb.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        fb.firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then(doc => setUserDetails(doc.data()));
      } else {
        setCurrentUser(false);
        setUserDetails(null);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
