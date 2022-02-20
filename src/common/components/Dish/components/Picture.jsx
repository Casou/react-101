import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ dish }) => {
  return (
    <div className="card-image">
      <img src={dish.thumbnail} alt="Thumbnail"/>
    </div>
  )
};

Picture.propTypes = {
  dish: PropTypes.object.isRequired,
};
Picture.defaultProps = {};

export default Picture;