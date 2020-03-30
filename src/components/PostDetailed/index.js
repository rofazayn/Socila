import React from 'react';
import PostPreview from '../PostPreview';
import { Styled } from './style.js';
import { useFetchPost } from '../../hooks/usePosts';
import { useParams } from 'react-router-dom';
import TopBar from '../TopBar';
import { ReactComponent as PostIconSvg } from '../../assets/icons/bx-message-alt-detail.svg';

const PostDetailed = () => {
  const { postId } = useParams();
  const { post } = useFetchPost(postId);

  return (
    <Styled.PostDetailed>
      {post ? (
        <>
          <TopBar
            title={`${post.authorFullName}'s post`}
            icon={<PostIconSvg />}
            border={true}
          />
          <PostPreview {...post} />
        </>
      ) : null}
    </Styled.PostDetailed>
  );
};

export default PostDetailed;
