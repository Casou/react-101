import {render} from "@testing-library/react";
import RandomDish from "./RandomDish";
import userEvent from "@testing-library/user-event";

describe("Random Dish tests", () => {

  it("should display another recipe when clicking on the 'Next' button", async () => {
      // Given
      const recipes = []
      for (let i = 0; i < 1000; i++) {
        recipes.push({
          id: i,
          name: `Index ${ i }`,
          instructions: "N/A",
          tags: []
        })
      }

      const {container, getByRole} = render(
        <RandomDish recipes={recipes}/>
      )
      const firstRecipeName = container.querySelector(".card-title").textContent

      // When
      await userEvent.click(getByRole("button"))
      const secondRecipeName = container.querySelector(".card-title").textContent

      // Then
      expect(firstRecipeName).not.toEqual(secondRecipeName)
    }
  )

})