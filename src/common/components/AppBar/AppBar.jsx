import './AppBar.css'
import {NavLink} from "react-router-dom";
import withClock from "@/common/hoc/withClock";

const AppBar = ({ time }) => {
  return (
    <nav>
      <div className="nav-wrapper HeaderBar">
        <img src="/images/logo.png" alt="The Food Company"/>
        <div className="HeaderBar__companyName">
          <p className="HeaderBar__companyName--title">The Food Company</p>
          <p className="HeaderBar__companyName--slogan">Food is good !</p>
        </div>

        <ul id={"header__navigationLinks"}>
          <li><NavLink to={"/menu"} className={({isActive}) => isActive ? "selected" : ""} end>Menu</NavLink></li>
          <li><NavLink to={"/random"} className={({isActive}) => isActive ? "selected" : ""}>Random dish</NavLink></li>
          <li><NavLink to={"/menu/52976"} className={({isActive}) => isActive ? "selected" : ""}>First dish</NavLink></li>
        </ul>

        <div className="HeaderBar__clock">
          { time }
        </div>
      </div>
    </nav>
  );
};

export default withClock(AppBar);