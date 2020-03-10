import React, { useEffect } from 'react';
import fb from '../../firebase';
import { Styled } from './style';

const PostsList = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    let postsRef = fb.firestore().collection('posts');
    postsRef
      .get()
      .then(data => {
        data.forEach(doc => setPosts([doc.data()]));
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Styled.PostsList>
      <h1>posts</h1>
    </Styled.PostsList>
  );
};

export default PostsList;
