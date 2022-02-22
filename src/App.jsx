import React, {useEffect, useState} from "react";
import {Navigate, Routes, Route} from "react-router-dom";
import "./App.css"
import AppBar from "./common/components/AppBar";
import Loader from "./common/components/Loader";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import RandomDish from "./pages/RandomDish";
import EditDish from "./pages/EditDish";
import {connect} from "react-redux";
import {fetchRecipes, updateRecipe} from "./common/actions/recipeActions";

function App({recipes, loadRecipes, saveRecipe}) {

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div className="App">
      <header>
        <AppBar/>
      </header>
      <main>
        {
          !recipes ?
            <Loader/> :
            <Routes>
              <Route path={"/menu"}>
                <Route index element={<Menu recipes={recipes}/>}/>
                <Route path={":id"} element={<SingleDish recipes={recipes}/>}/>
                <Route path={"edit/:id"} element={<EditDish recipes={recipes} onSave={saveRecipe}/>}/>
              </Route>
              <Route path={"/random"} element={<RandomDish recipes={recipes}/>}/>

              <Route path="*" element={<Navigate to="/menu" replace/>}/>
            </Routes>
        }
      </main>
    </div>
  )
}

const mapStateToProps = (store) => ({
  recipes: store.recipes,
});

const mapDispatchToProps = {
  loadRecipes: fetchRecipes,
  saveRecipe: updateRecipe,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
