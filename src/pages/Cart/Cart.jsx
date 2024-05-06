import { Table } from "antd";

import { columns, data } from "./config";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="your-cart">Your Cart</div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};
export default Cart;
