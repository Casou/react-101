import React, {Component} from 'react'
import {CircularProgress} from "@material-ui/core";
import {connect} from "react-redux";

const withLoading = (WrappedComponent) => {
  class ComponentWithLoading extends Component {
    render() {
      const { people } = this.props;

      if (!people.length) {
        return <CircularProgress />;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    people : state.people
  });

  return connect(
    mapStateToProps,
    null)(ComponentWithLoading);
}

export default withLoading;