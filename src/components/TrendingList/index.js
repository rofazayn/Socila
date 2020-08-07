import React, { useEffect } from 'react';
import { Styled } from './style';
import { useFetchTrending } from '../../hooks/useHashtags';
import Hashtag from '../Hashtag';

const TrendingList = () => {
  const { hashtags } = useFetchTrending();

  useEffect(() => {
    console.log(hashtags);
  }, [hashtags]);
  return (
    <Styled.TrendingList>
      {hashtags &&
        hashtags.length > 0 &&
        hashtags.map((hashtag, id) => (
          <li key={hashtag.hashtagId}>
            <small>Trending - {id + 1}</small>
            <Hashtag value={hashtag.name.substring(1)} />
            <p>{hashtag.points} shares</p>
          </li>
        ))}
    </Styled.TrendingList>
  );
};

export default TrendingList;
