import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Dish = ({picture, children}) => {
  return (
    <section className="card">
      {picture}
      <div className="card-content">
        {children}
      </div>
    </section>
  )
};

Dish.propTypes = {
  picture: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
Dish.defaultProps = {};

export default Dish;