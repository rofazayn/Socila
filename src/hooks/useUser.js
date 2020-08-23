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

  async function updateCoverPicture(file, handleAvatarClose, cb) {
    try {
      // Generate a unique name for the image
      let imageName = `cover-${uuid()}`;
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
                coverImage: url,
              });
              userDetailsDispatch({
                type: userTypes.UPDATE_COVER_PICTURE,
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

  async function followUser(follower, following) {
    try {
      let followerDoc = firestore.collection('users').doc(follower.userId);
      let userToFollowDoc = firestore.collection('users').doc(following.userId);

      await followerDoc
        .collection('following')
        .doc(following.userId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.error('User already followed!');
            return;
          }
        });

      await userToFollowDoc
        .collection('followers')
        .doc(follower.userId)
        .set({
          followerId: follower.userId,
          userId: following.userId,
          createdAt: new Date().toDateString(),
        })
        .then(() => {
          followerDoc
            .collection('following')
            .doc(following.userId)
            .set(
              {
                followingId: following.userId,
                userId: follower.userId,
                createdAt: new Date().toDateString(),
              },
              (err) => console.error(err)
            );

          // Get the follower data and check if it exists.
          let userToFollowData = {};

          userToFollowDoc.get().then((doc) => {
            if (doc.exists) {
              userToFollowData = doc.data();
              userToFollowData.userId = doc.id;
              userToFollowData.followerCount++;
            }

            userToFollowDoc.update({
              followerCount: userToFollowData.followerCount,
            });
          });

          // Get the follower data and check if it exists.
          let followerData = {};

          followerDoc.get().then((doc) => {
            if (doc.exists) {
              followerData = doc.data();
              followerData.userId = doc.id;
              followerData.followingCount++;

              // Increase count.
              followerDoc.update({
                followingCount: followerData.followingCount,
              });
            }
          });
        })
        .then(() => {
          userDetailsDispatch({
            type: userTypes.ADD_USER_FOLLOWING,
            payload: {
              followingId: following.userId,
              userId: follower.userId,
              createdAt: new Date().toDateString(),
            },
          });
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function unfollowUser(follower, following) {
    try {
      let followerDoc = firestore.collection('users').doc(follower.userId);
      let userToFollowDoc = firestore.collection('users').doc(following.userId);

      await followerDoc
        .collection('following')
        .doc(following.userId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // Remove follower and following dataand increase count.
            let followObject = {};
            followObject = doc.data();

            userToFollowDoc
              .collection('followers')
              .doc(follower.userId)
              .get()
              .then((doc) => {
                // Get the follower data and check if it exists.
                let userToFollowData = {};

                userToFollowDoc.get().then((doc) => {
                  if (doc.exists) {
                    userToFollowData = doc.data();
                    userToFollowData.userId = doc.id;
                    userToFollowData.followerCount--;
                  }

                  userToFollowDoc.update({
                    followerCount: userToFollowData.followerCount,
                  });
                });

                // Get the follower data and check if it exists.
                let followerData = {};

                followerDoc.get().then((doc) => {
                  if (doc.exists) {
                    followerData = doc.data();
                    followerData.userId = doc.id;
                    followerData.followingCount--;

                    // Increase count.
                    followerDoc.update({
                      followingCount: followerData.followingCount,
                    });
                  }
                });

                doc.ref.delete();
              });
            doc.ref.delete();
            userDetailsDispatch({
              type: userTypes.REMOVE_USER_FOLLOWING,
              payload: followObject.followingId,
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    userDetails,
    userDetailsDispatch,
    userActions: {
      updateProfilePicture,
      updateCoverPicture,
      followUser,
      unfollowUser,
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
          .onSnapshot((doc) => {
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
