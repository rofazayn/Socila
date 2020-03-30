import { AuthContext } from '../context/auth-context';
import { useContext, useState, useEffect } from 'react';
import fb from '../firebase';

const useUser = userId => {
  const [userDetails, userDetailsDispatch] = useContext(AuthContext);

  return {
    userDetails,
    userDetailsDispatch
  };
};

export const useFetchUser = userId => {
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async userId => {
      try {
        fb.firestore()
          .collection('users')
          .doc(userId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return setFetchedUser(doc.data());
            } else {
              return setFetchedUser(false);
            }
          });
      } catch (error) {
        return console.error(error);
      }
    };

    fetchUser(userId);

    return () => {
      setFetchedUser(null);
    };
  }, [userId]);

  return fetchedUser;
};

export default useUser;
