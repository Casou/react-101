import {render} from "@testing-library/react"
import Menu from "./Menu"

describe("Menu tests", () => {
  it("should display one card by recipe", () => {
    // Given
    const recipes = [
      { id: 1, name: "My Recipe", instructions: "N/A", tags: [] },
      { id: 2, name: "My second recipe", instructions: "N/A", tags: [] },
    ]

    // When
      const {getAllByRole} = render(
        <Menu recipes={recipes} />
      )

    // Then
      const allThumbnail = getAllByRole("img")
      expect(allThumbnail).toHaveLength(2)
    }
  )
})