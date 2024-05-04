import MenuHeader from "./components/Menu";

import Head from "./components/Head";
import "./Header.css";

const WebHeader = () => (
  <div className="header">
    <Head />
    <MenuHeader />
  </div>
);

export default WebHeader;
