import React, { useEffect } from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import { CircularProgress } from '@material-ui/core';
import usePosts from '../../hooks/usePosts';

const PostsList = () => {
  const { posts, postsActions } = usePosts();

  useEffect(() => {
    postsActions.fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Styled.PostsList>
      {posts.length > 0 ? (
        posts.map(post => {
          return <PostPreview key={post.postId} {...post} />;
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
