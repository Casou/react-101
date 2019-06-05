import React from 'react';
import './App.css';
import HeaderBar from "./components/app-bar/HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import ListPeople from "./pages/list-people/ListPeople";
import RandomPeople from "./pages/random-people/RandomPeople";
import EditPerson from "./pages/edit-person/EditPerson";
import {CircularProgress} from "@material-ui/core";
import {loadPeople} from "./store/people/actions";
import {withStorePeople} from "./components/hoc/withStorePeople";

// With action creators :
// import PeopleActions from "./store/people/actions";
// import {bindActionCreators} from "redux";

class App extends React.Component {

  componentDidMount() {
    this.props.loadPeople();

    // With action creators :
    // this.props.peopleActions.loadPeople();
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

const mapDispatchToProps = dispatch => ({
  // With action creators :
  // peopleActions: bindActionCreators(PeopleActions, dispatch)
  loadPeople: () => dispatch(loadPeople())
});

export default withStorePeople(App, mapDispatchToProps);

