import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DishType from "../../types/DishType";
import styles from "./EditDish.module.css";
import {useNavigate, useParams} from "react-router-dom";

const Input = ({value, name, setValue, id}) =>
  <div className={"input-field"}>
    <input type="text"
           id={id}
           value={value}
           name={name}
           onChange={e => setValue(e.target.value)}/>
  </div>;

const EditDish = ({recipes, onSave}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === +id))
  if (!recipe) {
    return <>Recipe not found</>;
  }

  const _saveRecipe = recipe => {
    onSave(recipe).then(() => {
      navigate("/");
    }).catch(e => {
      console.error("Error while saving: ", e)
    });
  }

  const _updateRecipe = property => value => {
    setRecipe({...recipe, [property]: value});
  }

  return (
    <div className={styles.content}>
      <section className={styles.thumbnail}>
        <img src={recipe.thumbnail} alt={"Thumbnail"}/>
      </section>
      <section className={styles.form}>
        <h1>Edit recipe</h1>
        <div>
          <label htmlFor="input-name">Name: </label>
          <Input id="input-name" value={recipe.name} name="name" setValue={_updateRecipe("name")}/>
        </div>
        <div>
          <label htmlFor="input-category">Category: </label>
          <Input id="input-category" value={recipe.category} name="category" setValue={_updateRecipe("category")}/>
        </div>
        <div>
          <label htmlFor="input-thumbnail">Thumbnail: </label>
          <Input id="input-thumbnail" value={recipe.thumbnail} name="thumbnail" setValue={_updateRecipe("thumbnail")}/></div>
        <div>
          <label htmlFor="input-video">Video: </label>
          <Input id="input-video" value={recipe.video} name="video" setValue={_updateRecipe("video")}/>
        </div>

        <button className={"waves-effect waves-light btn " + styles["save-button"]}
                onClick={() => _saveRecipe(recipe)}
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