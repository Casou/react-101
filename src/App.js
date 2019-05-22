import React from 'react';
import './App.css';
import HeaderBar from "./components/app-bar/HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import ListPeople from "./pages/list-people/ListPeople";
import FilteredList from "./pages/filter/FilteredList";
import EditPerson from "./pages/edit-person/EditPerson";
import {connect} from "react-redux";
import PeopleActions from "./store/people/actions";
import {bindActionCreators} from "redux";

class App extends React.Component {

  componentDidMount() {
    this.props.peopleActions.getAllPeople();
  }

  render() {
    return (
      <div className="App">
        <header>
          <HeaderBar />
        </header>
        <main>
          <Switch>
            <Route path="/list" component={ ListPeople } />
            <Route path="/filter" component={ FilteredList } />
            <Route path="/person/edit/:idPerson" component={ EditPerson } />
            <Redirect to="/list" />
          </Switch>
        </main>
      </div>
    );
  }
}


export default connect(null, dispatch => ({
  peopleActions: bindActionCreators(PeopleActions, dispatch)
}))(App);
