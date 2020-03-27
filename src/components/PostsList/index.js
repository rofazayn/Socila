import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import { CircularProgress } from '@material-ui/core';
import { useFetchPosts } from '../../hooks/usePosts';

const PostsList = ({ userId }) => {
  const { posts } = useFetchPosts(userId);

  return (
    <Styled.PostsList>
      {posts && posts.length > 0 ? (
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
