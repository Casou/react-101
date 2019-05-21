import React from 'react';
import './App.css';
import HeaderBar from "./components/app-bar/HeaderBar";
import {Redirect, Route, Switch} from "react-router-dom";
import ListPeople from "./pages/list-people/ListPeople";
import FilteredList from "./pages/filter/FilteredList";

class App extends React.Component {

  state = {
    people : []
  };

  componentDidMount() {
    fetch('/api/people')
      .then(res => res.json())
      .then(people => {
        this.setState({ people })
      });
  }

  render() {
    const { people } = this.state;

    return (
      <div className="App">
        <header>
          <HeaderBar />
        </header>
        <main>
          <Switch>
            <Route path="/list" component={() => <ListPeople people={ people } />} />
            <Route path="/filter" component={ FilteredList } />
            <Redirect to="/list" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
