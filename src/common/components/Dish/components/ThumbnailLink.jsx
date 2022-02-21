import React from 'react';
import DishLink from "./DishLink";
import DishType from "@/types/DishType"

const ThumbnailLink = ({dish}) => {
  return (
    <DishLink icon={"photo_camera"}
              title={"Thumbnail"}
              href={dish.thumbnail}
              text={"Picture"}
    />
  )
};

ThumbnailLink.propTypes = {
  dish: DishType.isRequired,
};
ThumbnailLink.defaultProps = {};

export default ThumbnailLink;