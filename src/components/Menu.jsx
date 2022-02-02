import "./Menu.css";
import PropTypes from "prop-types";
import Dish from "./Dish";

const Menu = () => {
  return (
    <main className="menu">
      <Dish>

      </Dish>
    </main>
  )
}

Menu.propTypes = {
  message: PropTypes.string
};
Menu.defaultProps = {
  message: "Default message"
};

export default Menu;