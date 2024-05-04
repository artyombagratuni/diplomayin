// import { useState } from "react";
import { Input, Button, Form } from "antd";
import {
  HeartOutlined,
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { isEmail } from "validator";

import "./FooterNewsLetter.css";

const FooterNewsLetter = () => {
  const [form] = Form.useForm();

  const onFinish = ({ email }) => {
    if (!isEmail(email)) {
      return console.log("invalid email!");
    }
    console.log(`sended for email ${email}`);
    form.resetFields();
  };

  return (
    <div className="footer-news-letter">
      <div className="subscribe-block">
        <p>Subscribe to our newsletter for the latest updates.</p>
        <Form className="form-block" onFinish={onFinish} form={form}>
          <Form.Item
            name="email"
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" icon={<SendOutlined />}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<HeartOutlined />}
        >
          Follow on shop
        </Button>
      </div>
      <div className="social֊media">
        <FacebookFilled style={{ fontSize: 20 }} />
        <InstagramOutlined style={{ fontSize: 20 }} />
        <TikTokOutlined style={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default FooterNewsLetter;
