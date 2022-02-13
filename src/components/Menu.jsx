import PropTypes from 'prop-types';
import "./Menu.css";
import DishCard from "./DishCard";

import recipes from '../_data/recipes.json';

const Menu = () => {
    const sortedRecipes = recipes
        .sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div className="menu">
            {
                sortedRecipes.map(recipe =>
                    <DishCard recipe={ recipe } key={`recipe-${ recipe.id }`} />
                )
            }
        </div>
    )
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;