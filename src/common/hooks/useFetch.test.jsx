import useFetch from "./useFetch";
import {render} from "@testing-library/react";

const UseFetchTestComponent = () => {
  const {status, data, errorMessage} = useFetch("/mocked/api")

  return (
    <div>
      <p data-testid="status">{ status }</p>
      <p data-testid="data">{ data ? JSON.stringify(data) : "null" }</p>
      <p data-testid="errorMessage">{ errorMessage }</p>
    </div>
  )
}

const createOKFetchResponse = data => ({ok: true, json: () => new Promise((resolve) => resolve(data))});
const createKOFetchResponse = statusText => ({ok: false, statusText });

global.fetch = vi.fn()


describe("useFetch tests", () => {
  it("should return PENDING status and null data by default", () => {
    const {getByTestId} = render(<UseFetchTestComponent />)

    expect(getByTestId("status")).toHaveTextContent("PENDING")
    expect(getByTestId("data")).toHaveTextContent("null")
    expect(getByTestId("errorMessage")).toHaveTextContent("")
  })

  it("should update to SUCCESS status and display data if fetch is successful", async () => {
    fetch.mockResolvedValue(createOKFetchResponse([{ id: 1 }]))
    const {findByText, getByTestId, container} = render(<UseFetchTestComponent />)

    expect(await findByText(/SUCCESS/i, container, { timeout: 3000 })).toBeInTheDocument()
    expect(getByTestId("data")).toHaveTextContent("[{\"id\":1}]")
    expect(getByTestId("errorMessage")).toHaveTextContent("")
  })

  it("should update to ERROR status and display error message if fetch is failed", async () => {
    fetch.mockResolvedValue(createKOFetchResponse("Some error"))
    const {findByText, getByTestId, container} = render(<UseFetchTestComponent />)

    expect(await findByText(/ERROR/, container, { timeout: 3000 })).toBeInTheDocument()
    expect(getByTestId("data")).toHaveTextContent("null")
    expect(getByTestId("errorMessage")).toHaveTextContent("Some error")
  })
})