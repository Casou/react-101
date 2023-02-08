import {render} from "@testing-library/react";
import Menu from "./Menu";
import userEvent from "@testing-library/user-event";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

const expectDialogToBeVisible = (container, shouldBeVisible) => {
  if (shouldBeVisible) {
    expect(container.querySelector("#modal1").className.split(" ")).toContain("modal__open")
  } else {
    expect(container.querySelector("#modal1").className.split(" ")).not.toContain("modal__open")
  }
}

describe("Menu tests", () => {

  const createRouter = (recipes) => {
    const routes = [
      {
        path: "/menu",
        element: <Menu recipes={recipes}/>,
      },
    ];
    return createMemoryRouter(routes, {
      initialEntries: ["/menu"],
      initialIndex: 0,
    });
  }


  it("should display one card by recipe", () => {
      // Given
      const recipes = [
        {id: 1, name: "My Recipe", instructions: "N/A", tags: []},
        {id: 2, name: "My second recipe", instructions: "N/A", tags: []},
      ]
      const router = createRouter(recipes)

      // When
      const {getAllByRole} = render(
        <RouterProvider router={router}/>
      )

      // Then
      const allThumbnail = getAllByRole("img")
      expect(allThumbnail).toHaveLength(2)
    }
  )

  it("should display (apply css class) RecipeDialog when clicking on a card", async () => {
      // Given
      const recipes = [
        {instructions: "N/A", tags: []},
      ]
      const router = createRouter(recipes)

      const {container} = render(
        <RouterProvider router={router}/>
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
        {instructions: "N/A", tags: []},
      ]
      const router = createRouter(recipes)

      const {container, getByRole, debug} = render(
        <RouterProvider router={router}/>
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