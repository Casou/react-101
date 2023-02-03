import React from 'react';
import PropTypes from 'prop-types';
import Dish from "./Dish";

const DishCard = ({ recipe }) => {
    return (
        <Dish picture={<Dish.Picture src={recipe.thumbnail}/>}>
            <Dish.Title>{ recipe.name }</Dish.Title>
            <Dish.Category>{ recipe.category }</Dish.Category>
            <Dish.VideoLink link={recipe.video}/>
            <Dish.ThumbnailLink link={recipe.thumbnail}/>
            { !!recipe.tags.length && <Dish.Tags tags={recipe.tags}/> }
        </Dish>
    );
};

DishCard.propTypes = {
    recipe: PropTypes.object.isRequired
};
DishCard.defaultProps = {};

export default DishCard;
