import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ src }) => {
  return (
    <div className="card-image">
      <img src={src} alt="Thumbnail"/>
    </div>
  )
};

Picture.propTypes = {
  src: PropTypes.string.isRequired,
};
Picture.defaultProps = {};

export default Picture;