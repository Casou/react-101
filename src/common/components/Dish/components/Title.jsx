import React from 'react';
import styles from "../Dish.module.css";

const Title = ({ children }) => {
  return (
    <div className={"card-title " + styles["card-title"]}>
      {children}
    </div>
  )
};

Title.propTypes = {};
Title.defaultProps = {};

export default Title;