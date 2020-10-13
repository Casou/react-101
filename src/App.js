import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import {Redirect, Route, Switch} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";
import EditPerson from "./components/edit-person/EditPerson";

import "./App.css";

import {connect} from 'react-redux';
import {fetchPeople} from 'store/actions';
import {updatePerson} from "./store/actions";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPeople();
  }

  _onSave = person => {
    return this.props.updatePerson(person);
  };

  render() {
    const { people } = this.props;
    return (
      <div className="App">
        <header>
          <HeaderBar/>
        </header>
        <main>
          { !people.length ?
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

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople()),
  updatePerson: (person) => dispatch(updatePerson(person))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
