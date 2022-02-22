import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import DishType from "@/types/DishType";
import DishCard from "@/common/components/DishCard";
import styles from "./SingleDish.module.css";

const SingleDish = ({ recipes }) => {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === +id);
  if (!recipe) {
    return "Not found";
  }

  return (
    <div className={styles.content}>
      <DishCard recipe={recipe} />
    </div>
  );
};

SingleDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
SingleDish.defaultProps = {};

export default SingleDish;