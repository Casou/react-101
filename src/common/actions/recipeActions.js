export const fetchRecipes = (dispatch) => {
  fetch("/api/recipes")
    .then(r => r.json())
    .then(recipes => {
      dispatch({
        type: "SET_RECIPES",
        payload: recipes
      })
    })
}
