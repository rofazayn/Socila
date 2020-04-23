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
    case postsTypes.UPDATE_POST:
      if (state.posts !== null) {
        let targetPost = state.posts.findIndex(
          (post) => post.postId === action.payload.postId
        );
        state.posts[targetPost] = action.payload;
      }
      return state;
    case postsTypes.CLEAR_POSTS:
      return { posts: null, selectedPost: { post: null, comments: null } };
    // return state;
    case postsTypes.ADD_POST:
      return {
        posts: [action.payload, ...state.posts],
        selectedPost: { post: null, comments: null },
      };
    case postsTypes.LIKE_POST:
      if (
        state.selectedPost.post !== null &&
        state.selectedPost.post.postId === action.payload.postId
      ) {
        return {
          ...state,
          selectedPost: {
            post: action.payload,
            comments: state.selectedPost.comments,
          },
        };
      } else {
        if (state.posts !== null) {
          let targetPost = state.posts.findIndex(
            (post) => post.postId === action.payload.postId
          );
          state.posts[targetPost] = action.payload;
        }
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
        selectedPost: { post: state.selectedPost.post, comments: null },
      };

    case commentsTypes.ADD_COMMENT:
      if (
        state.selectedPost.post !== null &&
        state.selectedPost.post.postId === action.payload.postId
      ) {
        return {
          ...state,
          selectedPost: {
            post: {
              ...state.selectedPost.post,
              commentCount: state.selectedPost.post.commentCount + 1,
            },
            comments: [action.payload, ...state.selectedPost.comments],
          },
        };
      } else {
        if (state.posts !== null) {
          let targetPost = state.posts.findIndex(
            (post) => post.postId === action.payload.postId
          );
          state.posts[targetPost].commentCount++;
        }
      }
      return state;

    default:
      throw new Error();
  }
};

export default postsReducer;
