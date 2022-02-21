import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";
import DishType from "@/types/DishType"

const Instructions = ({recipe}) =>
  <pre className={styles["recipe-instructions"]}>
    {recipe.instructions}
  </pre>;

Instructions.propTypes = {
  recipe: DishType.isRequired
};
Instructions.defaultProps = {};

export default Instructions;