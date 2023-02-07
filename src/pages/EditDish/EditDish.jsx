import React from 'react';
import PropTypes from 'prop-types';
import DishType from "../../types/DishType";
import styles from "./EditDish.module.css";

const EditDish = ({recipes, onSave}) => {
  const id = 0;
  const recipe = recipes.find(r => r.id === +id);

  if (!recipe) {
    return <>Recipe not found</>;
  }

  return (
    <div className={styles.content}>
      <section className={styles.thumbnail}>
        <img src={recipe.thumbnail} alt={"Thumbnail"}/>
      </section>
      <section className={styles.form}>
        <h1>Edit recipe</h1>
        <div>Name: {recipe.name}</div>
        <div>Category: {recipe.category}</div>
        <div>Thumbnail: {recipe.thumbnail}</div>
        <div>Video: {recipe.video}</div>

        <button className={"waves-effect waves-light btn " + styles["save-button"]}
                onClick={() => {}}
        >
          Save
        </button>
      </section>
    </div>
  )
};

EditDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired,
  onSave: PropTypes.func.isRequired,
};
EditDish.defaultProps = {};

export default EditDish;