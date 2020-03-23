import React from 'react';
import { Styled } from './style';
import Avatar from '../Avatar';
import { Typography, Button } from '@material-ui/core';
import { ReactComponent as HeartIcon } from '../../assets/icons/bx-heart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/bx-comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/bx-share.svg';
import * as dayjs from 'dayjs';
import { motion } from 'framer-motion';
import usePosts from '../../hooks/usePosts';

const PostPreview = ({
  postId,
  authorImage,
  authorFullName,
  authorUsername,
  createdAt,
  body,
  likeCount,
  commentCount,
  shareCount
}) => {
  const { postsActions } = usePosts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.PostPreview>
        <div className='post-section avatar'>
          <div className='avatar'>
            <Avatar imgUrl={authorImage} alt={authorFullName} />
          </div>
        </div>
        <div className='post-section details'>
          <div className='post-header'>
            <div className='author-name spaced'>
              <Typography variant='body2'>{authorFullName}</Typography>
            </div>

            <div className='author-username spaced'>
              <Typography variant='body2'>@{authorUsername}</Typography>
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
          <div className='post-footer'>
            <div className='reactions'>
              <div className='reactions-group'>
                <div className='reaction love'>
                  <Button
                    startIcon={<HeartIcon />}
                    onClick={() => postsActions.likePost(postId)}
                  >
                    Like
                  </Button>
                  <div className='count'>{likeCount}</div>
                </div>
                <div className='reaction comment'>
                  <Button startIcon={<CommentIcon />}>Comment</Button>
                  <div className='count'>{commentCount}</div>
                </div>
              </div>
              <div className='reaction share'>
                <div className='count'>{shareCount}</div>
                <Button startIcon={<ShareIcon />}>Share</Button>
              </div>
            </div>
          </div>
        </div>
      </Styled.PostPreview>
    </motion.div>
  );
};

export default PostPreview;
