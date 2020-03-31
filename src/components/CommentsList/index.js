import React from 'react';
import { Typography } from '@material-ui/core';
import { Styled } from './style';

const CommentsList = () => {
  return (
    <Styled.CommentsList>
      <Typography variant='h6'>Comments on this post:</Typography>
    </Styled.CommentsList>
  );
};

export default CommentsList;
