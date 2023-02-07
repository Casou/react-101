import PropTypes from 'prop-types';
import DishType from "../../types/DishType";
import DishCard from "../../common/components/DishCard";
import styles from "./RandomDish.module.css"
import {useState} from "react";

const randomId = recipes => Math.round(Math.random() * recipes.length)
const RandomDish = ({recipes}) => {
  const [recipeId, setRecipeId] = useState(randomId(recipes))

  const recipe = recipes[recipeId];
  return (
    <div className={styles.content}>
      <DishCard recipe={recipe}/>

      <button className="waves-effect waves-light btn"
              onClick={() => setRecipeId(randomId(recipes))}
      >
        Next
      </button>
    </div>
  )
}

RandomDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
RandomDish.defaultProps = {};

export default RandomDish;