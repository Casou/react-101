import React from 'react';
import PropTypes from 'prop-types';

const YoutubeVideo = ({videoLink}) => {
  const id = videoLink.substring(videoLink.indexOf("?v=") + 3);
  return (
    <iframe width="560" height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
    />
  )
};

YoutubeVideo.propTypes = {
  videoLink: PropTypes.string.isRequired
};
YoutubeVideo.defaultProps =
{};

export default YoutubeVideo;