import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import usePosts from '../../hooks/usePosts';

const PostsList = () => {
  const posts = usePosts();

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
