import {render} from "@testing-library/react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import SingleDish from "./SingleDish"

describe("SingleDish tests", () => {

  const createRouter = (recipeId) => {
    const routes = [
      {
        path: "/menu/:id",
        element: <SingleDish/>,
      },
    ];
    return createMemoryRouter(routes, {
      initialEntries: [`/menu/${recipeId}`],
      initialIndex: 0,
    });
  }

  it("should display the asked recipe", () => {
    // Given
    const router = createRouter(52976)

    // When
    const {getByText} = render(
      <RouterProvider router={router}/>
    )

    // Then
    expect(getByText(/Cashew Ghoriba Biscuits/i)).toBeInTheDocument()
  })
})