import {render} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import SingleDish from "./SingleDish"

describe("SingleDish tests", () => {

  const createRouter = (recipes, recipeId) => {
    const routes = [
      {
        path: "/menu/:id",
        element: <SingleDish recipes={recipes} />,
      },
    ];
    return createMemoryRouter(routes, {
      initialEntries: [`/menu/${recipeId}`],
      initialIndex: 0,
    });
  }

  it("should display the asked recipe", () => {
    // Given
    const recipes = [
      { id: 1, name: "My Recipe", instructions: "N/A", tags: [] }
    ]
    const router = createRouter(recipes, 1)

    // When
    const {getByText} = render(
      <RouterProvider router={router}/>
    )

    // Then
    expect(getByText(/My Recipe/i)).toBeInTheDocument()
  })
})