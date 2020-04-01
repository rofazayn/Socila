import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../context/posts-context';
import { AuthContext } from '../context/auth-context';
import fb from '../firebase';
import { postsTypes, userTypes } from '../constants';

export function usePosts() {
  const { posts, postsDispatch } = useContext(PostsContext);
  const { userDetails, userDetailsDispatch } = useContext(AuthContext);

  async function createPost(values, actions) {
    let postsRef = fb.firestore().collection('posts');

    let newPost = {
      authorId: userDetails.userId,
      authorFullName: userDetails.fullName,
      authorImage: userDetails.profileImage || null,
      authorUsername: userDetails.username,
      body: values.body.trim(),
      commentCount: 0,
      likeCount: 0,
      shareCount: 0,
      createdAt: new Date().toISOString()
    };

    try {
      await postsRef
        .add(newPost)
        .then(doc => {
          newPost.postId = doc.id;
          actions.resetForm();
          return postsDispatch({ type: postsTypes.ADD_POST, payload: newPost });
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  const likePost = async postId => {
    try {
      const postDoc = fb.firestore().doc(`/posts/${postId}`);

      // Reference the like
      const likeDoc = fb
        .firestore()
        .collection('likes')
        .where('userId', '==', userDetails.userId)
        .where('postId', '==', postId)
        .limit(1);

      let postData = {};

      await postDoc
        .get()
        .then(doc => {
          if (doc.exists) {
            postData = doc.data();
            postData.postId = doc.id;

            return likeDoc.get();
          } else {
            throw new Error();
          }
        })
        .then(data => {
          if (data.empty) {
            let likeData = {
              postId: postId,
              userId: userDetails.userId,
              username: userDetails.username
            };
            return fb
              .firestore()
              .collection('likes')
              .add(likeData)
              .then(doc => {
                postData.likeCount++;
                likeData.likeId = doc.id;
                return postDoc.update({ likeCount: postData.likeCount });
              })
              .then(() => {
                postsDispatch({
                  type: postsTypes.LIKE_POST,
                  payload: postData
                });
                userDetailsDispatch({
                  type: userTypes.ADD_LIKE,
                  payload: likeData
                });
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            console.log('Post already liked!');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      return new Error();
    }
  };

  const unlikePost = async postId => {
    try {
      const postDoc = fb.firestore().doc(`/posts/${postId}`);

      // Reference the like
      const likeDoc = fb
        .firestore()
        .collection('likes')
        .where('userId', '==', userDetails.userId)
        .where('postId', '==', postId)
        .limit(1);

      let postData = {};

      await postDoc
        .get()
        .then(doc => {
          if (doc.exists) {
            postData = doc.data();
            postData.postId = doc.id;

            return likeDoc.get();
          } else {
            return console.log('Post not found');
          }
        })
        .then(data => {
          if (data.empty) {
            console.log('Post not liked!');
          } else {
            let likeData = {
              postId: postId,
              userId: userDetails.userId,
              username: userDetails.username
            };
            return fb
              .firestore()
              .doc(`/likes/${data.docs[0].id}`)
              .get()
              .then(doc => {
                postData.likeCount--;
                likeData.likeId = doc.id;
                doc.ref.delete();
                return postDoc.update({ likeCount: postData.likeCount });
              })
              .then(() => {
                postsDispatch({
                  type: postsTypes.UNLIKE_POST,
                  payload: postData
                });
                userDetailsDispatch({
                  type: userTypes.REMOVE_LIKE,
                  payload: likeData.likeId
                });
              })
              .catch(err => {
                console.error(err);
              });
          }
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      return new Error();
    }
  };

  return {
    posts,
    postsDispatch: postsDispatch,
    postsActions: {
      createPost,
      likePost,
      unlikePost
    }
  };
}

export function useFetchPosts(userId) {
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!userId) {
          await fb
            .firestore()
            .collection('posts')
            .orderBy('createdAt', 'desc')
            .limit(10)
            .get()
            .then(data => {
              let newPosts = [];
              data.forEach(doc =>
                newPosts.push({ postId: doc.id, ...doc.data() })
              );
              return postsDispatch({
                type: postsTypes.SET_POSTS,
                payload: newPosts
              });
            })
            .catch(err => {
              return console.error(err);
            });
        } else {
          await fb
            .firestore()
            .collection('posts')
            .where('authorId', '==', userId)
            .orderBy('createdAt', 'desc')
            .limit(10)
            .get()
            .then(data => {
              let newPosts = [];
              data.forEach(doc =>
                newPosts.push({ postId: doc.id, ...doc.data() })
              );
              return postsDispatch({
                type: postsTypes.SET_POSTS,
                payload: newPosts
              });
            })
            .catch(err => {
              return console.error(err);
            });
        }
      } catch (error) {
        return console.error(error);
      }
    };
    fetchPosts();

    return () => {
      return postsDispatch({
        type: postsTypes.CLEAR_POSTS
      });
    };
  }, [postsDispatch, userId]);

  return {
    posts: postsState.posts
  };
}

export const useFetchPost = postId => {
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    const fetchUser = async postId => {
      try {
        fb.firestore()
          .collection('posts')
          .doc(postId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return postsDispatch({
                type: postsTypes.SELECT_POST,
                payload: { postId: doc.id, ...doc.data() }
              });
            } else {
              return postsDispatch({
                type: postsTypes.SELECT_POST,
                payload: { noPost: true }
              });
            }
          });
      } catch (error) {
        return console.error(error);
      }
    };

    fetchUser(postId);

    return () => {
      return postsDispatch({
        type: postsTypes.SELECT_POST,
        payload: {}
      });
    };
  }, [postsDispatch, postId]);

  return { post: postsState.selectedPost };
};

export default usePosts;
