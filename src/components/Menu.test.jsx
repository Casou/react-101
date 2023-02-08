import {render} from "@testing-library/react"
import Menu from "./Menu"

describe("Menu tests", () => {
  it("should display 84 cards", () => {
      const {getAllByRole} = render(
        <Menu />
      )
      const allThumbnail = getAllByRole("img")
      expect(allThumbnail).toHaveLength(84)
    }
  )
})
