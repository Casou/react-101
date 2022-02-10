import "./Menu.css";
import PropTypes from "prop-types";

const Menu = ({ name, people, link }) => {
  return (
    <main className="menu">
      <main className="menu">
        <p>
          Dish name : { name }
        </p>
        <p>
          People : { people }
        </p>
        <p>
          Link : { link?.toUpperCase() }
        </p>
      </main>
    </main>
  )
}

Menu.propTypes = {
  name: PropTypes.string.isRequired,
  people: PropTypes.number,
  link: PropTypes.string,
};
Menu.defaultProps = {
  people: 4
};

export default Menu;