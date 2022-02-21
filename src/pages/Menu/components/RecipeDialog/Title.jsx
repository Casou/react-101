import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";
import DishType from "@/types/DishType"

const Title = ({ recipe }) => {
  return (
    <p className={styles["modal-title"]}>{recipe.name}</p>
  )
};

Title.propTypes = {
  recipe: DishType.isRequired
};
Title.defaultProps = {};

export default Title;