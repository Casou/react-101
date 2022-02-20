import React from 'react';
import PropTypes from 'prop-types';

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

IconedText.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
IconedText.defaultProps = {};

export default IconedText;