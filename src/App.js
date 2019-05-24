import React from 'react';
import './App.css';
import HeaderBar from "./components/app-bar/HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import ListPeople from "./pages/list-people/ListPeople";
import Cra from "./pages/cra/Cra";
import EditPerson from "./pages/edit-person/EditPerson";
import {connect} from "react-redux";
import PeopleActions from "./store/people/actions";
import CraActions from "./store/cra/actions";
import {bindActionCreators} from "redux";

class App extends React.Component {

  componentDidMount() {
    this.props.peopleActions.getAllPeople();
    this.props.craActions.getAllCraItems();
  }

  isApplicationReady() {
    return this.props.people.length;
  }

  render() {
    if (!this.isApplicationReady()) {
      return "Loading";
    }

    return (
      <div className="App">
        <header>
          <HeaderBar />
        </header>
        <main>
          <Switch>
            <Route path="/people" component={ ListPeople } exact />
            <Route path="/cra" component={ Cra } exact />
            <Route path="/people/edit/:id" component={ EditPerson } exact />
            <Redirect to="/people" />
          </Switch>
        </main>
      </div>
    );
  }
}


export default connect(state => ({
  people: state.people
}), dispatch => ({
  peopleActions: bindActionCreators(PeopleActions, dispatch),
  craActions: bindActionCreators(CraActions, dispatch)
}))(App);
