import PropTypes from 'prop-types';
import "./Menu.css";
import Dish from "./Dish";
import RandomDish from "./RandomDish";

const Menu = ({ recipes }) => {
  return (
    <div className="menu">
      <RandomDish recipes={recipes} />
    </div>
  )
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;