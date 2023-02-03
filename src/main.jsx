import App from "./App"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./common/store"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<App/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
)
