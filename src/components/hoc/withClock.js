import React, {Component} from 'react';

const withClock = (WrappedComponent) => {
  return class ComponentWithClock extends Component {
    state = {
      date: new Date()
    };

    componentDidMount() {
      this.interval = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { date } = this.state;
      return <WrappedComponent clock={date} {...this.props} />
    }
  }
}

export default withClock;