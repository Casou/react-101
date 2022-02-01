import "./Menu.css";
import PropTypes from "prop-types";

const Menu = ({ message }) => {
  return (
    <main className="menu">
      Insérez le message passé en props : { message }
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