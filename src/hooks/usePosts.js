import { useEffect, useReducer } from 'react';
import fb from '../firebase';
import postsReducer from '../reducers/postsReducer';
import { postsTypes } from '../constants';

function usePosts() {
  const [posts, postsDispatch] = useReducer(postsReducer, []);

  useEffect(() => {
    let unsubscribe = fb
      .firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then(data => {
        let newPosts = [];
        data.forEach(doc => newPosts.push(doc.data()));
        postsDispatch({ type: postsTypes.GET_POSTS, payload: newPosts });
      })
      .catch(err => {
        console.error(err);
      });

    return () => unsubscribe();
  }, []);

  return posts;
}

export default usePosts;
