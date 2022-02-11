import React from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";

const RandomDish = ({recipes}) => {
  // Fix the dish id for the exercise
  const dishId = 0;
  const randomDish = recipes[dishId];

  return (
    <Dish picture={<Dish.Picture dish={randomDish}/>}>
      <Dish.Title dish={randomDish}/>
      <Dish.Category dish={randomDish}/>
      <Dish.VideoLink dish={randomDish}/>
      <Dish.ThumbnailLink dish={randomDish}/>
      <Dish.Tags dish={randomDish}/>
    </Dish>
  )
}

RandomDish.propTypes = {
  recipes: PropTypes.array.isRequired,
};
RandomDish.defaultProps = {};

export default RandomDish;