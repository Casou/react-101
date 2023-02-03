import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Picture = ({ dish }) => {
  return (
    <div className="card-image">
      <img src={ dish.thumbnail } alt="Thumbnail" />
    </div>
  )
}

const Title = ({ dish }) => {
  return (
    <div className="card-title">
      { dish.name }
    </div>
  )
}

const Category = ({ dish }) => {
  return (
    <div className="card-sub-title">
      { dish.category }
    </div>
  )
}

const Link = ({ icon, title, href, text }) => {
  return (
    <div className="card-info">
      <i className="material-icons" title={ title }>{ icon }</i>
      <span>
          <a href={ href } target="_blank">
              { text }
          </a>
      </span>
    </div>
  )
}

const VideoLink = ({ dish }) => {
  return (
    <Link icon={"ondemand_video"}
          title={"Youtube link"}
          href={dish.video}
          text={"Video"}
    />
  )
}

const ThumbnailLink = ({ dish }) => {
  return (
    <Link icon={"photo_camera"}
          title={"Thumbnail"}
          href={dish.thumbnail}
          text={"Picture"}
    />
  )
}

const Tags = ({ dish }) => {
  return (
    <p>
      Tags : {
      dish.tags
        .filter((tag, index) => tag !== "Baking" && dish.tags.findIndex(t => t === tag) === index)
        .map(tag => `#${ tag.toLowerCase() }`)
        .sort()
        .join(" ")
    }
    </p>
  )
}

const Dish = ({ picture, children }) => {
  return (
    <section className="card dish-card">
      { picture }
      <div className="card-content">
        { children }
      </div>
    </section>
  )
};

Dish.Picture = Picture;
Dish.Title = Title;
Dish.Category = Category;
Dish.VideoLink = VideoLink;
Dish.ThumbnailLink = ThumbnailLink;
Dish.Tags = Tags;

Dish.propTypes = {};
Dish.defaultProps = {};

export default Dish;