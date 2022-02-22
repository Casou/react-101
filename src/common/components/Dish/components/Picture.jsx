import React from 'react';
import PropTypes from 'prop-types';
import DishType from "@/types/DishType";

const Picture = ({ dish }) => {
  return (
    <div className="card-image">
      <img src={dish.thumbnail} alt="Thumbnail"/>
    </div>
  )
};

Picture.propTypes = {
  dish: DishType.isRequired,
};
Picture.defaultProps = {};

export default Picture;