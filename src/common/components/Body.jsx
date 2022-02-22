import React from 'react';
import PropTypes from 'prop-types';
import {Navigate, Route, Routes} from "react-router-dom";
import Menu from "@/pages/Menu";
import SingleDish from "@/pages/SingleDish";
import EditDish from "@/pages/EditDish";
import RandomDish from "@/pages/RandomDish";
import DishType from "@/types/DishType";
import {bindActionCreators} from "redux";
import * as RecipeActions from "../actions/recipeActions";
import {connect} from "react-redux";
import withLoading from "@/common/hoc/withLoading";

const Body = ({ recipes, recipeActions }) => {
  return (
    <Routes>
      <Route path={"/menu"}>
        <Route index element={<Menu recipes={recipes}/>}/>
        <Route path={":id"} element={<SingleDish recipes={recipes}/>}/>
        <Route path={"edit/:id"} element={<EditDish recipes={recipes} onSave={recipeActions.updateRecipe}/>}/>
      </Route>
      <Route path={"/random"} element={<RandomDish recipes={recipes}/>}/>

      <Route path="*" element={<Navigate to="/menu" replace/>}/>
    </Routes>
  )
};

const mapStateToProps = (store) => ({
  recipes: store.recipes,
});

const mapDispatchToProps = dispatch => ({
  recipeActions: bindActionCreators(RecipeActions, dispatch)
})

Body.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired,
  recipeActions: PropTypes.object.isRequired,
};
Body.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withLoading(Body));