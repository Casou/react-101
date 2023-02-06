import {render as DOMRender} from "@testing-library/react"
import snapshotRenderer from "react-test-renderer"
import VideoLink from "./components/VideoLink";

describe("Dish tests", () => {
  describe("VideoLink tests", () => {

    it("should match snapshot", () => {
      const component = snapshotRenderer.create(
        <VideoLink link="http://www.my-link.com"/>,
      )
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    })

    it("should match display a link with 'Video' label if a link is passed", () => {
        const {getByText} = DOMRender(
          <VideoLink link="http://www.my-link.com"/>
        )
        const link = getByText(/Video/)
        expect(link).toHaveAttribute("href", "http://www.my-link.com")
      }
    )

    it("should match display 'soon...' with no link if no link is passed", () => {
        const {queryByText, queryByRole, getByText} = DOMRender(
          <VideoLink link=""/>
        )

        expect(queryByText(/Video/)).not.toBeInTheDocument()
        expect(() => getByText(/Video/)).toThrow() // Equivalent

        expect(queryByRole("a")).not.toBeInTheDocument()

        expect(getByText(/soon/)).toBeTruthy()
      }
    )
  })
})