import React from 'react';
import Dish from "./Dish";
import DishType from "./DishPropTypes";
import caloryUtils from "../utils/caloryUtils";

const DishCard = ({ recipe }) => {
    return (
        <Dish picture={<Dish.Picture src={recipe.thumbnail}/>}>
            <Dish.Title>{recipe.name}</Dish.Title>
            <Dish.Category>{recipe.category}</Dish.Category>
            <Dish.VideoLink link={recipe.video}/>
            <Dish.ThumbnailLink link={recipe.thumbnail}/>
            <Dish.Calories caloryCount={ caloryUtils.calculateCalories(recipe) } />
            { !!recipe.tags.length && <Dish.Tags tags={recipe.tags}/> }
        </Dish>
    );
};

DishCard.propTypes = {
    recipe: DishType.isRequired
};
DishCard.defaultProps = {};

export default DishCard;
