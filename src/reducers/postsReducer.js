import { postsTypes, commentsTypes } from '../constants';

const postsReducer = (state, action) => {
  switch (action.type) {
    case postsTypes.SET_POSTS:
      return {
        posts: [...action.payload],
        selectedPost: { post: null, comments: null },
      };
    case postsTypes.SELECT_POST:
      return {
        ...state,
        selectedPost: { post: action.payload, comments: null },
      };
    case postsTypes.CLEAR_POSTS:
      return { posts: null, selectedPost: { post: null, comments: null } };
    case postsTypes.ADD_POST:
      return { posts: [action.payload, ...state.posts] };
    case postsTypes.LIKE_POST:
      if (state.posts === null || state.posts === []) {
        return {
          ...state,
          selectedPost: {
            post: action.payload,
            comments: state.selectedPost.comments,
          },
        };
      } else {
        let targetPost = state.posts.findIndex(
          (post) => post.postId === action.payload.postId
        );
        state.posts[targetPost] = action.payload;
      }
      return state;
    case commentsTypes.SET_POST_COMMENTS:
      return {
        ...state,
        selectedPost: {
          post: state.selectedPost.post,
          comments: action.payload,
        },
      };

    case commentsTypes.CLEAR_POST_COMMENTS:
      return {
        ...state,
        selectedPost: { post: state.selectedPost, comments: null },
      };

    default:
      throw new Error();
  }
};

export default postsReducer;
