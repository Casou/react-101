import React from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";

const DishCard = ({ recipe }) => {
  return (
    <Dish picture={<Dish.Picture dish={recipe}/>}>
      <Dish.Title dish={recipe}/>
      <Dish.Category dish={recipe}/>
      <Dish.VideoLink dish={recipe}/>
      <Dish.ThumbnailLink dish={recipe}/>
      <Dish.Tags dish={recipe}/>
    </Dish>
  )
}

DishCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};
DishCard.defaultProps = {};

export default DishCard;