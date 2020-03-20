import React, { createContext, useReducer } from 'react';
import postsReducer from '../reducers/postsReducer';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, []);

  return (
    <PostsContext.Provider value={{ posts: posts, postsDispatch: dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
