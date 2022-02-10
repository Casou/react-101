import React from 'react';
import PropTypes from 'prop-types';

import "./Clock.css"

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <span className="clock__value">
        { currentTime.toLocaleTimeString() }
      </span>
    )
  }
}

Clock.propTypes = {};
Clock.defaultProps = {};

export default Clock;