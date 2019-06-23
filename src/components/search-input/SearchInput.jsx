import React from 'react';
import * as PropTypes from 'prop-types';
import './SearchInput.css';
import { Input, InputAdornment, Icon } from "@material-ui/core";

const SearchInput = ({ id, placeholder, ...inputProps }) => (
  <div className="search-input input-field">
    <Input
      placeholder={placeholder}
      inputProps={inputProps}
      classes={{ root : "search-input-root"}}
      startAdornment={
        <InputAdornment position="start">
          <Icon>search</Icon>
        </InputAdornment>
      }
    />
  </div>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string
};

export default SearchInput;