import React from 'react';
import PropTypes from 'prop-types';
import DishLink from "./DishLink";

const ThumbnailLink = ({link}) => {
  return (
    <DishLink icon={"photo_camera"}
              title={"Thumbnail"}
              href={link}
              text={"Picture"}
    />
  )
};

ThumbnailLink.propTypes = {
  link: PropTypes.string.isRequired,
};
ThumbnailLink.defaultProps = {};

export default ThumbnailLink;