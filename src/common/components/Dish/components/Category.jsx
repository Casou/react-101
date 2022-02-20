import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ dish }) => {
  return (
    <div className="card-sub-title">
      {dish.category}
    </div>
  )
};

Category.propTypes = {
  dish: PropTypes.object.isRequired,
};
Category.defaultProps = {};

export default Category;