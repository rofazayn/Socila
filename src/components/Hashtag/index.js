import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './style.js';

const Hashtag = ({ value }) => {
  return <Styled.Hashtag to={`/hashtag/${value}`}>#{value}</Styled.Hashtag>;
};

export default Hashtag;
