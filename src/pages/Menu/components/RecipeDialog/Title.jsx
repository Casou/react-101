import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RecipeDialog.module.css";

const Title = ({name, source}) => {
  if (source) {
    return (
      <a href={source}
         className={styles["modal-title"]}
         target="_blank"
         title="Go to the source recipe"
      >
        {name}
        <i className={"material-icons " + styles["modal-title-link-icon"]}>link</i>
      </a>
    );
  }

  return <p className={styles["modal-title"]}>{name}</p>
};

Title.propTypes = {
  name: PropTypes.string,
  source: PropTypes.string,
};
Title.defaultProps = {};

export default Title;