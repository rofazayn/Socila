import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import { CircularProgress, Typography } from '@material-ui/core';
import { useFetchPosts } from '../../hooks/usePosts';

const PostsList = ({ userId }) => {
  const { posts } = useFetchPosts(userId);

  return (
    <Styled.PostsList>
      {posts === null ? (
        <div className='posts-fallback'>
          <CircularProgress />
        </div>
      ) : posts && posts.length > 0 ? (
        posts.map(post => {
          return <PostPreview key={post.postId} {...post} />;
        })
      ) : (
        <div className='posts-fallback'>
          <Typography variant='body1' className='no-posts'>
            There are no posts available at the moment.
          </Typography>
        </div>
      )}
    </Styled.PostsList>
  );
};

export default PostsList;
