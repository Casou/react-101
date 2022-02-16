import AppBar from "./components/AppBar";

import "./App.css"
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
          <Outlet />
      </main>
    </div>
  )
}

export default App
