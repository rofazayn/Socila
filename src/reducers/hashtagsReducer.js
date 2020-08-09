import { hashtagsTypes } from '../constants';

const hashtagsReducer = (state, action) => {
  switch (action.type) {
    case hashtagsTypes.SET_TRENDING:
      return {
        hashtags: action.payload,
      };

    case hashtagsTypes.CLEAR_TRENDING:
      return {
        hashtags: [],
      };

    default:
      throw new Error();
  }
};

export default hashtagsReducer;
