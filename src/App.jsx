import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

import "./App.css"
import recipes from './_data/recipes.json';

// Dish to display
const randomDish = recipes[Math.floor(Math.random() * recipes.length)];

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        <Menu />
        <section className="class-to-remove">
          <p>Object "dish" outline :</p>
          <pre>{JSON.stringify(recipes[0], null, 2)}</pre>
        </section>
      </main>
    </div>
  )
}

export default App
