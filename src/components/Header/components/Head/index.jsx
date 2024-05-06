import { useNavigate } from "react-router-dom";

import { Input, Space, Tooltip } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import logo from "../../images/logo.avif";

import "./Head.css";

const Head = () => {
  const navigate = useNavigate();

  return (
    <Space direction="horizontal" className="head">
      <Input.Search />
      <img
        src={logo}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <div className="currency-login">
        <Tooltip title="Sign In">
          <UserOutlined className="icon" />
        </Tooltip>
        <Tooltip title="Cart">
          <ShoppingCartOutlined
            className="icon"
            onClick={() => navigate("/cart")}
          />
        </Tooltip>
      </div>
    </Space>
  );
};

export default Head;
