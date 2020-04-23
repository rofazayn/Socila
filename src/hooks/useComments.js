import fb from '../firebase';
import { useEffect, useContext } from 'react';
import { commentsTypes, userTypes, postsTypes } from '../constants';
import { PostsContext } from '../context/posts-context';
import { AuthContext } from '../context/auth-context';
import { useHistory } from 'react-router-dom';

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

export function useComments() {
  const { postsState, postsDispatch } = useContext(PostsContext);
  const { userDetails } = useContext(AuthContext);
  const history = useHistory();

  async function createComment(postId, values, actions, handleCommentClose) {
    try {
      let postRef = fb.firestore().collection('posts').doc(postId);

      let postCommentsRef = fb
        .firestore()
        .collection('posts')
        .doc(postId)
        .collection('comments');

      let postData = {};

      await postRef.get().then((doc) => {
        if (doc.exists) {
          postData = doc.data();
          postData.postId = doc.id;
        }
      });

      let newComment = {
        authorId: userDetails.userId,
        authorFullName: userDetails.fullName,
        authorImage: userDetails.profileImage || null,
        authorUsername: userDetails.username,
        body: values.body.trim(),
        // commentCount: 0,
        // likeCount: 0,
        postId: postId,
        createdAt: new Date().toISOString(),
      };

      await postCommentsRef
        .add(newComment)
        .then((doc) => {
          newComment.commentId = doc.id;
          postData.commentCount++;
          actions.resetForm();
          postRef.update({ commentCount: postData.commentCount });
          postsDispatch({
            type: commentsTypes.ADD_COMMENT,
            payload: newComment,
          });
          postsDispatch({ type: postsTypes.UPDATE_POST, payload: postData });
          handleCommentClose();
          history.push(`/posts/${postId}`);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      return console.error(error);
    }
  }

  return {
    comments: postsState.selectedPost.comments,
    commentsActions: {
      createComment,
    },
  };
}
