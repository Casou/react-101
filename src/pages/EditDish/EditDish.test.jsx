import {render} from "@testing-library/react";
import EditDish from "./EditDish";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import userEvent from "@testing-library/user-event"

const mockedUsedNavigate = vitest.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));

describe("EditDish tests", () => {

  afterEach(() => {
    vi.clearAllMocks()
  })

  const createRouter = (recipes, recipeId, onSaveCb) => {
    const routes = [
      {
        path: "/edit/:id",
        element: <EditDish recipes={recipes} onSave={onSaveCb}/>,
      },
    ];
    return createMemoryRouter(routes, {
      initialEntries: [`/edit/${recipeId}`],
      initialIndex: 0,
    });
  }

  it("should return 'Not found' if the recipe is not found", () => {
      // Given
      const recipes = []
      const router = createRouter(recipes, 1)

      // When
      const {getByText} = render(
        <RouterProvider router={router}/>
      )

      // Then
      expect(getByText(/Recipe not found/i)).toBeInTheDocument()
    }
  )

  it("should have an input for name, category, video and thumbnail properties", () => {
      // Given
      const recipes = [{
        id: 1,
        instructions: "N/A",
        tags: [],
        name: "Recipe name",
        category: "Recipe category",
        video: "http://www.recipe-video.mp4",
        thumbnail: "http://www.recipe-thumbnail.jpg",
      }]
      const router = createRouter(recipes, 1)

      // When
      const {getByRole} = render(
        <RouterProvider router={router}/>
      )

      // Then
      expect(getByRole("textbox", {name: "Name:"})).toHaveValue("Recipe name")
      expect(getByRole("textbox", {name: "Category:"})).toHaveValue("Recipe category")
      expect(getByRole("textbox", {name: "Thumbnail:"})).toHaveValue("http://www.recipe-thumbnail.jpg")
      expect(getByRole("textbox", {name: "Video:"})).toHaveValue("http://www.recipe-video.mp4")
    }
  )

  it("should call the onSave function with the new values and navigate to '/' when clicking on the 'save' button", async () => {
      // Given
      const onSaveCb = vi.fn(() => Promise.resolve())
      let recipe1 = {
        id: 1,
        instructions: "N/A",
        tags: [],
        name: "Recipe name",
        category: "Recipe category",
        video: "http://www.recipe-video.mp4",
        thumbnail: "http://www.recipe-thumbnail.jpg",
      };
      const recipes = [recipe1]
      const router = createRouter(recipes, 1, onSaveCb)

      const {getByRole} = render(
        <RouterProvider router={router}/>
      )

      // When
      await userEvent.clear(getByRole("textbox", {name: "Name:"}))
      await userEvent.type(getByRole("textbox", {name: "Name:"}), "New name")
      await userEvent.click(getByRole("button"))

      // Then
      expect(onSaveCb).toHaveBeenCalledWith({
        ...recipe1,
        name: "New name"
      })
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/")
    }
  )

  it("should not navigate to '/' if the onSaveCb fail", async () => {
      // Given
      const onSaveCb = vi.fn(() => Promise.reject())
      let recipe1 = {
        id: 1,
        instructions: "N/A",
        tags: [],
        name: "Recipe name",
        category: "Recipe category",
        video: "http://www.recipe-video.mp4",
        thumbnail: "http://www.recipe-thumbnail.jpg",
      };
      const recipes = [recipe1]
      const router = createRouter(recipes, 1, onSaveCb)

      const {getByRole} = render(
        <RouterProvider router={router}/>
      )

      // When
      await userEvent.click(getByRole("button"))

      // Then
      expect(onSaveCb).toHaveBeenCalled()
      expect(mockedUsedNavigate).not.toHaveBeenCalled()
    }
  )

})