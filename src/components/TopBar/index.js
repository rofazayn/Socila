import React from 'react';
import { Typography } from '@material-ui/core';

import { Styled } from './style';
import { useState } from 'react';
import { useScrollPosition } from '../../hooks/layout/useScroll';

const TopBar = ({ title, icon, border }) => {
  const [moving, setMoving] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y !== 0) {
      setMoving(true);
    } else {
      setMoving(false);
    }
  });

  return (
    <Styled.TopBar
      className={`content-top ${moving && '--moved'} ${border &&
        '--initial-bordered'}`}
    >
      <Typography variant='h6' className='page-title'>
        {title}
      </Typography>
      {icon}
    </Styled.TopBar>
  );
};

export default TopBar;
