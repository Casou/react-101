import "./Menu.css"

const Menu = ({ message }) => {
  return (
    <main className="menu">
      Insérez le message passé en props : { message }
    </main>
  )
}

export default Menu;