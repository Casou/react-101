import React from 'react';
import PropTypes from 'prop-types';
import DishLink from "./DishLink";
import IconedText from "./IconedText";

const VideoLink = ({dish}) => {
  if (!dish.video) {
    return (
      <IconedText icon={"ondemand_video"}
                  title={"Youtube link"}>
        soon...
      </IconedText>
    )
  }
  return (
    <DishLink icon={"ondemand_video"}
              title={"Youtube link"}
              href={dish.video}
              text={"Video"}
    />
  )
};

VideoLink.propTypes = {
  dish: PropTypes.object.isRequired,
};
VideoLink.defaultProps = {};

export default VideoLink;