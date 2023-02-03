import PropTypes from 'prop-types';
import "./Menu.css";
import RandomDish from "./RandomDish";
import DishType from "./DishPropTypes";

const Menu = ({ recipes }) => {
  return (
    <div className="menu">
      <RandomDish recipes={recipes} />
    </div>
  )
}

Menu.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
Menu.defaultProps = {};

export default Menu;