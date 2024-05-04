import { useMemo } from "react";

import { Card } from "antd";

import cardImg from "./cardImg.webp";

import "./BooksForDaysCrate.css";

const { Meta } = Card;

const BooksForDaysCrate = () => {
  const books = useMemo(
    () => ["29,600.00", "29,600.00", "29,600.00", "29,600.00", "29,600.00"],
    []
  );
  return (
    <div className="books-for-days-crate">
      <p className="books-for-days-crate-title">Books For Days Crate</p>
      <div className="books-block">
        {books.map((book, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 214 }}
            cover={<img alt="example" src={cardImg} />}
          >
            <Meta
              title={
                <a href="https://youtube.com" target="_blank" className="link">
                  Legacy of Gods PRE-ORDER: God of Wrath & God of Ruin
                </a>
              }
              description={`From ${book} AMD`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BooksForDaysCrate;
