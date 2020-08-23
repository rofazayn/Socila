import { userTypes } from '../constants';

const userReducer = (state, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return { ...action.payload };

    case userTypes.RELOAD_USER:
      return { ...action.paylaod };

    case userTypes.CLEAR_USER:
      return action.payload;

    case userTypes.SET_USER_LIKES:
      return { ...state, likes: [...action.payload] };

    case userTypes.SET_USER_FOLLOWING:
      return { ...state, following: [...action.payload] };

    case userTypes.ADD_USER_FOLLOWING:
      return { ...state, following: [...state.following, action.payload] };

    case userTypes.REMOVE_USER_FOLLOWING:
      return {
        ...state,
        following: [
          ...state.following.filter(
            (following) => following.followingId !== action.payload
          ),
        ],
      };

    case userTypes.ADD_LIKE:
      return { ...state, likes: [...state.likes, action.payload] };

    case userTypes.REMOVE_LIKE:
      return {
        ...state,
        likes: [
          ...state.likes.filter((like) => like.likeId !== action.payload),
        ],
      };

    case userTypes.UPDATE_PROFILE_PICTURE:
      return { ...state, profileImage: action.payload };

    case userTypes.UPDATE_COVER_PICTURE:
      return { ...state, coverImage: action.payload };

    default:
      throw new Error();
  }
};

export default userReducer;
