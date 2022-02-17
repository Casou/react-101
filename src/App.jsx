import AppBar from "./components/AppBar";

import "./App.css"
import {Navigate, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import SingleDish from "./components/SingleDish";
import RandomDish from "./components/RandomDish";
import React, {useEffect, useState} from "react";
import Loader from "./components/Loader";

function App() {
  const [ recipes, setRecipes ] = useState(null);

  useEffect(() => {
    fetch("/api/recipes")
      .then(r => r.json())
      .then(setRecipes);
  }, []);

  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        {
          !recipes ?
            <Loader /> :
            <Routes>
              <Route path={"/menu"}>
                <Route index element={<Menu recipes={recipes} />} />
                <Route path={":id"} element={<SingleDish recipes={recipes} />} />
              </Route>
              <Route path={"/random"} element={<RandomDish recipes={recipes} />} />

              <Route path="*" element={<Navigate to="/menu" replace />} />
            </Routes>
        }
      </main>
    </div>
  )
}

export default App
