import { postsTypes } from '../constants';

// let postsRef = fb.firestore().collection('posts');

const postsReducer = (state, action) => {
  switch (action.type) {
    case postsTypes.GET_POSTS:
      return [...state, ...action.payload];
    default:
      throw new Error();
  }
};

export default postsReducer;
