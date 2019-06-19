import React from 'react';
import AppBar from 'components/AppBar';
import PersonCard from 'components/PersonCard';

import { people } from './data/people.json';

const randomPerson = people[Math.floor(Math.random() * people.length)];

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <PersonCard person={ randomPerson } />
    </main>
  </div>
);

export default App;