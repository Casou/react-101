import React, {useEffect, useState} from "react";
import {Navigate, Routes, Route} from "react-router-dom";
import "./App.css"
import AppBar from "./common/components/AppBar";
import Loader from "./common/components/Loader";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import RandomDish from "./pages/RandomDish";
import EditDish from "./pages/EditDish";
import useFetch, {FetchStatus} from "./common/hooks/useFetch";

function App() {
  const {status, data, errorMessage} = useFetch("/api/recipes")
  const [recipes, setRecipes] = useState(data || []);

  useEffect(() => {
    setRecipes(data || [])
  }, [data]);

  const _saveRecipe = recipe => {
    return fetch(`/api/recipes/${recipe.id}`, {
      method: 'PATCH',
      body: JSON.stringify(recipe),
      headers: {'Content-Type': 'application/json'}
    }).then(() => {
      setRecipes([...recipes.filter(r => r.id !== recipe.id), recipe]);
    });
  }

  return (
    <div className="App">
      <header>
        <AppBar/>
      </header>
      <main>
        {
          status === FetchStatus.PENDING ?
            <Loader/>
            : status === FetchStatus.ERROR ?
              <p>{errorMessage}</p> :
              <Routes>
                <Route path={"/menu"}>
                  <Route index element={<Menu recipes={recipes}/>}/>
                  <Route path={":id"} element={<SingleDish recipes={recipes}/>}/>
                  <Route path={"edit/:id"} element={<EditDish recipes={recipes} onSave={_saveRecipe}/>}/>
                </Route>
                <Route path={"/random"} element={<RandomDish recipes={recipes}/>}/>

                <Route path="*" element={<Navigate to="/menu" replace/>}/>
              </Routes>
        }
      </main>
    </div>
  )
}

export default App
