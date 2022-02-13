import AppBar from "./components/AppBar";

import "./App.css"
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
          <Outlet />

          {/*Second solution : with the nested routes inside the child component*/}
          {/*<Routes>*/}
          {/*    <Route path={"/menu"} element={<Menu />} />*/}
          {/*    <Route path={"/random"} element={<RandomDish />} />*/}
          {/*</Routes>*/}
      </main>
    </div>
  )
}

export default App
