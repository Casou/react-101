import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Picture = ({dish}) => {
    return (
        <div className="card-image">
            <img src={dish.thumbnail} alt="Thumbnail"/>
        </div>
    )
}

const Title = ({dish}) => {
    return (
        <div className="card-title">
            {dish.name}
        </div>
    )
}

const Category = ({dish}) => {
    return (
        <div className="card-sub-title">
            {dish.category}
        </div>
    )
}

const Link = ({icon, title, href, text}) => {
    return (
        <IconedText icon={icon} title={title}>
            <a href={href} target="_blank">
                {text}
            </a>
        </IconedText>
    )
}
const IconedText = ({icon, title, children}) => {
    return (
        <div className="card-info">
            <i className="material-icons" title={title}>{icon}</i>
            <span>
          {children}
      </span>
        </div>
    )
}

const VideoLink = ({dish}) => {
    if (!dish.video) {
        return (
            <IconedText icon={"ondemand_video"}
                        title={"Youtube link"}>
                soon...
            </IconedText>
        )
    }
    return (
        <Link icon={"ondemand_video"}
              title={"Youtube link"}
              href={dish.video}
              text={"Video"}
        />
    )
}

const ThumbnailLink = ({dish}) => {
    return (
        <Link icon={"photo_camera"}
              title={"Thumbnail"}
              href={dish.thumbnail}
              text={"Picture"}
        />
    )
}

const Tags = ({dish}) => {
    return (
        <p>
            Tags : {
            dish.tags
                .filter(tag => tag !== "Baking")
                .map(tag => `#${tag.toLowerCase()}`)
                .sort()
                .join(" ")
        }
        </p>
    )
}

const Dish = ({picture, children}) => {
    return (
        <section className="card">
            {picture}
            <div className="card-content">
                {children}
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