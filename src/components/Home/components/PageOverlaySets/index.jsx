import { useMemo } from "react";

import { Card, Button } from "antd";

import cardImg from "./cardImg.webp";

import "./PageOverlaySets.css";

const { Meta } = Card;

const PageOverlaySets = () => {
  const books = useMemo(
    () => ["29,600.00", "29,600.00", "29,600.00", "29,600.00", "29,600.00"],
    []
  );
  return (
    <div className="books-for-days-crate">
      <p className="books-for-days-crate-title">Page Overlay Sets</p>
      <div className="books-block">
        {books.map((book, index) => (
          <div key={index}>
            <Card
              hoverable
              style={{ width: 214 }}
              cover={<img alt="example" src={cardImg} />}
            >
              <Meta
                title={
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    className="link"
                  >
                    Legacy of Gods PRE-ORDER: God of Wrath & God of Ruin
                  </a>
                }
                description={`From ${book} AMD`}
              />
            </Card>
            <div>
              <Button block size="large" className="choose-button">
                Choose options
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageOverlaySets;
