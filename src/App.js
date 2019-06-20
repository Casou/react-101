import React from 'react';
import AppBar from 'components/AppBar';
import Random from 'components/Random';

import { people } from './data/people.json';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Random people={ people } />
    </main>
  </div>
);

export default App;