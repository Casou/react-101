import React from 'react';
import AppBar from 'components/AppBar';
import Discover from 'components/Discover';

import { people } from './data/people.json';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Discover people={ people } />
    </main>
  </div>
);

export default App;