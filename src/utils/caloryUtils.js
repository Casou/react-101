const TOTALLY_RANDOM_COEFF = 2.5

const calculateCalories = (recipe) => {
  return Math.round(recipe.instructions.length * TOTALLY_RANDOM_COEFF)
}

export default {
  calculateCalories
}
