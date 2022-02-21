import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Dish.module.css";
import DishType from "@/types/DishType";

const Category = ({ dish }) => {
  return (
    <div className={"card-sub-title " + styles["card-sub-title"]}>
      {dish.category}
    </div>
  )
};

Category.propTypes = {
  dish: DishType.isRequired,
};
Category.defaultProps = {};

export default Category;