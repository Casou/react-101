import PropTypes from 'prop-types';
import DishCard from "./DishCard";

import recipes from '../_data/recipes.json';

const Menu = () => {
    const recipe = recipes[Math.round(Math.random() * recipes.length)];
    return (
        <div>
            <DishCard recipe={recipe} />
        </div>
    )
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;