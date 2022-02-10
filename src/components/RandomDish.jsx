import React from 'react';
import PropTypes from 'prop-types';
import recipes from "../_data/recipes.json";
import Dish from "./Dish";

const RandomDish = ({ recipes }) => {
  const randomDish = recipes[Math.floor(Math.random() * recipes.length)];

  return (
    <Dish picture={<Dish.Picture dish={randomDish} />}>
      <Dish.Title dish={randomDish} />
      <Dish.Category dish={randomDish} />
      <Dish.VideoLink dish={randomDish} />
      <Dish.ThumbnailLink dish={randomDish} />
    </Dish>
  )
};

RandomDish.propTypes = {
  recipes: PropTypes.array.isRequired,
};
RandomDish.defaultProps = {};

export default RandomDish;