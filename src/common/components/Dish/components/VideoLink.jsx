import React from 'react';
import PropTypes from 'prop-types';
import DishLink from "./DishLink";
import IconedText from "./IconedText";
import DishType from "@/types/DishType";

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
  dish: DishType.isRequired,
};
VideoLink.defaultProps = {};

export default VideoLink;