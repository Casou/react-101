import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";

const EditIcon = ({ recipeId }) => {
  return (
    <a href={`/menu/edit/${ recipeId}`} className={styles["modal-edit-icon"]}>
      <i className={"material-icons "}>edit</i>
    </a>
  )
};

EditIcon.propTypes = {
  recipeId: PropTypes.number.isRequired
};
EditIcon.defaultProps = {};

export default EditIcon;