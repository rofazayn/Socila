import { AuthContext } from '../context/auth-context';
import { useContext, useState, useEffect } from 'react';
import fb, { storage, firestore } from '../firebase';
import { v4 as uuid } from 'uuid';
import { userTypes } from '../constants';

const useUser = () => {
  const { userDetails, userDetailsDispatch } = useContext(AuthContext);

  async function updateProfilePicture(file, handleAvatarClose, cb) {
    try {
      // Generate a unique name for the image
      let imageName = `profile-${uuid()}`;
      // Storage reference
      let uploadRef = storage.ref(`images/${imageName}`);
      // Uplaod file
      const uploadTask = uploadRef.put(file);
      // Get the download link
      uploadTask.on(
        'state_changed',
        (snapshot) => console.log(snapshot),
        (err) => console.error(err),
        () => {
          storage
            .ref('images')
            .child(imageName)
            .getDownloadURL()
            .then((url) => {
              firestore.collection('users').doc(userDetails.userId).update({
                profileImage: url,
              });
              userDetailsDispatch({
                type: userTypes.UPDATE_PROFILE_PICTURE,
                payload: url,
              });
              cb();
              handleAvatarClose();
            })
            .catch((err) => {
              console.error(err);
              cb();
            });
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return {
    userDetails,
    userDetailsDispatch,
    userActions: {
      updateProfilePicture,
    },
  };
};

export const useFetchUser = (userId) => {
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async (userId) => {
      try {
        fb.firestore()
          .collection('users')
          .doc(userId)
          .get()
          .then((doc) => {
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
