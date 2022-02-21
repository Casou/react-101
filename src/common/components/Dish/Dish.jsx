import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Dish.module.css";
import classnames from "classnames";

const Dish = ({picture, children, onClick}) => {
  return (
    <section onClick={onClick}
             className={
               classnames("card", styles.card, {
                 [styles["card__clickable"]]: !!onClick
               })}
    >
      {picture}
      <div className={"card-content " + styles["card-content"]}>
        {children}
      </div>
    </section>
  )
};

Dish.propTypes = {
  picture: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func,
};
Dish.defaultProps = {};

export default Dish;