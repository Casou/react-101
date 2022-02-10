import './AppBar.css'

const AppBar = () => {
  return (
    <nav>
      <div className="nav-wrapper HeaderBar">
        <img src="/images/logo.png" alt="The Food Company"/>
        <div className="HeaderBar__companyName">
          <p className="HeaderBar__companyName--title">The Food Company</p>
          <p className="HeaderBar__companyName--slogan">La bouffe, c'est ouf !</p>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;