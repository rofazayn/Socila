import React, { useState } from 'react';
import TextField from '../layout/TextField';
// import { TextField, InputAdornment } from '@material-ui/core';
import { Styled } from './style.js';
import { ReactComponent as SearchIconSvg } from '../../assets/icons/bx-search.svg';

const SearchBar = () => {
  const [searchField, setSearchField] = useState('');

  return (
    <Styled.SearchBar>
      <TextField
        placeholder='Search...'
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        fullWidth={true}
        variant='outlined'
        endIcon={<SearchIconSvg />}
      />
    </Styled.SearchBar>
  );
};

export default SearchBar;
