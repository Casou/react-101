import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import {people} from './data/people.json';
import List from 'pages/List.jsx';  

const App = () => (
  <div className="App">
    <header>
      <HeaderBar/>
    </header>
    <main>
      <List people={people}/>
    </main>
  </div>
);

export default App;