import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

const MESSAGE = "Hello, World!";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Menu message={MESSAGE} />
    </div>
  )
}

export default App
