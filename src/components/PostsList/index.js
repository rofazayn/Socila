import React from 'react';
import { Styled } from './style';
import PostPreview from '../PostPreview';
import { CircularProgress, Typography } from '@material-ui/core';
import { ReactComponent as NoPostsSvg } from '../../assets/svg/TreeSwing.svg';
// import { ReactComponent as NoPostsEndSvg } from '../../assets/svg/FinishLine.svg';

const PostsList = ({ posts }) => {
  return (
    <Styled.PostsList>
      {posts === null ? (
        <div className='posts-fallback'>
          <CircularProgress />
        </div>
      ) : posts && posts.length > 0 ? (
        <>
          {posts.map((post) => {
            return <PostPreview key={post.postId} {...post} />;
          })}
          {/* <div className='posts-fallback no-posts --end'>
            <NoPostsEndSvg />
            <Typography variant='body2'>
              You have reached the end of your feed
            </Typography>
          </div> */}
        </>
      ) : (
        <div className='posts-fallback no-posts'>
          <NoPostsSvg />
          <Typography variant='body2'>
            There are no posts available at the moment!
          </Typography>
        </div>
      )}
    </Styled.PostsList>
  );
};

export default PostsList;
