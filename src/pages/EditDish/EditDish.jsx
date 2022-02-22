import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DishType from "@/types/DishType";
import styles from "./EditDish.module.css";
import {useNavigate, useParams} from "react-router-dom";

const Input = ({value, setValue}) =>
  <div className={"input-field"}>
    <input type="text"
           value={value}
           onChange={e => setValue(e.target.value)}/>
  </div>;

const EditDish = ({recipes}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ recipe, setRecipe ] = useState(recipes.find(r => r.id === +id))
  if (!recipe) {
    return "Not found";
  }

  const _saveRecipe = recipe => {
    return fetch(`/api/recipes/${recipe.id}`, {
      method: 'PATCH',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      navigate("/");
    });
  }

  const _updateRecipe = property => value => {
    setRecipe({ ...recipe, [property]: value })
  }

  return (
    <div className={styles.content}>
      <section className={styles.thumbnail}>
        <img src={recipe.thumbnail} alt={"Thumbnail"} />
      </section>
      <section className={styles.form}>
        <h1>Edit recipe</h1>
        <div>Name: <Input value={recipe.name} setValue={_updateRecipe("name")} /></div>
        <div>Category: <Input value={recipe.category} setValue={_updateRecipe("name")} /></div>
        <div>Thumbnail: <Input value={recipe.thumbnail} setValue={_updateRecipe("thumbnail")} /></div>
        <div>Video: <Input value={recipe.video} setValue={_updateRecipe("video")} /></div>

        <button className={ "waves-effect waves-light btn " + styles["save-button"]}
                onClick={() => _saveRecipe(recipe)}
        >
          Save
        </button>
      </section>
    </div>
  )
};

EditDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
EditDish.defaultProps = {};

export default EditDish;