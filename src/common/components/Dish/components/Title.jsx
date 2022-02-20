import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ dish }) => {
  return (
    <div className="card-title">
      {dish.name}
    </div>
  )
};

Title.propTypes = {
  dish: PropTypes.object.isRequired,
};
Title.defaultProps = {};

export default Title;