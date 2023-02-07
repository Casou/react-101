import styles from "../Dish.module.css";
import React from "react";

const Calories = ({ caloryCount }) => {
  return (
    <div className="card-info">
      <i className={"material-icons " + styles["material-icons"]}>restaurant_menu</i>
      <span>
          Calories: { caloryCount } Kcal
      </span>
    </div>
  )
}

export default Calories