import { useContext } from 'react';
import { PostsContext } from '../context/posts-context';
import { AuthContext } from '../context/auth-context';
import fb from '../firebase';
import { postsTypes } from '../constants';

function usePosts() {
  const { posts, postsDispatch } = useContext(PostsContext);
  const { userDetails } = useContext(AuthContext);

  async function fetchPosts() {
    try {
      await fb
        .firestore()
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get()
        .then(data => {
          let newPosts = [];
          data.forEach(doc => newPosts.push({ postId: doc.id, ...doc.data() }));
          return postsDispatch({
            type: postsTypes.SET_POSTS,
            payload: newPosts
          });
        })
        .catch(err => {
          return console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function createPost(values, actions) {
    let postsRef = fb.firestore().collection('posts');

    let newPost = {
      authorFullName: userDetails.fullName,
      authorImage: userDetails.profileImage,
      authorUsername: userDetails.username,
      body: values.body.trim(),
      commentCount: 0,
      likeCount: 0,
      shareCount: 0,
      createdAt: new Date().toISOString()
    };

    try {
      await postsRef
        .doc()
        .set(newPost)
        .then(() => {
          actions.resetForm();
          return postsDispatch({ type: postsTypes.ADD_POST, payload: newPost });
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  const likePost = async postId => {
    const postDoc = fb.firestore().doc(`/posts/${postId}`);

    // Reference the like
    const likeDoc = fb
      .firestore()
      .collection('likes')
      .where('userId', '==', userDetails.userId)
      .where('postId', '==', postId)
      .limit(1);

    let postData = {};

    postDoc
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
          return fb
            .firestore()
            .collection('likes')
            .add({
              postId,
              userId: userDetails.userId,
              username: userDetails.username
            })
            .then(() => {
              postData.likeCount++;
              return postDoc.update({ likeCount: postData.likeCount });
            })
            .then(() => {
              postsDispatch({ type: postsTypes.LIKE_POST, payload: postData });
            });
        } else {
          console.log('Post already liked!');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return {
    posts,
    postsDispatch: postsDispatch,
    postsActions: {
      fetchPosts,
      createPost,
      likePost
    }
  };
}

export default usePosts;
