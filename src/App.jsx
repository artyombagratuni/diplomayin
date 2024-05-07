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
import Cart from "./pages/Cart/Cart";

import { BOOKS } from "./components/Home/components/mockData";

function App() {

  const [selectedBooks, setSelectedBooks] = useState([]);

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
          <Route index element={<HomePage books={BOOKS} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account/login" element={<LoginPage />} />
          <Route path="account/register" element={<RegisterPage />} />
          {BOOKS.map((book) => (
            <Route
              key={book.title}
              path={book.title
                .split(" ")
                .map((word) => word.toLowerCase())
                .join("-")}
              element={
                <SelectedBook book={book} setSelectedBooks={setSelectedBooks} />
              }
            />
          ))}
          <Route path="cart" element={<Cart selectedBooks={selectedBooks} />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
