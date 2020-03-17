import React, { useEffect } from 'react';
import fb from '../../firebase';
import { Styled } from './style';
import PostPreview from '../PostPreview';

const PostsList = () => {
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

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  return (
    <Styled.PostsList>
      {posts &&
        posts.map(post => {
          return <PostPreview post={post} key={post.createdAt} />;
        })}
    </Styled.PostsList>
  );
};

export default PostsList;
