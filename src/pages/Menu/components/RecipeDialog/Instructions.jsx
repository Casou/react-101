import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";

const Instructions = ({ data }) =>
  data ?
  <pre className={styles["recipe-instructions"]}>
    { data }
  </pre>
  : "";

Instructions.propTypes = {
  data: PropTypes.string
};
Instructions.defaultProps = {};

export default Instructions;