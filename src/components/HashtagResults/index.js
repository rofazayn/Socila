import React, { useEffect } from 'react';
import { Styled } from './style';
import { motion } from 'framer-motion';
import TopBar from '../TopBar';
import { ReactComponent as HashtagIconSvg } from '../../assets/icons/bx-hash.svg';
import Wrapper from '../Wrapper';
import { useParams } from 'react-router-dom';
import { useFetchHashtagPosts } from '../../hooks/useHashtags';
import PostsList from '../PostsList';

const HashtagResults = () => {
  let { hashtag } = useParams();

  const { posts } = useFetchHashtagPosts(hashtag);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.HashtagResults className='hashtag-page'>
        <TopBar title={`Hashtags - #${hashtag}`} icon={<HashtagIconSvg />} />
        <PostsList posts={posts} />
      </Styled.HashtagResults>
    </motion.div>
  );
};

export default HashtagResults;
