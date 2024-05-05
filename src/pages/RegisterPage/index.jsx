import { Button, Input, Form } from "antd";

import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(response.data);
      navigate("/account/login");
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-page">
        <div className="register-title">Register</div>
        <Form
          name="register-form"
          form={form}
          layout="horizontal"
          onFinish={handleSubmit}
          validateMessages={validateMessages}
          className="register-form"
        >
          <Form.Item name="name" style={{ width: "100%" }}>
            <Input placeholder="Name" size="large" />
          </Form.Item>
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
            <Button type="primary" size="large" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
