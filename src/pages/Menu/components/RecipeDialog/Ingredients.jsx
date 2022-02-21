import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";
import DishType from "@/types/DishType"

const Ingredients = ({recipe}) =>
  <ul className={styles["ingredients-list"]}>
    {
      recipe.ingredients.map((ingredient, index) =>
        <li key={"ingredient-" + index}>{ingredient}</li>
      )}
  </ul>;

Ingredients.propTypes = {
  recipe: DishType.isRequired
};
Ingredients.defaultProps = {};

export default Ingredients;