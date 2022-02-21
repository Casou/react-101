import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";
import DishType from "@/types/DishType"

const Category = ({ recipe }) =>
  <p className={styles["modal-sub-title"]}>{recipe.category}</p>;

Category.propTypes = {
  recipe: DishType.isRequired
};
Category.defaultProps = {};

export default Category;