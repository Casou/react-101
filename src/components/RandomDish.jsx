import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";
import DishType from "./DishPropTypes";

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
    <Dish picture={<Dish.Picture src={randomDish.thumbnail}/>}>
      <Dish.Title>{randomDish.name}</Dish.Title>
      <Dish.Category>{randomDish.category}</Dish.Category>
      <Dish.VideoLink link={randomDish.video}/>
      <Dish.ThumbnailLink link={randomDish.thumbnail}/>
    </Dish>
  )
}

RandomDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired,
};
RandomDish.defaultProps = {};

export default RandomDish;