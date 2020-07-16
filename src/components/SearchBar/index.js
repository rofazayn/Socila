import React, { useState } from 'react';
// import TextField from '../layout/TextField';
import { TextField, InputAdornment } from '@material-ui/core';
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
        fullWidth
        variant='outlined'
        // label='Search'
        // hiddenLabel={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIconSvg />
            </InputAdornment>
          ),
        }}
      />
    </Styled.SearchBar>
  );
};

export default SearchBar;
