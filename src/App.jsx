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
      <Menu name={DISH.name}
            people={DISH.people}
            link={DISH.link}
      />

      {/* Autre solution : */}
      <Menu { ...DISH } />
    </div>
  )
}

export default App
