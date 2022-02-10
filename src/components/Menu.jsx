import PropTypes from 'prop-types';
import "./Menu.css";
import Dish from "./Dish";

const Menu = ({ dish }) => {
  return (
    <div className="menu">
      <Dish picture={<Dish.Picture dish={dish} />}>
        <Dish.Title dish={dish} />
        <Dish.Category dish={dish} />
        <Dish.VideoLink dish={dish} />
        <Dish.ThumbnailLink dish={dish} />
      </Dish>
    </div>
  )
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;