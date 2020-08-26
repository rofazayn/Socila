import React from 'react';
import { Styled } from './style';
import { motion } from 'framer-motion';

const SettingsBox = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.SettingsBox>{children}</Styled.SettingsBox>
    </motion.div>
  );
};

export default SettingsBox;
