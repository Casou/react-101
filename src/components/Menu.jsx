import PropTypes from 'prop-types';
import "./Menu.css";
import Dish from "./Dish";

const Menu = ({recipes}) => {
    return (
        <div className="menu">
            <Dish picture={<Dish.Picture src={recipes[0].thumbnail}/>}>
                <Dish.Title>{ recipes[0].name }</Dish.Title>
                <Dish.Category>{ recipes[0].category }</Dish.Category>
                <Dish.VideoLink link={recipes[0].video}/>
                <Dish.ThumbnailLink link={recipes[0].thumbnail}/>
                <Dish.Tags tags={recipes[0].tags}/>
            </Dish>
            <Dish picture={<Dish.Picture src={recipes[1].thumbnail}/>}>
                <Dish.Title>{ recipes[1].name }</Dish.Title>
                <Dish.Category>{ recipes[1].category }</Dish.Category>
                <Dish.VideoLink link={recipes[1].video}/>
                <Dish.ThumbnailLink link={recipes[1].thumbnail}/>
                <Dish.Tags tags={recipes[1].tags}/>
            </Dish>
            <Dish picture={<Dish.Picture src={recipes[2].thumbnail}/>}>
                <Dish.Title>{ recipes[2].name }</Dish.Title>
                <Dish.Category>{ recipes[2].category }</Dish.Category>
                <Dish.VideoLink link={recipes[2].video}/>
                <Dish.ThumbnailLink link={recipes[2].thumbnail}/>
                <Dish.Tags tags={recipes[2].tags}/>
            </Dish>
            <Dish picture={<Dish.Picture src={recipes[3].thumbnail}/>}>
                <Dish.Title>{ recipes[3].name }</Dish.Title>
                <Dish.Category>{ recipes[3].category }</Dish.Category>
                <Dish.VideoLink link={recipes[3].video}/>
                <Dish.ThumbnailLink link={recipes[3].thumbnail}/>
                <Dish.Tags tags={recipes[3].tags}/>
            </Dish>
        </div>
    )
}

Menu.propTypes = {
    recipes: PropTypes.array.isRequired,
};
Menu.defaultProps = {};

export default Menu;