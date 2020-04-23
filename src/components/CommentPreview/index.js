import { Styled } from './style';
import { AuthContext } from '../../context/auth-context';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import { ReactComponent as HeartIcon } from '../../assets/icons/bx-heart.svg';
import React, { useContext } from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import dayjs from '../../helpers/dayjs';
import { Formik } from 'formik';

const CommentPreview = (props) => {
  const {
    commentId,
    authorId,
    authorImage,
    authorFullName,
    authorUsername,
    createdAt,
    body,
    likeCount,
  } = props;

  const { userDetails } = useContext(AuthContext);

  const isCurrentUser = () => {
    if (authorId === userDetails.userId) {
      return true;
    }

    return false;
  };

  return (
    <Styled.CommentPreview>
      <div className='comment-section details'>
        <div className='comment-header'>
          <div className='header-section'>
            <div className='avatar'>
              <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                <Avatar imgUrl={authorImage} alt={authorFullName} />
              </Link>
            </div>

            <div className='author-name spaced'>
              <Typography variant='body2'>
                <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                  {authorFullName}
                </Link>
              </Typography>
            </div>

            <div className='header-section'>
              <div className='author-username spaced'>
                <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                  <Typography variant='body2'>@{authorUsername}</Typography>
                </Link>
              </div>
            </div>
          </div>

          <div className='time-commented spaced'>
            <Typography variant='body2'>
              {dayjs(createdAt).fromNow()}
            </Typography>
          </div>
        </div>

        <div className='comment-main'>
          <div className='comment-body'>
            {/* <Link to={`/comments/${commentId}`}> */}
            <Typography variant='body1'>{body}</Typography>
            {/* </Link> */}
          </div>
        </div>
        {/* <div className='comment-footer'>
          <div className='reactions'>
            <div className='reactions-group'>
              <div
                className={`reaction love ${isPostLiked() ? '--liked' : ''}`}
              >
                <Formik
                  initialValues={{ commentId: commentId }}
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
            </div>
          </div>
        </div> */}
      </div>
    </Styled.CommentPreview>
  );
};

export default CommentPreview;
