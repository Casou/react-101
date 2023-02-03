import React from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";

const RandomDish = ({recipes}) => {
  // Fix the dish id for the exercise
  const dishId = 0;
  const randomDish = recipes[dishId];

  return (
    <Dish picture={<Dish.Picture src={randomDish.thumbnail}/>}>
      <Dish.Title>{ randomDish.name }</Dish.Title>
      <Dish.Category>{ randomDish.category }</Dish.Category>
      <Dish.VideoLink link={randomDish.video}/>
      <Dish.ThumbnailLink link={randomDish.thumbnail}/>
      <Dish.Tags tags={randomDish.tags}/>
    </Dish>
  )
}

RandomDish.propTypes = {
  recipes: PropTypes.array.isRequired,
};
RandomDish.defaultProps = {};

export default RandomDish;