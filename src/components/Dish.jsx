import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Dish = (props) => {
  return (
    <section className="card">
      <div className="card-image">
        <img src="https://media.istockphoto.com/photos/seafood-paella-picture-id155597348" alt="Avatar"/>
      </div>
      <div className="card-content">
        <div className="card-title">Paëlla</div>
        <div className="card-sub-title">La recette originale</div>
        <div className="card-info">
          <i className="material-icons">cake</i>
          <span>
            <a href="https://www.marmiton.org/recettes/recette_paella-rapide_17477.aspx" target="_blank">Recette</a>
          </span>
        </div>
        <div className="card-info">
          <i className="material-icons">warning</i>
          <span className="warning">
            <a href="https://lepalaissurvienne.fr/images/documents/cuisine/allergene/p/paella.pdf" target="_blank">Allergènes</a>
          </span>
        </div>
      </div>
    </section>
  )
};

Dish.propTypes = {};
Dish.defaultProps = {};

export default Dish;