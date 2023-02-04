import PropTypes from 'prop-types';
import DishCard from "./DishCard";
import DishType from "./DishPropTypes";

const Menu = ({ recipes }) => {
    const recipe = recipes[Math.round(Math.random() * recipes.length)];
    return (
        <div>
            <DishCard recipe={recipe} />
        </div>
    )
}

Menu.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
Menu.defaultProps = {};

export default Menu;