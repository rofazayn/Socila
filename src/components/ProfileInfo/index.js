import React, { useContext, useState, useEffect } from 'react';
import { Styled } from './style';
import { AuthContext } from '../../context/auth-context';
import {
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Icon,
} from '@material-ui/core';
import { ReactComponent as EditIcon } from '../../assets/icons/bx-edit.svg';
import { ReactComponent as FollowIcon } from '../../assets/icons/bx-user-plus.svg';
import { ReactComponent as CameraIconSvg } from '../../assets/icons/bx-camera.svg';
import { ReactComponent as UserCheckIconSvg } from '../../assets/icons/bx-user-check.svg';
import { ReactComponent as UserXIconSvg } from '../../assets/icons/bx-user-x.svg';
import dayjs from '../../helpers/dayjs';
import Avatar from '../Avatar';
import CoverImage from '../CoverImage';
import AvatarChanger from '../AvatarChanger';
import CoverChanger from '../CoverChanger';
import { Formik } from 'formik';
import useUser from '../../hooks/useUser';

const ProfileInfo = ({ user }) => {
  const { userDetails } = useContext(AuthContext);
  const { userActions } = useUser();

  const isCurrentUser = () => {
    if (user.userId === userDetails.userId) {
      return true;
    }

    return false;
  };

  const [openAvatarDialog, setOpenAvatarDialog] = useState(false);

  function handleAvatarClickOpen() {
    setOpenAvatarDialog(true);
  }

  const [openCoverDialog, setOpenCoverDialog] = useState(false);

  function handleCoverClickOpen() {
    setOpenCoverDialog(true);
  }

  function isUserFollowed() {
    if (
      userDetails.following &&
      userDetails.following.find((cUser) => cUser.followingId === user.userId)
    ) {
      return true;
    }
    return false;
  }

  const handleFollow = (values) => {
    let isFollowing = isUserFollowed();
    if (!isFollowing) {
      return userActions.followUser(values.follower, values.following);
    }
    return userActions.unfollowUser(values.follower, values.following);
  };

  return (
    <Styled.ProfileInfo>
      <div className='profile-images'>
        <div className='cover'>
          <CoverImage imgUrl={user.coverImage || null} />
          {isCurrentUser() ? (
            <IconButton
              className='cover-change-button fancy-button'
              onClick={handleCoverClickOpen}
            >
              <CameraIconSvg />
            </IconButton>
          ) : null}
        </div>
        <div className='pic'>
          <Avatar imgUrl={user.profileImage || null} size='96px' />
          {isCurrentUser() ? (
            <IconButton
              className='profile-change-button fancy-button'
              onClick={handleAvatarClickOpen}
            >
              <CameraIconSvg />
            </IconButton>
          ) : null}
        </div>
      </div>
      <div className='profile-details'>
        <div className='info'>
          <div className='name'>
            <Typography variant='subtitle1' className='full-name'>
              {user.fullName}
            </Typography>
            <Typography variant='body2' className='username'>
              @{user.username}
            </Typography>
          </div>
          <div className='rest'>
            <Typography variant='body2' className='joined'>
              Joined <span>{dayjs(user.createdAt).format('MMM YYYY')}</span>
            </Typography>
          </div>
        </div>
        {user.bio && (
          <div className='bio'>
            <Typography variant='body1' className='bio'>
              {user.bio}
            </Typography>
          </div>
        )}
      </div>
      <div className='profile-actions'>
        <div className='actions'>
          <Button className='fancy-button --active'>Posts</Button>
          <Button className='fancy-button'>
            <span className='count'>0</span> Following
          </Button>
          <Button className='fancy-button'>
            <span className='count'>0</span> Followers
          </Button>
        </div>
        {isCurrentUser() ? (
          <div className='actions edit-profile'>
            <Button className='fancy-button' startIcon={<EditIcon />}>
              Edit my profile
            </Button>
          </div>
        ) : (
          <div className='actions edit-profile'>
            <Formik
              initialValues={{
                follower: userDetails,
                following: user,
              }}
              onSubmit={handleFollow}
            >
              {({ values, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type='hidden'
                    name='follower'
                    value={values.follower}
                  />
                  <input
                    type='hidden'
                    name='following'
                    value={values.following}
                  />
                  <Button
                    type='submit'
                    className={`fancy-button ${
                      isUserFollowed() && '--following'
                    }`}
                    disabled={isSubmitting}
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size={18} />
                      ) : isUserFollowed() ? (
                        <UserXIconSvg />
                      ) : (
                        <FollowIcon />
                      )
                    }
                  >
                    {isUserFollowed() ? 'Unfollow' : 'Follow'}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        )}
      </div>
      <AvatarChanger
        openAvatarDialog={openAvatarDialog}
        setOpenAvatarDialog={setOpenAvatarDialog}
      />
      <CoverChanger
        openCoverDialog={openCoverDialog}
        setOpenCoverDialog={setOpenCoverDialog}
      />
    </Styled.ProfileInfo>
  );
};

export default ProfileInfo;
