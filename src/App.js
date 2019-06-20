import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import { people } from './data/people.json';
import List from 'pages/List.jsx';
import Random from 'pages/Random.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <div className="App">
    <header>
      <HeaderBar />
    </header>
    <main>
      <Switch>
        <Route path="/" exact render={() => <List people={ people} />} />
        <Route path="/random" component={() => <Random people={ people } />} />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  </div>
);

export default App;