import { Button, Input, Form } from "antd";

import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const LoginPage = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      navigate("/");
      console.log(data);
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <div className="login-title">Login</div>
        <Form
          name="login-form"
          form={form}
          layout="horizontal"
          onFinish={handleSubmit}
          validateMessages={validateMessages}
          className="login-form"
        >
          {/* <Form.Item name="name" style={{ width: "100%" }}>
          <Input placeholder="Name" size="large" />
        </Form.Item> */}
          <Form.Item
            style={{ width: "100%" }}
            name="email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name="password"
            rules={[
              {
                type: "password",
                required: true,
              },
            ]}
          >
            <Input placeholder="Password" size="large" type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="medium" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <div
          className="create-account-link"
          onClick={() => navigate("/account/register")}
        >
          Create account
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
