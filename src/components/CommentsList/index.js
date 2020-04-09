import React from 'react';
import { Typography } from '@material-ui/core';
import { Styled } from './style';
import { useFetchComments } from '../../hooks/useComments';

const CommentsList = ({ postId }) => {
  const { comments } = useFetchComments(postId);

  return (
    <Styled.CommentsList>
      <Typography variant='body1'>
        {comments && comments.map((comment) => comment.body)}
      </Typography>
    </Styled.CommentsList>
  );
};

export default CommentsList;
