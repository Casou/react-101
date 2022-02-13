import PropTypes from 'prop-types';
import "./Menu.css";
import DishCard from "./DishCard";

const Menu = ({recipes}) => {
    return (
        <div className="menu">
            <DishCard recipe={recipes[0]}/>
            <DishCard recipe={recipes[1]}/>
            <DishCard recipe={recipes[2]}/>
            <DishCard recipe={recipes[3]}/>
        </div>
    )
}

Menu.propTypes = {
    recipes: PropTypes.array.isRequired,
};
Menu.defaultProps = {};

export default Menu;