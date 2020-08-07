import React, { createContext, useReducer } from 'react';
import hashtagsReducer from '../reducers/hashtagsReducer';

export const HashtagsContext = createContext();
export const HashtagsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hashtagsReducer, { hashtags: null });

  return (
    <HashtagsContext.Provider
      value={{
        hashtagsState: state,
        hashtagsDispatch: dispatch,
      }}
    >
      {children}
    </HashtagsContext.Provider>
  );
};
