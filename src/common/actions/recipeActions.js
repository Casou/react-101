export const fetchRecipes = () => dispatch => {
  return fetch("/api/recipes")
    .then(r => r.json())
    .then(recipes => {
      dispatch({
        type: "SET_RECIPES",
        payload: recipes
      });

      return recipes;
    })
}

export const updateRecipe = recipe => dispatch => {
  return fetch(`/api/recipes/${recipe.id}`, {
    method: 'PATCH',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    dispatch({
      type: "UPDATE_RECIPE",
      payload: recipe
    });

    return recipe;
  });
}

