import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";
import EditPerson from "./components/edit-person/EditPerson";

import "./App.css";

import {connect} from 'react-redux';
import { fetchPeople } from 'store/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPeople();
  }

  _onSave = (person) => {
    return fetch(`/api/people/${person.id}`, {
      method: 'PATCH',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  render() {
    const { people } = this.props;
    return (
      <div className="App">
        <header>
          <HeaderBar/>
        </header>
        <main>
          { !people ?
            <CircularProgress />
            :
            <Switch>
              <Route path="/" exact render={() => <List people={people}/>}/>
              <Route path="/random" component={() => <Random people={people}/>}/>
              <Route path="/people/edit/:id" component={(props) =>
                <EditPerson person={people.find(p => p.id === parseInt(props.match.params.id))}
                            onSave={this._onSave} />}/>
              <Redirect from="*" to="/"/>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people : state.people
});

const mapDispatchToProps = {
  fetchPeople
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
