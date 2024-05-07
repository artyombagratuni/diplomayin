import { useState } from "react";
import { InputNumber, Space, Button } from "antd";

import "./SelectedBook.css";

const SelectedBook = ({ book, setSelectedBooks }) => {
  const [quantity, setQuantity] = useState(1);

  const onChange = (value) => {
    setQuantity(value);
  };

  return (
    <div className="selected-book-container">
      <div className="selected-book">
        <div className="left-column">
          <img className="book-picture" src={book.imageUrl} />
        </div>
        <div className="right-column">
          <p className="imagine-books-shop">Imagine Books Shop</p>
          <div className="book-title">{book.title}</div>
          <div className="book-price">
            {book.price + "AMD"}
            <span className="sold-out">
              {book.isSelled ? "Sold Out" : "Available"}
            </span>
          </div>
          <div className="quantity">
            Quantity:{" "}
            <Space wrap>
              <InputNumber
                size="large"
                min={1}
                max={100000}
                defaultValue={quantity}
                onChange={onChange}
                className="counter"
                disabled={book.isSelled}
              />
            </Space>
          </div>
          <div className="buttons">
            <Button
              type="primary"
              disabled={book.isSelled}
              block
              className="button"
              onClick={() =>
                setSelectedBooks((prev) => {
                  const previousBook = prev.find(
                    (prevBook) => prevBook.title === book.title
                  );
                  if (previousBook) {
                    return [
                      ...prev.filter((b) => b.title !== previousBook.title),
                      {
                        ...previousBook,
                        quantity: previousBook.quantity + quantity,
                      },
                    ];
                  }
                  return [...prev, { ...book, quantity }];
                })
              }
            >
              Add to Cart
            </Button>
            <Button
              type="primary"
              disabled={book.isSelled}
              block
              className="button"
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedBook;
