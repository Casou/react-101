import React from 'react';
import Dish, {Calories, Category, Picture, Tags, ThumbnailLink, Title, VideoLink} from "./Dish";
import DishType from "../../types/DishType"
import caloryUtils from "../../utils/caloryUtils"

const DishCard = ({ recipe }) => {
  return (
    <Dish picture={<Picture src={recipe.thumbnail}/>}>
      <Title>{ recipe.name }</Title>
      <Category>{ recipe.category }</Category>
      <VideoLink link={recipe.video}/>
      <ThumbnailLink link={recipe.thumbnail}/>
      <Calories caloryCount={ caloryUtils.calculateCalories(recipe) } />
      { !!recipe.tags.length && <Tags tags={recipe.tags}/> }
    </Dish>
  );
};

DishCard.propTypes = {
  recipe: DishType.isRequired
};
DishCard.defaultProps = {};

export default DishCard;

