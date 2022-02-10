import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

const DISH = {
  name: "Apple Frangipane Tart",
  people: 6,
  link: "https://www.baking-sense.com/2017/10/31/apple-frangipan-tart/"
};

function App() {
  return (
    <div className="App">
      <AppBar />
      <Menu />
    </div>
  )
}

export default App
