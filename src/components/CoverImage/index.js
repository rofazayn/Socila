import React, { useState } from 'react';
import { ReactComponent as ImageIconSvg } from '../../assets/icons/bx-image.svg';
import { Styled } from './style.js';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@material-ui/core';

const CoverImage = ({ imgUrl, alt, size }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Styled.CoverImage size={size}>
      <img
        src={imgUrl}
        alt={alt}
        style={{ display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
      <AnimatePresence>
        {imgUrl && !loaded ? null : imgUrl && loaded ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={imgUrl} alt={alt} />
          </motion.div>
        ) : (
          <div className='no-cover'>
            <ImageIconSvg alt='No cover.' />
            <Typography variant='body2'>
              Cover image is not available.
            </Typography>
          </div>
        )}
      </AnimatePresence>
    </Styled.CoverImage>
  );
};

export default CoverImage;
