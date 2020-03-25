import React, { useContext } from 'react';
import { Styled } from './style';

import { AuthContext } from '../../context/auth-context';
import Avatar from '../Avatar';

const ProfileInfo = () => {
  const { userDetails } = useContext(AuthContext);

  return (
    <Styled.ProfileInfo>
      <div className='top'>
        <div className='cover'>
          {userDetails.coverImage ? (
            <img src={userDetails.coverImage} alt='Cover' />
          ) : null}
        </div>
        <div className='pic'>
          <Avatar imgUrl={userDetails.profileImage || null} size='96px' />
        </div>
      </div>
    </Styled.ProfileInfo>
  );
};

export default ProfileInfo;
