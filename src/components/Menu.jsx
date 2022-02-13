import PropTypes from 'prop-types';
import "./Menu.css";
import Dish from "./Dish";

const Menu = ({recipes}) => {
    return (
        <div className="menu">
            <Dish picture={<Dish.Picture dish={recipes[0]}/>}>
                <Dish.Title dish={recipes[0]}/>
                <Dish.Category dish={recipes[0]}/>
                <Dish.VideoLink dish={recipes[0]}/>
                <Dish.ThumbnailLink dish={recipes[0]}/>
                <Dish.Tags dish={recipes[0]}/>
            </Dish>
            <Dish picture={<Dish.Picture dish={recipes[1]}/>}>
                <Dish.Title dish={recipes[1]}/>
                <Dish.Category dish={recipes[1]}/>
                <Dish.VideoLink dish={recipes[1]}/>
                <Dish.ThumbnailLink dish={recipes[1]}/>
                <Dish.Tags dish={recipes[1]}/>
            </Dish>
            <Dish picture={<Dish.Picture dish={recipes[2]}/>}>
                <Dish.Title dish={recipes[2]}/>
                <Dish.Category dish={recipes[2]}/>
                <Dish.VideoLink dish={recipes[2]}/>
                <Dish.ThumbnailLink dish={recipes[2]}/>
                <Dish.Tags dish={recipes[2]}/>
            </Dish>
            <Dish picture={<Dish.Picture dish={recipes[3]}/>}>
                <Dish.Title dish={recipes[3]}/>
                <Dish.Category dish={recipes[3]}/>
                <Dish.VideoLink dish={recipes[3]}/>
                <Dish.ThumbnailLink dish={recipes[3]}/>
                <Dish.Tags dish={recipes[3]}/>
            </Dish>
        </div>
    )
}

Menu.propTypes = {
    recipes: PropTypes.array.isRequired,
};
Menu.defaultProps = {};

export default Menu;