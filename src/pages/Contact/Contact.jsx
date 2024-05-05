import { Form, Input, Button } from "antd";

import "./Contact.css";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const ContactPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    form.resetFields();
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-title">Contact & Shipping Updates</div>
        <div className="contact-us-title">Contact Us</div>

        <Form
          name="contact-form"
          form={form}
          layout="horizontal"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="contact-form"
        >
          <div style={{ display: "flex", columnGap: 20, width: "100%" }}>
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
              <Input placeholder="Email *" size="large" />
            </Form.Item>
          </div>
          <Form.Item name="phone">
            <Input placeholder="Phone number" size="large" />
          </Form.Item>
          <Form.Item name="comment">
            <Input.TextArea placeholder="Comment" size="large" autoSize />
          </Form.Item>
          <Form.Item style={{ width: "20%" }}>
            <Button type="primary" size="large" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div>
          <div className="contact-us-title">Shipping Updates</div>
          <p className="shipping-updates">
            Monster Series Omnibus - we have a slight delay on this. Our last
            item was supposed to be here at the end of last week, but it has
            been delayed a week. We will start shipping the first week of April
            as long as everything is here.
          </p>
          <br />
          <p className="shipping-updates">
            Lux and Sea of Ruin Leftover Stock Sale - these will ship out within
            4 weeks of the sale date. All books will be shipped by April 5th.
          </p>
          <br />
          <p className="shipping-updates">
            Heartstone Series - estimated to ship in April.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
