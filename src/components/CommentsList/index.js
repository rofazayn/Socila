import React, { useEffect } from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import { Styled } from './style';
import { useFetchComments } from '../../hooks/useComments';
import CommentPreview from '../CommentPreview';
import { ReactComponent as NoPostsSvg } from '../../assets/svg/TreeSwing.svg';
import { ReactComponent as NoPostsEndSvg } from '../../assets/svg/FinishLine.svg';

const CommentsList = ({ postId }) => {
  const { comments } = useFetchComments(postId);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <Styled.CommentsList>
      {comments === null ? (
        <div className='posts-fallback'>
          <CircularProgress />
        </div>
      ) : comments && comments.length > 0 ? (
        comments.map((comment) => (
          <CommentPreview key={comment.commentId} {...comment} />
        ))
      ) : (
        <div className='posts-fallback no-posts'>
          <NoPostsSvg />
          <Typography variant='body2'>
            There are no comments available at the moment.
          </Typography>
        </div>
      )}
    </Styled.CommentsList>
  );
};

export default CommentsList;
