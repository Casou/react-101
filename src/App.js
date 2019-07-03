import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";

import "./App.css";
import EditPerson from "./components/edit-person/EditPerson";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null
    };
  }

  componentDidMount() {
    fetch("/api/people")
      .then(response => response.json())
      .then(data => this.setState({ people : data }));
  }

  _onSave = (person) => {
    return fetch(`/api/people/${person.id}`, {
      method: 'PATCH',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  render() {
    const { people } = this.state;
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
                <EditPerson { ...props } people={people} onSave={this._onSave} />}/>
              <Redirect from="*" to="/"/>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default App;