import { useState } from "react";
import { Menu } from "antd";

import { menuConfig } from "./config";

import "./Menu.css";

const MenuHeader = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      className="menu-header"
      style={{
        background: "transparent",
        padding: 5,
        lineHeight: "30px",
        borderBottom: "none",
      }}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuConfig}
    />
  );
};
export default MenuHeader;
