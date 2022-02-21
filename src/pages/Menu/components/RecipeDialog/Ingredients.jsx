import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";

const Ingredients = ({ data }) =>
  <ul className={styles["ingredients-list"]}>
    {
      data?.map((ingredient, index) =>
        <li key={"ingredient-" + index}>{ingredient}</li>
      )}
  </ul>;

Ingredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};
Ingredients.defaultProps = {};

export default Ingredients;