import { Link, useLocation } from "react-router-dom";
import {
  FaDiscord,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
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
        <a
          className="discord"
          href="https://discord.gg/Xe7bzpBZ"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={25} />
        </a>
        <a
          className="tiktok"
          href="https://vm.tiktok.com/ZMLe9cony/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok size={25} />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/the_blobs_NFT"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={25} />
        </a>
        {/* <a href="https://discord.gg/Xe7bzpBZ" target="_blank">
        rel="noreferrer"
          <FaTwitch size={25} />
        </a> */}
        <a
          className="youtube"
          href="https://www.youtube.com/channel/UCA9GZSixmruDvonbVlwQ5wA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={25} />
        </a>
      </div>
    </nav>
  )
}

export default Nav;