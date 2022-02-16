import AppBar from "./components/AppBar";

import "./App.css"
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
          <Menu />
      </main>
    </div>
  )
}

export default App
