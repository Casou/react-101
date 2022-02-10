import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Dish = () => {
  return (
    <section className="card dish-card">
      <div className="card-image">
        <img src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" alt="Thumbnail" />
      </div>
      <div className="card-content">
        <div className="card-title">
          Apple Frangipan Tart
        </div>
        <div className="card-sub-title">
          Category: Dessert
        </div>
        <div className="card-info">
          <i className="material-icons" title="Youtube link">ondemand_video</i>
          <span>
              <a href="https://www.youtube.com/watch?v=rp8Slv4INLk" target="_blank">
                  Video
              </a>
          </span>
        </div>

        <div className="card-info">
          <i className="material-icons" title="Thumbnail">photo_camera</i>
          <span>
              <a href="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" target="_blank">
                Picture
              </a>
          </span>
        </div>
      </div>
    </section>
  )
};

Dish.propTypes = {};
Dish.defaultProps = {};

export default Dish;