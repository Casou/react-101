import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";
import {Link} from "react-router-dom";

const EditIcon = ({ recipeId }) => {
  return (
    <Link to={`/menu/edit/${ recipeId}`} className={styles["modal-edit-icon"]}>
      <i className={"material-icons "}>edit</i>
    </Link>
  )
};

EditIcon.propTypes = {
  recipeId: PropTypes.number.isRequired
};
EditIcon.defaultProps = {};

export default EditIcon;