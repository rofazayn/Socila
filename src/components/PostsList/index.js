import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import usePosts from '../../hooks/usePosts';
import { CircularProgress } from '@material-ui/core';

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <Styled.PostsList>
      {posts.length > 0 ? (
        posts.map(post => {
          return <PostPreview post={post} key={post.createdAt} />;
        })
      ) : (
        <div className='posts-loading'>
          <CircularProgress />
        </div>
      )}
    </Styled.PostsList>
  );
};

export default PostsList;
