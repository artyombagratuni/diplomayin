import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import "./BooksList.css";

const { Meta } = Card;

const BookList = ({ title, books }) => {
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="books-list-container">
      <div className="books-list">
        <p className="books-list-title">{title}</p>
        <div className="books-block">
          {books.slice(0, showAll ? books.length : 5).map((book, index) => (
            <Card
              key={index}
              hoverable
              className="card"
              onClick={() =>
                navigate(
                  book.title
                    .split(" ")
                    .map((word) => word.toLowerCase())
                    .join("-")
                )
              }
              cover={
                <img alt="example" src={book.imageUrl} className="cardImage" />
              }
            >
              <Meta
                title={
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    className="link"
                  >
                    {book.title}
                  </a>
                }
                description={`From ${book.price} AMD`}
              />
            </Card>
          ))}
        </div>
      </div>
      {books.length > 4 && (
        <button onClick={toggleShowAll} className="showAllButton">
          {showAll ? "Hide All" : "View All"}
        </button>
      )}
    </div>
  );
};

export default BookList;
