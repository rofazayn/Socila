import React from 'react';
import { Styled } from './style';
import Avatar from '../Avatar';
import { Typography } from '@material-ui/core';
import * as dayjs from 'dayjs';

const PostPreview = ({ post }) => {
  console.log(dayjs());
  return (
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
        <div className='section-footer'>
          <div className='reactions'>
            <div className='reaction love'></div>
            <div className='reaction comment'></div>
            <div className='reaction share'></div>
          </div>
        </div>
      </div>
    </Styled.PostPreview>
  );
};

export default PostPreview;
