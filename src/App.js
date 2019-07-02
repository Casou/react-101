import React from 'react';
import HeaderBar from 'components/app-bar/HeaderBar';

import { people } from './data/people.json';
import List from './List';

const App = () => (
  <div className="App">
    <header>
      <HeaderBar />
    </header>
    <main>
      <List people={ people } />
    </main>
  </div>
);

export default App;