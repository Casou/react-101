import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";

const RandomDish = ({recipes}) => {
  const [dishId, setDishId] = useState(Math.floor(Math.random() * recipes.length));

  useEffect(() => {
    const intervalId = setInterval(_updateDish, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const _updateDish = () => {
    setDishId(Math.floor(Math.random() * recipes.length));
  }

  const randomDish = recipes[dishId];

  return (
    <Dish picture={<Dish.Picture dish={randomDish}/>}>
      <Dish.Title dish={randomDish}/>
      <Dish.Category dish={randomDish}/>
      <Dish.VideoLink dish={randomDish}/>
      <Dish.ThumbnailLink dish={randomDish}/>
    </Dish>
  )
}

RandomDish.propTypes = {
  recipes: PropTypes.array.isRequired,
};
RandomDish.defaultProps = {};

export default RandomDish;