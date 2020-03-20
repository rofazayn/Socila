import { postsTypes } from '../constants';

const postsReducer = (state, action) => {
  switch (action.type) {
    case postsTypes.SET_POSTS:
      return [...state, ...action.payload];
    case postsTypes.ADD_POST:
      return [action.payload, ...state];
    default:
      throw new Error();
  }
};

export default postsReducer;
