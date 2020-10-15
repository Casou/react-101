import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import "./App.css";

import {connect} from 'react-redux';
import {fetchPeople} from 'store/actions';
import RouteContent from "./components/RouteContent";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <div className="App">
        <header>
          <HeaderBar/>
        </header>
        <main>
          <RouteContent />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople())
});

export default connect(
  null,
  mapDispatchToProps)(App);
