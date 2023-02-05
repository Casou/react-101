import React from 'react';
import PropTypes from 'prop-types';
import DishLink from "./DishLink";
import IconedText from "./IconedText";
import DishType from "@/types/DishType";

const VideoLink = ({link}) => {
  if (!link) {
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
              href={link}
              text={"Video"}
    />
  )
};

VideoLink.propTypes = {
  link: PropTypes.string,
};
VideoLink.defaultProps = {};

export default VideoLink;