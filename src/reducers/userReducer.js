import { userTypes } from '../constants';

const userReducer = (state, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return { ...action.payload };

    case userTypes.CLEAR_USER:
      return action.payload;

    case userTypes.SET_USER_LIKES:
      return { ...state, likes: [...action.payload] };

    case userTypes.ADD_LIKE:
      return { ...state, likes: [...state.likes, action.payload] };

    case userTypes.ADD_FAKE_LIKE:
      return { ...state, likes: [...state.likes, { postId: action.payload }] };

    case userTypes.REMOVE_LIKE:
      return {
        ...state,
        likes: [...state.likes.filter(like => like.likeId !== action.payload)]
      };

    case userTypes.REMOVE_FAKE_LIKE:
      return {
        ...state,
        likes: [...state.likes.filter(like => like.postId !== action.payload)]
      };

    default:
      throw new Error();
  }
};

export default userReducer;
