import React, { useEffect } from 'react';
import fb from '../firebase';

function usePosts() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    let postsRef = fb.firestore().collection('posts');
    postsRef
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then(data => {
        let newPosts = [];
        data.forEach(doc => newPosts.push(doc.data()));
        return newPosts;
      })
      .then(newPosts => setPosts([...newPosts]))
      .catch(err => console.error(err));
  }, []);

  return posts;
}

export default usePosts;
