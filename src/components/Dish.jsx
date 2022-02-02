import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Title = ({ dishName }) => {
  return <div className="card-title">{ dishName }</div>
}

const Headline = ({ text }) => {
  return <div className="card-sub-title">{ text }</div>
}

const RecipeLink = ({ link }) => {
  return (
    <div className="card-info">
      <i className="material-icons">cake</i>
      <span>
            <a href={ link } target="_blank">Recette</a>
          </span>
    </div>
  )
}

const AllergenLink = ({ link }) => {
  return (
    <div className="card-info">
      <i className="material-icons">warning</i>
      <span className="warning">
            <a href={ link } target="_blank">Allergènes</a>
          </span>
    </div>
  )
}

const Dish = ({ children }) => {
  return (
    <section className="card">
      <div className="card-image">
        <img src="https://media.istockphoto.com/photos/seafood-paella-picture-id155597348" alt="Avatar"/>
      </div>
      <div className="card-content">
        { children }
      </div>
    </section>
  )
};

Dish.Title = Title;
Dish.Headline = Headline;
Dish.RecipeLink = RecipeLink;
Dish.AllergenLink = AllergenLink;

Dish.propTypes = {};
Dish.defaultProps = {};

export default Dish;