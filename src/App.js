import React from 'react';
import AppBar from 'components/AppBar';
import Card from 'components/Card';

const MESSAGE = "Hello, World!";

const App = () => (
  <div className="App">
    <header><AppBar /></header>
    <main><Card message={ MESSAGE } /></main>
  </div>
);

export default App;