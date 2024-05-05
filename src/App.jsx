import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import MenuHeader from "./components/Header/components/Menu";

function App() {
  return (
    <>
      <Router>
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
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />

              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
            {/* <Route path="login" element={<Login />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
