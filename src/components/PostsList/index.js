import React, { useEffect } from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import { CircularProgress } from '@material-ui/core';
import fb from '../../firebase';
import { postsTypes } from '../../constants';
import usePosts from '../../hooks/usePosts';

const PostsList = () => {
  const { posts, postsDispatch } = usePosts();

  useEffect(() => {
    fb.firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then(data => {
        let newPosts = [];
        data.forEach(doc => newPosts.push(doc.data()));
        return postsDispatch({ type: postsTypes.SET_POSTS, payload: newPosts });
      })
      .catch(err => {
        return console.error(err);
      });
  }, [postsDispatch]);

  return (
    <Styled.PostsList>
      {posts.length > 0 ? (
        posts.map(post => {
          return <PostPreview post={post} key={post.createdAt} />;
        })
      ) : (
        <div className='posts-fallback'>
          <CircularProgress />
        </div>
      )}
    </Styled.PostsList>
  );
};

export default PostsList;
