import PropTypes from 'prop-types';
import "./Menu.css";
import Dish from "./Dish";

const Menu = () => {
  return (
    <div className="menu">
      <Dish />
    </div>
  )
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;