import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import "./Clock.css"

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());

      return () => clearInterval(intervalId);
    }, 1000);


  }, []);

  return (
    <span className="clock__value">
      {currentTime.toLocaleTimeString()}
    </span>
  )
}

Clock.propTypes = {};
Clock.defaultProps = {};

export default Clock;