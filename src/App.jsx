import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/About";
import SelectedBook from "./pages/SelectedBook/SelectedBook";
import ContactPage from "./pages/Contact/Contact";
import MenuHeader from "./components/Header/components/Menu";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<MenuHeader />}>
          <Route index element={<HomePage books={books} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account/login" element={<LoginPage />} />
          <Route path="account/register" element={<RegisterPage />} />
          {books.map((book) => (
            <Route
              key={book.title}
              path={book.title
                .split(" ")
                .map((word) => word.toLowerCase())
                .join("-")}
              element={<SelectedBook book={book} />}
            />
          ))}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
