import React, { useState } from 'react';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { Styled } from './style.js';
import { motion, AnimatePresence } from 'framer-motion';

const Avatar = ({ imgUrl, alt, size }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Styled.Avatar size={size}>
      <img
        src={imgUrl}
        alt={alt}
        style={{ display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
      {/* <UserIconSvg alt={alt} /> */}
      <AnimatePresence>
        {imgUrl && !loaded ? null : imgUrl && loaded ? (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <img src={imgUrl} alt={alt} />
          </motion.div>
        ) : (
          <UserIconSvg alt={alt} />
        )}
      </AnimatePresence>
    </Styled.Avatar>
  );
};

export default Avatar;
