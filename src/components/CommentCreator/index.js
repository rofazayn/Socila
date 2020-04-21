import React from 'react';
import { Styled } from './style';
import { Modal } from '@material-ui/core';
import { Typography, Link } from '@material-ui/core';
import Avatar from '../Avatar';
import dayjs from '../../helpers/dayjs';
const CommentCreator = (props) => {
  const {
    postId,
    authorId,
    authorImage,
    authorFullName,
    authorUsername,
    createdAt,
    body,
    openCommentDialog,
    setOpenCommentDialog,
  } = props;
  function handleCommentClose() {
    setOpenCommentDialog(false);
  }
  return (
    <Styled.CommentCreator>
      <Modal
        open={openCommentDialog}
        onClose={handleCommentClose}
        disableScrollLock={true}
        className='comment-creator'
        disablePortal
      >
        <div className='post-section details'>
          <div className='post-header'>
            <div className='header-section'>
              <div className='avatar'>
                <Avatar imgUrl={authorImage} alt={authorFullName} />
              </div>

              <div className='author-name spaced'>
                <Typography variant='body2'>{authorFullName}</Typography>
              </div>

              <div className='header-section'>
                <div className='author-username spaced'>
                  <Typography variant='body2'>@{authorUsername}</Typography>
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
              <Typography variant='body1'>{body}</Typography>
            </div>
          </div>
          <div className='post-footer'></div>
        </div>
      </Modal>
    </Styled.CommentCreator>
  );
};

export default CommentCreator;
