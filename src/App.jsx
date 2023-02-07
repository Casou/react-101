import React, {useEffect, useState} from "react";
import {Navigate, Routes, Route} from "react-router-dom";
import "./App.css"
import AppBar from "./common/components/AppBar";
import Loader from "./common/components/Loader";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import RandomDish from "./pages/RandomDish";
import EditDish from "./pages/EditDish";

function App() {
  const [ recipes, setRecipes ] = useState(null);

  useEffect(() => {
    fetch("/api/recipes")
      .then(r => r.json())
      .then(setRecipes);
  }, []);

  const _saveRecipe = recipe => {
    return fetch(`/api/recipes/${recipe.id}`, {
      method: 'PATCH',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      setRecipes([ ...recipes.filter(r => r.id !== recipe.id), recipe ]);
    });
  }

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
                <Route path={"edit/:id"} element={<EditDish recipes={recipes} onSave={_saveRecipe} />} />
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
