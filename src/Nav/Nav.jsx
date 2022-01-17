import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {

  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <nav>
      <div className="nav-title">
        Shrey.Games
      </div>
      <div className="nav-buttons">
        <Link to="/blobs">theBLOBS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/account">ACCOUNT</Link>
      </div>
    </nav>
  )
}

export default Nav;