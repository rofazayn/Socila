import React from 'react';
import { Styled } from './style';
import { Switch, Route, Redirect } from 'react-router-dom';
import TopBar from '../TopBar';
import { ReactComponent as CogIconSvg } from '../../assets/icons/bx-cog.svg';
import { motion } from 'framer-motion';
import EmailSettings from '../EmailSettings';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Styled.Settings className='settings-page'>
        <TopBar title={'Settings'} icon={<CogIconSvg />} />
        <Switch>
          <Route exact path='/settings/email' component={EmailSettings} />
          <Redirect to='/settings/email' />
        </Switch>
      </Styled.Settings>
    </motion.div>
  );
};

export default Settings;
