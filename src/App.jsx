import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

import "./App.css"
import recipes from './_data/recipes.json';

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        <Menu recipes={recipes} />
      </main>
    </div>
  )
}

export default App
