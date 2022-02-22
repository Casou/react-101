export const fetchRecipes = () => {
  return fetch("/api/recipes")
    .then(r => r.json())
    .then(recipes => {
      return {
        type: "SET_RECIPES",
        payload: recipes
      }
    })
}

export const updateRecipe = recipe => {
  return fetch(`/api/recipes/${recipe.id}`, {
    method: 'PATCH',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    return {
      type: "UPDATE_RECIPE",
      payload: recipe
    }
  });
}

