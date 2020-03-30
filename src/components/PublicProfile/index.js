import React, { useContext } from 'react';
import { Styled } from './style';
import TopBar from '../TopBar';
import { ReactComponent as UserIconSvg } from '../../assets/icons/bx-user.svg';
import { motion } from 'framer-motion';
import ProfileInfo from '../ProfileInfo';
import PostsList from '../PostsList';
import { useFetchUser } from '../../hooks/useUser';
import { useParams, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const PublicProfile = () => {
  const { userDetails } = useContext(AuthContext);
  const { userId } = useParams();
  const fetchedUser = useFetchUser(userId);

  if (userDetails.userId === userId) {
    return <Redirect to='/profile' />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Styled.PublicProfile className='profile-page'>
        {fetchedUser ? (
          <>
            <TopBar title='Explore' icon={<UserIconSvg />} />
            <ProfileInfo user={fetchedUser} />
            <PostsList userId={fetchedUser.userId} />{' '}
          </>
        ) : null}
      </Styled.PublicProfile>
    </motion.div>
  );
};

export default PublicProfile;
