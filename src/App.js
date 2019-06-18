import React from 'react';
import AppBar from 'components/AppBar';
import Card from 'components/Card';

import { people } from './data/people.json';

console.log(people);
const randomPerson = people[Math.floor(Math.random() * people.length)];

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Card />
      <section className="class-to-remove">
        <p>Structure de l'objet "Person"</p>
        <pre>{JSON.stringify(randomPerson, null, 2)}</pre>
      </section>
    </main>
  </div>
);

export default App;