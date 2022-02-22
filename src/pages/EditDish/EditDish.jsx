import React from 'react';
import PropTypes from 'prop-types';
import DishType from "@/types/DishType";
import styles from "./EditDish.module.css";
import {useParams} from "react-router-dom";

const EditDish = ({recipes}) => {
  const {id} = useParams();
  const recipe = recipes.find(r => r.id === +id);
  if (!recipe) {
    return "Not found";
  }

  return (
    <div className={styles.content}>
      <section className={styles.thumbnail}>
        <img src={recipe.thumbnail} alt={"Thumbnail"} />
      </section>
      <section className={styles.form}>
        <h1>Edit recipe</h1>
        <p>Name: { recipe.name }</p>
        <p>Category: { recipe.category }</p>
        <p>Thumbnail: { recipe.thumbnail }</p>
        <p>Video: { recipe.video }</p>
      </section>
    </div>
  )
};

EditDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
EditDish.defaultProps = {};

export default EditDish;