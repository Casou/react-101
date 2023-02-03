import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Picture = ({ src }) => {
  return (
    <div className="card-image">
      <img src={ src } alt="Thumbnail" />
    </div>
  )
}

const Title = ({ children }) => {
  return (
    <div className="card-title">
      { children }
    </div>
  )
}

const Category = ({ children }) => {
  return (
    <div className="card-sub-title">
      { children }
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

const VideoLink = ({ link }) => {
  return (
    <Link icon={"ondemand_video"}
          title={"Youtube link"}
          href={link}
          text={"Video"}
    />
  )
}

const ThumbnailLink = ({ link }) => {
  return (
    <Link icon={"photo_camera"}
          title={"Thumbnail"}
          href={link}
          text={"Picture"}
    />
  )
}

const Tags = ({ tags }) => {
  return (
    <p>
      Tags : {
        tags
          .filter(tag => tag !== "Baking")
          .map(tag => `#${ tag.toLowerCase() }`)
          .sort()
          .join(" ")
      }
    </p>
  )
}

const Dish = ({ picture, children }) => {
  return (
    <section className="card">
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