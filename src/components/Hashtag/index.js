import React from 'react';
// import { Link } from 'react-router-dom';
import { Styled } from './style.js';

const Hashtag = ({ value, uncolored }) => {
  return (
    <Styled.Hashtag
      to={`/hashtag/${value}`}
      className={uncolored && '--uncolored'}
    >
      #{value}
    </Styled.Hashtag>
  );
};

export default Hashtag;
