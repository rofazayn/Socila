import React, { useContext } from 'react';
import { Styled } from './style';
import Avatar from '../Avatar';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import { ReactComponent as HeartIcon } from '../../assets/icons/bx-heart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/bx-comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/bx-share.svg';
import { motion } from 'framer-motion';
import usePosts from '../../hooks/usePosts';
import { AuthContext } from '../../context/auth-context';
import { Formik } from 'formik';
import dayjs from '../../helpers/dayjs';
import { Link } from 'react-router-dom';

const PostPreview = props => {
  const {
    postId,
    authorId,
    authorImage,
    authorFullName,
    authorUsername,
    createdAt,
    body,
    likeCount,
    commentCount,
    shareCount
  } = props;
  const { postsActions } = usePosts();
  const { userDetails } = useContext(AuthContext);

  const isCurrentUser = () => {
    if (authorId === userDetails.userId) {
      return true;
    }

    return false;
  };

  const isPostLiked = () => {
    if (
      userDetails.likes &&
      userDetails.likes.find(like => like.postId === postId)
    ) {
      return true;
    }

    return false;
  };

  const handleLike = values => {
    let isLiked = isPostLiked();

    if (!isLiked) {
      return postsActions.likePost(values.postId);
    }

    return postsActions.unlikePost(values.postId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.PostPreview>
        <div className='post-section avatar'>
          <div className='avatar'>
            <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
              <Avatar imgUrl={authorImage} alt={authorFullName} />
            </Link>
          </div>
        </div>
        <div className='post-section details'>
          <div className='post-header'>
            <div className='author-name spaced'>
              <Typography variant='body2'>
                <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                  {authorFullName}
                </Link>
              </Typography>
            </div>

            <div className='author-username spaced'>
              <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                <Typography variant='body2'>@{authorUsername}</Typography>
              </Link>
            </div>
            <div className='time-posted spaced'>
              <Typography variant='body2'>
                {dayjs(createdAt).fromNow()}
              </Typography>
            </div>
          </div>
          <div className='post-main'>
            <div className='post-body'>
              <Link to={`/posts/${postId}`}>
                <Typography variant='body1'>{body}</Typography>
              </Link>
            </div>
          </div>
          <div className='post-footer'>
            <div className='reactions'>
              <div className='reactions-group'>
                <div
                  className={`reaction love ${isPostLiked() ? '--liked' : ''}`}
                >
                  <Formik
                    initialValues={{ postId: postId }}
                    onSubmit={handleLike}
                  >
                    {({ values, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        <input type='hidden' value={values.postId} />
                        <Button
                          startIcon={
                            isSubmitting ? (
                              <CircularProgress size={18} />
                            ) : (
                              <HeartIcon />
                            )
                          }
                          type='submit'
                          className='fancy-button'
                          disabled={isSubmitting}
                        >
                          {isPostLiked() ? 'Liked' : 'Like'}
                        </Button>
                      </form>
                    )}
                  </Formik>
                  <div className='count'>{likeCount}</div>
                </div>
                <div className='reaction comment'>
                  <Button startIcon={<CommentIcon />} className='fancy-button'>
                    Comment
                  </Button>
                  <div className='count'>{commentCount}</div>
                </div>
              </div>
              <div className='reaction share'>
                <div className='count'>{shareCount}</div>
                <Button startIcon={<ShareIcon />} className='fancy-button'>
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Styled.PostPreview>
    </motion.div>
  );
};

export default PostPreview;
