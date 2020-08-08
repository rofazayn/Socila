import React, { useContext, useState, useRef, useEffect } from 'react';
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
import CommentCreator from '../CommentCreator';
import CustomDialog from '../layout/CustomDialog';
import findHashtags from '../../helpers/findHashtags';
import reactStringReplace from 'react-string-replace';
import Hashtag from '../Hashtag';

const PostPreview = (props) => {
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
  } = props;
  const { postsActions } = usePosts();
  const { userDetails } = useContext(AuthContext);

  const [hashtags, setHashtags] = useState([]);

  // Detect hastags
  useEffect(() => {
    let foundHashtags = findHashtags(body);
    setHashtags(foundHashtags);
  }, [body]);

  // Replace hastags in body
  let replacedText;

  replacedText = reactStringReplace(body, /#(\w+)/g, (match, i) => (
    <Hashtag value={match} />
  ));

  const isCurrentUser = () => {
    if (authorId === userDetails.userId) {
      return true;
    }

    return false;
  };

  const isPostLiked = () => {
    if (
      userDetails.likes &&
      userDetails.likes.find((like) => like.postId === postId)
    ) {
      return true;
    }

    return false;
  };

  const handleLike = (values) => {
    let isLiked = isPostLiked();

    if (!isLiked) {
      return postsActions.likePost(values.postId);
    }

    return postsActions.unlikePost(values.postId);
  };

  const [openCommentDialog, setOpenCommentDialog] = useState(false);

  function handleCommentClickOpen() {
    setOpenCommentDialog(true);
  }

  // Share dialog
  const [openShareDialog, setOpenShareDialog] = useState(false);
  let shareUrl = `${window.location.origin}/posts/${postId}`;

  let shareUrlInputRef = useRef(null);

  // Copy url
  const copyShareUrl = () => {
    shareUrlInputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.PostPreview>
        <Link as='div' to={`/posts/${postId}`} className='post-link'></Link>
        <div className='post-section details'>
          <div className='post-header'>
            <div className='header-section'>
              <div className='avatar'>
                <Link to={isCurrentUser() ? '/profile' : `/users/${authorId}`}>
                  <Avatar imgUrl={authorImage} alt={authorFullName} />
                </Link>
              </div>

              <div className='author-name spaced'>
                <Typography variant='body2'>
                  <Link
                    to={isCurrentUser() ? '/profile' : `/users/${authorId}`}
                  >
                    {authorFullName}
                  </Link>
                </Typography>
              </div>

              <div className='header-section'>
                <div className='author-username spaced'>
                  <Link
                    to={isCurrentUser() ? '/profile' : `/users/${authorId}`}
                  >
                    <Typography variant='body2'>@{authorUsername}</Typography>
                  </Link>
                </div>
              </div>
            </div>

            <div className='time-posted spaced'>
              <Typography variant='body2'>
                {dayjs(createdAt).fromNow()}
              </Typography>
            </div>
          </div>

          <div className='post-main'>
            <div className='post-body'>
              <Typography variant='body1'>{replacedText}</Typography>
            </div>
          </div>

          <div className='post-footer'>
            <div className='reactions'>
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
                <Button
                  startIcon={<CommentIcon />}
                  className='fancy-button'
                  onClick={handleCommentClickOpen}
                >
                  Comment
                </Button>
                <div className='count'>{commentCount}</div>
              </div>
              <div className='reaction filler'>
                <Link
                  as='div'
                  to={`/posts/${postId}`}
                  className='footer-post-link'
                ></Link>
              </div>
              <div className='reaction share'>
                {/* <div className="count">{shareCount}</div> */}
                <Button
                  onClick={() => setOpenShareDialog(true)}
                  startIcon={<ShareIcon />}
                  className='fancy-button'
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CommentCreator
          openCommentDialog={openCommentDialog}
          setOpenCommentDialog={setOpenCommentDialog}
          {...props}
        />

        <CustomDialog
          open={openShareDialog}
          setOpen={setOpenShareDialog}
          title='Copy the link and share.'
          icon={<ShareIcon />}
        >
          <div className='dialog-content'>
            <div className='shareable-link'>
              <div className='link-placeholder'>
                {/* <Typography variant="body2">{shareUrl}</Typography> */}
                <input defaultValue={shareUrl} ref={shareUrlInputRef} />
              </div>
              <Button className='fancy-button' onClick={copyShareUrl}>
                Copy
              </Button>
            </div>
          </div>
        </CustomDialog>
      </Styled.PostPreview>
    </motion.div>
  );
};

export default PostPreview;
