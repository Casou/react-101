import {render} from "@testing-library/react";
import Menu from "./Menu";
import userEvent from "@testing-library/user-event";

const expectDialogToBeVisible = (container, shouldBeVisible) => {
  if (shouldBeVisible) {
    expect(container.querySelector("#modal1").className.split(" ")).toContain("modal__open")
  } else {
    expect(container.querySelector("#modal1").className.split(" ")).not.toContain("modal__open")
  }
}

describe("Menu tests", () => {

  it("should display (apply css class) RecipeDialog when clicking on a card", async () => {
      // Given
      const recipes = [
        {instructions: "N/A", tags: [] },
      ]

      const {container} = render(
        <Menu recipes={recipes}/>
      )

      // When
      await userEvent.click(container.querySelector(".card"))

      // Then
      // The CSS modules are not applied
      // expect(container.querySelector("#modal1")).toBeVisible()
      expectDialogToBeVisible(container, true)
    }
  )

  it("should hide RecipeDialog when clicking on the 'Close' button", async () => {
      // Given
      const recipes = [
        {instructions: "N/A", tags: [] },
      ]

      const {container, getByRole, debug} = render(
        <Menu recipes={recipes}/>
      )
      await userEvent.click(container.querySelector(".card"))

      // When
      await userEvent.click(getByRole("button", {name: "Close"}))


      // Then
      // The CSS modules are not applied
      // expect(container.querySelector("#modal1")).not.toBeVisible()
      expectDialogToBeVisible(container, false)
    }
  )

})