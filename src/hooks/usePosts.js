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
          data.forEach(doc => newPosts.push(doc.data()));
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
  return {
    posts,
    postsDispatch: postsDispatch,
    postsActions: {
      fetchPosts,
      createPost
    }
  };
}

export default usePosts;
