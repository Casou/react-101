import React from 'react';
import PropTypes from 'prop-types';

const FORBIDDEN_TAG = "Baking";

const Tags = ({ dish }) => {
  return (
    <p>
      Tags : {
        dish.tags
          .filter(tag => tag !== FORBIDDEN_TAG)
          .map(tag => `#${tag.toLowerCase()}`)
          .sort()
          .join(" ")
      }
    </p>
  )
};

Tags.propTypes = {
  dish: PropTypes.object.isRequired
};
Tags.defaultProps = {};

export default Tags;