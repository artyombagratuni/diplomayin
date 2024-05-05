import { useNavigate } from "react-router-dom";

import { Input, Space, Select, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";

import logo from "../../images/logo.avif";

import "./Head.css";

const Head = () => {
  const navigate = useNavigate();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <Space direction="horizontal" className="head">
      <Input.Search />
      <img
        src={logo}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <div className="currency-login">
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          defaultValue="dram"
          options={[
            {
              value: "dram",
              label: "AMD ֏ | Armenia",
            },
            {
              value: "dollar",
              label: "USD $ | United States",
            },
            {
              value: "euro",
              label: "EURO € | France",
            },
          ]}
        />
        <Tooltip title="Sign In">
          <UserOutlined
            className="login-icon"
            onClick={() => navigate("/account/login")}
          />
        </Tooltip>
      </div>
    </Space>
  );
};

export default Head;
