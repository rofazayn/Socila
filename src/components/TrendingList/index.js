import React, { useEffect } from 'react';
import { Styled } from './style';
import { useFetchTrending } from '../../hooks/useHashtags';
import Hashtag from '../Hashtag';
import { Typography, IconButton, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ArrowRightIconSvg } from '../../assets/icons/bx-right-arrow-alt.svg';
import { ReactComponent as NoHashtagsSvg } from '../../assets/svg/GroovyDoodle.svg';

const TrendingList = () => {
  const { hashtags } = useFetchTrending();
  const history = useHistory();

  useEffect(() => {
    console.log(hashtags);
  }, [hashtags]);
  return (
    <Styled.TrendingList>
      <div className='trending-header'>
        <Typography variant='h6' className='page-title'>
          Trending near you
        </Typography>
      </div>
      {hashtags === null ? (
        <div className='trending-fallback'>
          <CircularProgress />
        </div>
      ) : hashtags.length > 0 ? (
        hashtags.map((hashtag, id) => (
          <li key={hashtag.hashtagId} className='trending-item'>
            <div className='trending-item-info'>
              <Typography variant='caption' className='ti-order'>
                {id + 1} - Trending
              </Typography>
              <Hashtag value={hashtag.name.substring(1)} uncolored={true} />
              <Typography variant='caption' className='ti-shares'>
                {hashtag.points} shares
              </Typography>
            </div>
            <div className='trending-item-button'>
              <IconButton
                onClick={() =>
                  history.push(`/hashtag/${hashtag.name.substring(1)}`)
                }
              >
                <ArrowRightIconSvg />
              </IconButton>
            </div>
          </li>
        ))
      ) : (
        <div className='trending-fallback no-hashtags'>
          {/* <NoHashtagsSvg /> */}
          <Typography variant='body2'>
            There are no trending hashtags available at the moment!
          </Typography>
        </div>
      )}
    </Styled.TrendingList>
  );
};

export default TrendingList;
