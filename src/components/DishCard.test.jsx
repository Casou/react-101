import {render} from "@testing-library/react"
import DishCard from "./DishCard"

describe("DishCard tests", () => {

  it("should display a video link if the recipe has one", () => {
    const recipe = {
      instructions: "N/A",
      tags: [],
      video: "http://www.my-link.com"
    }
    const {getByText} = render(
        <DishCard recipe={recipe} />
      )
      const link = getByText(/Video/)
      expect(link).toHaveAttribute("href", "http://www.my-link.com")
    }
  )

})