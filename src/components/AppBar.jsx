import './AppBar.css'
import Clock from "./Clock";
import {NavLink} from "react-router-dom";

const AppBar = () => {
  return (
    <nav>
      <div className="nav-wrapper HeaderBar">
        <img src="/images/logo.png" alt="The Food Company"/>
        <div className="HeaderBar__companyName">
          <p className="HeaderBar__companyName--title">The Food Company</p>
          <p className="HeaderBar__companyName--slogan">Food is good !</p>
        </div>

        <ul id={"header__navigationLinks"}>
          <li><NavLink to={"/menu"} className={({isActive}) => isActive && "selected"}>Menu</NavLink></li>
          <li><NavLink to={"/random"} className={({isActive}) => isActive && "selected"}>Random dish</NavLink></li>
        </ul>

        <div className="HeaderBar__clock">
          <Clock />
        </div>
      </div>
    </nav>
  );
};

export default AppBar;