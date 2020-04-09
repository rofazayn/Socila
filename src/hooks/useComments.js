import fb from '../firebase';
import { useEffect, useContext } from 'react';
import { commentsTypes } from '../constants';
import { PostsContext } from '../context/posts-context';

export const useFetchComments = (postId) => {
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    const fetchSelectedPostComments = async () => {
      try {
        await fb
          .firestore()
          .collection('posts')
          .doc(postId)
          .collection('comments')
          .orderBy('createdAt', 'desc')
          .limit(10)
          .get()
          .then((data) => {
            let fetchedComments = [];
            data.forEach((comment) => {
              fetchedComments.push({
                commentId: comment.id,
                ...comment.data(),
              });
            });
            postsDispatch({
              type: commentsTypes.SET_POST_COMMENTS,
              payload: fetchedComments,
            });
          })
          .catch((err) => {
            postsDispatch({
              type: commentsTypes.CLEAR_POST_COMMENTS,
            });
            console.error(err);
          });
      } catch (error) {
        postsDispatch({
          type: commentsTypes.CLEAR_POST_COMMENTS,
        });
        console.error(error);
      }
    };
    fetchSelectedPostComments();

    return () => {
      postsDispatch({
        type: commentsTypes.CLEAR_POST_COMMENTS,
      });
    };
  }, [postId, postsDispatch]);

  return { comments: postsState.selectedPost.comments };
};
