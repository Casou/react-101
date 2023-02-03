import React from 'react';
import PropTypes from 'prop-types';
import "./Dish.css";

const Picture = ({src}) => {
    return (
        <div className="card-image">
            <img src={src} alt="Thumbnail"/>
        </div>
    )
}

const Title = ({children}) => {
    return (
        <div className="card-title">
            {children}
        </div>
    )
}

const Category = ({children}) => {
    return (
        <div className="card-sub-title">
            {children}
        </div>
    )
}

const Link = ({icon, title, href, children}) => {
    return (
        <IconedText icon={icon} title={title}>
            <a href={href} target="_blank">
                {children}
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

const VideoLink = ({link}) => {
    if (!link) {
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
              href={link}
        >
          Video
        </Link>
    )
}

const ThumbnailLink = ({link}) => {
    return (
        <Link icon={"photo_camera"}
              title={"Thumbnail"}
              href={link}
        >
          Picture
        </Link>
    )
}

const Tags = ({tags}) => {
    return (
        <p>
            Tags : {
            tags
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