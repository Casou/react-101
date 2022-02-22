import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import "./App.css"
import AppBar from "./common/components/AppBar";
import Loader from "./common/components/Loader";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import RandomDish from "./pages/RandomDish";
import EditDish from "./pages/EditDish";
import {connect} from "react-redux";
import * as RecipeActions from "./common/actions/recipeActions";
import {bindActionCreators} from "redux";

function App({recipes, recipeActions}) {

  useEffect(() => {
    recipeActions.fetchRecipes();
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
                <Route path={"edit/:id"} element={<EditDish recipes={recipes} onSave={recipeActions.updateRecipe}/>}/>
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

const mapDispatchToProps = dispatch => ({
  recipeActions: bindActionCreators(RecipeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
