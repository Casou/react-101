import React from 'react';
import PropTypes from 'prop-types';

const FORBIDDEN_TAG = "Baking";

const Tags = ({ tags }) => {
  return (
    <p>
      Tags : {
        tags
          .filter(tag => tag !== FORBIDDEN_TAG)
          .map(tag => `#${tag.toLowerCase()}`)
          .sort()
          .join(" ")
      }
    </p>
  )
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};
Tags.defaultProps = {};

export default Tags;