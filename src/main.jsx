import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu"
import RandomDish from "./components/RandomDish"
import SingleDish from "./components/SingleDish"
import App from './App'

import {createRoot} from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}>
        <Route path={"/menu"}>
          <Route index element={<Menu />} />
          <Route path={":id"} element={<SingleDish />} />
        </Route>
        <Route path={"/random"} element={<RandomDish />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
