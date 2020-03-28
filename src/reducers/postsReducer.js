import { postsTypes } from '../constants';

const postsReducer = (state, action) => {
  switch (action.type) {
    case postsTypes.SET_POSTS:
      return [...action.payload];
    case postsTypes.CLEAR_POSTS:
      return null;
    case postsTypes.ADD_POST:
      return [action.payload, ...state];
    case postsTypes.LIKE_POST:
      let targetPost = state.findIndex(
        post => post.postId === action.payload.postId
      );
      state[targetPost] = action.payload;
      return [...state];
    default:
      throw new Error();
  }
};

export default postsReducer;
