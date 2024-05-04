// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksForDaysCrate from "./components/Home/components/BooksForDaysCrate";
import PageOverlaySets from "./components/Home/components/PageOverlaySets";

function App() {
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
      <div style={{ paddingTop: 215 }}>
        <BooksForDaysCrate />
        <PageOverlaySets />
        <Footer />
      </div>
    </div>
  );
}

export default App;
