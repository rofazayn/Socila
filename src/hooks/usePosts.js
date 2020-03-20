import { useContext } from 'react';
import { PostsContext } from '../context/posts-context';

function usePosts() {
  const { posts, postsDispatch } = useContext(PostsContext);

  return { posts, postsDispatch: postsDispatch };
}

export default usePosts;
