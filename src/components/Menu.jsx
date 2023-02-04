import PropTypes from 'prop-types';
import "./Menu.css";
import DishCard from "./DishCard";
import DishType from "./DishPropTypes";

const Menu = ({ recipes }) => {
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

Menu.propTypes = {
    recipes: PropTypes.arrayOf(DishType).isRequired
};
Menu.defaultProps = {};

export default Menu;