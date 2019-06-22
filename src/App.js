import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import {people} from './data/people.json';
import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import SinglePeople from "./pages/SinglePeople";

const App = () => (
  <div className="App">
    <header>
      <HeaderBar/>
    </header>
    <main>
      <Switch>
        <Route path="/" exact render={() => <List people={people}/>}/>
        <Route path="/random" component={() => <Random people={people}/>}/>
        <Route path="/people/:id" render={(props) =>
          <SinglePeople person={people.find(p => p.id === parseInt(props.match.params.id))}/>
        } />
        <Redirect from="*" to="/"/>
      </Switch>
    </main>
  </div>
);

export default App;