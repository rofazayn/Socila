import React from 'react';
import { Styled } from './style';

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

  return <Styled.CommentPreview>{body}</Styled.CommentPreview>;
};

export default CommentPreview;
