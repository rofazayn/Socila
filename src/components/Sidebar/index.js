import React from 'react';
import { Styled } from './style';
import Wrapper from '../Wrapper';
import { Switch, Route } from 'react-router-dom';
import SearchBar from '../SearchBar';
import TrendingList from '../TrendingList';
import SideFooter from '../SideFooter';
import SettingsMenu from '../SettingsMenu';

const Sidebar = () => {
  return (
    <Styled.Sidebar>
      <Wrapper>
        <SearchBar />
        <Switch>
          <Route path='/settings' component={SettingsMenu} />
          <Route path='/' component={TrendingList} />
        </Switch>
        {/* <TrendingList /> */}
        <SideFooter />
      </Wrapper>
    </Styled.Sidebar>
  );
};

export default Sidebar;
