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
import Body from "./common/components/Body";

function App({recipeActions}) {

  useEffect(() => {
    recipeActions.fetchRecipes();
  }, []);

  return (
    <div className="App">
      <header>
        <AppBar/>
      </header>
      <main>
        <Body />
      </main>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  recipeActions: bindActionCreators(RecipeActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(App)
