import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import usePosts from '../../hooks/usePosts';

const PostsList = () => {
  const posts = usePosts();

  return (
    <Styled.PostsList>
      {posts.length > 0 &&
        posts.map(post => {
          return <PostPreview post={post} key={post.createdAt} />;
        })}
    </Styled.PostsList>
  );
};

export default PostsList;
