import { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Menu } from "antd";

import { menuConfig } from "./config";
import "./Menu.css";

const MenuHeader = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    pathname === "/" ? setCurrent("home") : setCurrent(pathname.slice(1));
  }, [pathname]);

  const handleMenuClick = ({ key }) => {
    const { target } = menuConfig.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  return (
    <>
      <Menu
        onClick={handleMenuClick}
        className="menu-header"
        selectedKeys={[current]}
        defaultSelectedKeys={["/"]}
        mode="horizontal"
        items={menuConfig}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MenuHeader;
