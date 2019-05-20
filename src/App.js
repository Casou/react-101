import React from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import {Redirect, Route, Switch} from "react-router-dom";
import List from "./pages/list/List";

class App extends React.Component {

  state = {
    people : []
  };

  componentDidMount() {
    fetch('/api/people')
      .then(res => res.json())
      .then(people => this.setState({ people }));
  }

  render() {
    const { people } = this.state;

    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          <Switch>
            <Route path="/list" component={ List } list={ people } />
            <Redirect to="/list" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
