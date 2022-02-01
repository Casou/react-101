import './AppBar.css'

const AppBar = () => {
  return (
    <header role="banner" className="HeaderBar">
      <img src="/images/logo.png" alt="The Food Company"/>
      <div className="HeaderBar__companyName">
        <p  className="HeaderBar__companyName--title" aria-hidden="true">The Food Company</p>
        <p role="doc-subtitle" className="HeaderBar__companyName--slogan">La bouffe, c'est ouf !</p>
      </div>
    </header>
  );
};

export default AppBar;