import PropTypes from 'prop-types';
import styles from "./Menu.module.css";
import DishCard from "../../common/components/DishCard";
import DishType from "../../types/DishType";
import {useState} from "react";
import RecipeDialog from "./components/RecipeDialog";

const _doesRecipeMatch = (recipe, filter) => {
  if (!filter) {
    return true;
  }

  const lowerFilter = filter.toLowerCase();
  return recipe.name.toLowerCase().includes(lowerFilter) || recipe.category?.toLowerCase().includes(lowerFilter);
}

const Menu = ({recipes}) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [filter, setFilter] = useState("");

    const sortedRecipes = recipes
      .filter(recipe => _doesRecipeMatch(recipe, filter))
      .sort((a, b) => a.name.localeCompare(b.name));

    return (
      <>
          <RecipeDialog recipe={selectedRecipe}
                        open={!!selectedRecipe}
                        onClose={() => setSelectedRecipe(null)}
          />

          <div className={"input-field " + styles["filter-input"]}>
            <input placeholder="Filter dish" type="text" value={filter} onChange={e => setFilter(e.target.value)} />
          </div>

          <div className={styles.menu}>
              {
                  sortedRecipes.map(recipe =>
                    <DishCard recipe={recipe}
                              key={`recipe-${recipe.id}`}
                              onClick={() => setSelectedRecipe(recipe)}
                    />
                  )
              }
          </div>
      </>
    )
}

Menu.propTypes = {
    recipes: PropTypes.arrayOf(DishType).isRequired
};
Menu.defaultProps = {};

export default Menu;