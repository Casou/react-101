import React from 'react';
import styles from "../Dish.module.css";

const Category = ({ children }) => {
  return (
    <div className={"card-sub-title " + styles["card-sub-title"]}>
      {children}
    </div>
  )
};

Category.propTypes = {};
Category.defaultProps = {};

export default Category;