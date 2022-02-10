import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

const DISH = {
  name: "Paëlla",
  people: 4,
  link: "https://www.marmiton.org/recettes/recette_paella-fruits-de-mer-chorizo-et-poulet-de-patou_50730.aspx"
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
