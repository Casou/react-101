import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Dish.module.css";
import DishType from "@/types/DishType";

const Title = ({ dish }) => {
  return (
    <div className={"card-title " + styles["card-title"]}>
      {dish.name}
    </div>
  )
};

Title.propTypes = {
  dish: DishType.isRequired,
};
Title.defaultProps = {};

export default Title;