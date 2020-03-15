import React from 'react';
import { Styled } from './style';
import Avatar from '../Avatar';
import { Typography, Button } from '@material-ui/core';
import { ReactComponent as HeartIcon } from '../../assets/icons/bx-heart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/bx-comment.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/bx-share.svg';
import * as dayjs from 'dayjs';
import { motion } from 'framer-motion';

const PostPreview = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.PostPreview>
        <div className='post-section'>
          <div className='avatar'>
            <Avatar imgUrl={post.authorImage} alt={post.authorFullName} />
          </div>
        </div>
        <div className='post-section'>
          <div className='post-header'>
            <div className='author-name spaced'>
              <Typography variant='body2'>{post.authorFullName}</Typography>
            </div>

            <div className='author-username spaced'>
              <Typography variant='body2'>@{post.authorUsername}</Typography>
            </div>
            <div className='time-posted spaced'>
              <Typography variant='body2'>
                {dayjs(post.createdAt).fromNow()}
              </Typography>
            </div>
          </div>
          <div className='post-main'>
            <div className='post-body'>
              <Typography variant='body1'>{post.body}</Typography>
            </div>
          </div>
          <div className='post-footer'>
            <div className='reactions'>
              <div className='reactions-group'>
                <div className='reaction love'>
                  <Button startIcon={<HeartIcon />}>Love</Button>
                  <div className='count'>{post.likeCount}</div>
                </div>
                <div className='reaction comment'>
                  <Button startIcon={<CommentIcon />}>Comment</Button>
                  <div className='count'>{post.commentCount}</div>
                </div>
              </div>
              <div className='reaction share'>
                <Button startIcon={<ShareIcon />}>Share</Button>
                <div className='count'>{post.shareCount}</div>
              </div>
            </div>
          </div>
        </div>
      </Styled.PostPreview>
    </motion.div>
  );
};

export default PostPreview;
