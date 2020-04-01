import React from 'react';
import PostPreview from '../PostPreview';
import { Styled } from './style.js';
import { useFetchPost } from '../../hooks/usePosts';
import { useParams } from 'react-router-dom';
import TopBar from '../TopBar';
import { ReactComponent as PostIconSvg } from '../../assets/icons/bx-message-alt-detail.svg';
import CommentsList from '../CommentsList';
import { CircularProgress, Typography } from '@material-ui/core';
import { ReactComponent as NoPostsSvg } from '../../assets/svg/TreeSwing.svg';

const PostDetailed = () => {
  const { postId } = useParams();
  const { post } = useFetchPost(postId);

  return (
    <Styled.PostDetailed>
      {post === null ? (
        <div className='posts-fallback'>
          <CircularProgress />
        </div>
      ) : post && post.noPost === true ? (
        <>
          <TopBar title={'Whoops!'} icon={<PostIconSvg />} border={true} />
          <div className='posts-fallback no-posts'>
            <NoPostsSvg />
            <Typography variant='body2'>Post cannot be found</Typography>
          </div>
        </>
      ) : post ? (
        <>
          <TopBar
            title={`${post.authorFullName}'s post`}
            icon={<PostIconSvg />}
            border={true}
          />
          <PostPreview {...post} />
          <CommentsList />
        </>
      ) : null}
    </Styled.PostDetailed>
  );
};

export default PostDetailed;
