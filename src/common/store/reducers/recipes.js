const recipes = (currentState = [], action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return action.payload;
    case "UPDATE_RECIPE":
      const updatedRecipe = action.payload;
      return [ ...currentState.filter(r => r.id !== updatedRecipe.id), updatedRecipe ];
    default:
      return currentState;
  }
}

export default recipes;
