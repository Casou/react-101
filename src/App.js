import React from 'react';
import './App.css';
import HeaderBar from "./components/app-bar/HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import ListPeople from "./pages/list-people/ListPeople";
import RandomPeople from "./pages/random-people/RandomPeople";
import EditPerson from "./pages/edit-person/EditPerson";
import {connect} from "react-redux";
import PeopleActions from "./store/people/actions";
import {bindActionCreators} from "redux";
import {CircularProgress} from "@material-ui/core";

class App extends React.Component {

  componentDidMount() {
    this.props.peopleActions.getAllPeople();
  }

  render() {
    const { people } = this.props;

    return (
      <div className="App">
        <header>
          <HeaderBar />
        </header>
        <main>
          {
            !people.length ?
              <CircularProgress />
            :
              <Switch>
                <Route path="/people" component={ ListPeople } exact />
                <Route path="/random" component={ RandomPeople } exact />
                <Route path="/people/edit/:id" component={ EditPerson } exact />
                <Redirect to="/people" />
              </Switch>
          }
        </main>
      </div>
    );
  }
}


export default connect(state => ({
  people: state.people
}), dispatch => ({
  peopleActions: bindActionCreators(PeopleActions, dispatch)
}))(App);
