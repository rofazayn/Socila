import React, { useContext } from 'react';
import { Styled } from './style';
import { AuthContext } from '../../context/auth-context';
import { Typography, Button } from '@material-ui/core';
import { ReactComponent as EditIcon } from '../../assets/icons/bx-edit.svg';
import dayjs from '../../helpers/dayjs';
import Avatar from '../Avatar';
import CoverImage from '../CoverImage';

const ProfileInfo = () => {
  const { userDetails } = useContext(AuthContext);

  return (
    <Styled.ProfileInfo>
      <div className='profile-images'>
        <div className='cover'>
          <CoverImage imgUrl={userDetails.coverImage || null} />
        </div>
        <div className='pic'>
          <Avatar imgUrl={userDetails.profileImage || null} size='96px' />
        </div>
      </div>
      <div className='profile-details'>
        <div className='info'>
          <div className='name'>
            <Typography variant='subtitle1' className='full-name'>
              {userDetails.fullName}
            </Typography>
            <Typography variant='body2' className='username'>
              @{userDetails.username}
            </Typography>
          </div>
          <div className='rest'>
            <Typography variant='body2' className='joined'>
              Joined{' '}
              <span>{dayjs(userDetails.createdAt).format('MMM YYYY')}</span>
            </Typography>
          </div>
        </div>
        {userDetails.bio && (
          <div className='bio'>
            <Typography variant='body1' className='bio'>
              {userDetails.bio}
            </Typography>
          </div>
        )}
      </div>
      <div className='profile-actions'>
        <div className='actions'>
          <Button className='fancy-button --active'>Posts</Button>
          <Button className='fancy-button'>Replies</Button>
          <Button className='fancy-button'>Reacts</Button>
        </div>
        <div className='actions edit-profile'>
          <Button className='fancy-button' startIcon={<EditIcon />}>
            Edit my profile
          </Button>
        </div>
      </div>
    </Styled.ProfileInfo>
  );
};

export default ProfileInfo;
