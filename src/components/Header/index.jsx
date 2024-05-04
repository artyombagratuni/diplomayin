import MenuHeader from "./components/Menu";

import "./Header.css";
import Head from "./components/Head";

const WebHeader = () => (
  <div className="header">
    <Head />
    <MenuHeader />
  </div>
);

export default WebHeader;
