import AppBar from "./components/AppBar";

import "./App.css"
import {Navigate, Routes, Route} from "react-router-dom";
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
            <Route index element={<Menu recipes={[]} />} />
            <Route path={":id"} element={<SingleDish recipes={[]} />} />
          </Route>
          <Route path={"/random"} element={<RandomDish recipes={[]} />} />

          <Route path="*" element={<Navigate to="/menu" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
