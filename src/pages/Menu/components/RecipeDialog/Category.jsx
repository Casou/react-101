import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";

const Category = ({ name }) =>
  name ? <p className={styles["modal-sub-title"]}>{name}</p> : "";

Category.propTypes = {
  name: PropTypes.string
};
Category.defaultProps = {};

export default Category;