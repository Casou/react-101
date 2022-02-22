const recipes = (currentState = [], action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return action.payload;
    default:
      return currentState;
  }
}

export default recipes;
