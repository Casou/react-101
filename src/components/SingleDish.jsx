import React from 'react';
import PropTypes from 'prop-types';
import DishCard from "./DishCard";
import {useParams} from "react-router-dom";

const SingleDish = ({ recipes }) => {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === +id);
  if (!recipe) {
    return "Not found";
  }

  return (
    <div>
      <DishCard recipe={recipe} />
    </div>
  );
};

SingleDish.propTypes = {};
SingleDish.defaultProps = {};

export default SingleDish;