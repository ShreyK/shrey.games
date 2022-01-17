import {
  FaDiscord,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      Coming Soon
      <div className="links">
        <a
          className="discord"
          href="https://discord.gg/Xe7bzpBZ"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={50} />
        </a>
        <a
          className="tiktok"
          href="https://vm.tiktok.com/ZMLe9cony/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok size={50} />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/the_blobs_NFT"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={50} />
        </a>
        {/* <a href="https://discord.gg/Xe7bzpBZ" target="_blank">
        rel="noreferrer"
          <FaTwitch size={50} />
        </a> */}
        <a
          className="youtube"
          href="https://www.youtube.com/channel/UCA9GZSixmruDvonbVlwQ5wA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={50} />
        </a>
      </div>
    </div>
  );
};

export default App;
