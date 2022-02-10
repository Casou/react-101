import "./Menu.css";
import PropTypes from "prop-types";

const Menu = ({ name, people, link }) => {
  return (
    <main className="menu">
      <main className="menu">
        <p>
          Nom du plat : { name }
        </p>
        <p>
          Nombre de personnes : { people }
        </p>
        <p>
          Lien : { link?.toUpperCase() }
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