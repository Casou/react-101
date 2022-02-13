import PropTypes from 'prop-types';
import "./Menu.css";
import DishCard from "./DishCard";

const Menu = ({recipes}) => {
    const sortedRecipes = recipes
        .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
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

Menu.propTypes = {
    recipes: PropTypes.array.isRequired,
};
Menu.defaultProps = {};

export default Menu;