import React from 'react';
import PropTypes from 'prop-types';
import IconedText from "./IconedText";

const DishLink = ({icon, title, href, text}) => {
  return (
    <IconedText icon={icon} title={title}>
      <a href={href} target="_blank">
        {text}
      </a>
    </IconedText>
  )
}

DishLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
DishLink.defaultProps = {};

export default DishLink;