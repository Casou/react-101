import AppBar from "./components/AppBar";

import "./App.css"
import {Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import SingleDish from "./components/SingleDish";
import RandomDish from "./components/RandomDish";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        <Routes>
          <Route path={"/menu"}>
            <Route index element={<Menu />} />
            <Route path={":id"} element={<SingleDish />} />
          </Route>
          <Route path={"/random"} element={<RandomDish />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
