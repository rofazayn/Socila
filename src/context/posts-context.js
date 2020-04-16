import React, { createContext, useReducer } from 'react';
import postsReducer from '../reducers/postsReducer';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: null,
    selectedPost: {
      post: null,
      comments: null,
    },
  });

  return (
    <PostsContext.Provider
      value={{
        postsState: state,
        postsDispatch: dispatch,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
