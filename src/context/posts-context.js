import React, { createContext, useReducer } from 'react';
import postsReducer from '../reducers/postsReducer';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [posts, postsDispatch] = useReducer(postsReducer, null);

  return (
    <PostsContext.Provider
      value={{
        posts: posts,
        postsDispatch: postsDispatch
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
