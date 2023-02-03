import React from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";
import DishType from "./DishPropTypes";

const DishCard = ({ recipe }) => {
    return (
        <Dish picture={<Dish.Picture dish={recipe}/>}>
            <Dish.Title dish={recipe}/>
            <Dish.Category dish={recipe}/>
            <Dish.VideoLink dish={recipe}/>
            <Dish.ThumbnailLink dish={recipe}/>
            { !!recipe.tags.length && <Dish.Tags dish={recipe}/> }
        </Dish>
    );
};

DishCard.propTypes = {
    recipe: DishType.isRequired
};
DishCard.defaultProps = {};

export default DishCard;
