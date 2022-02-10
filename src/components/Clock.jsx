import React from 'react';
import PropTypes from 'prop-types';

import "./Clock.css"

const Clock = (props) => {
  return (
    <span className="clock__value">
      12:34:56
    </span>
  )
};

Clock.propTypes = {};
Clock.defaultProps = {};

export default Clock;