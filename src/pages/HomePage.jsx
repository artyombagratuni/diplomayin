import ArtPrints from "../components/Home/components/ArtPrints";
import BooksForDaysCrate from "../components/Home/components/BooksForDaysCrate";
import DustJackets from "../components/Home/components/DustJackets";
import PageOverlaySets from "../components/Home/components/PageOverlaySets";

const HomePage = ({ books }) => (
  <div style={{ paddingTop: 215 }}>
    <BooksForDaysCrate
      books={books.filter((book) => book.type === "books-for-days-crate")}
    />
    <PageOverlaySets
      books={books.filter((book) => book.type === "page-overlay-sets")}
    />
    <DustJackets books={books.filter((book) => book.type === "dust-jackets")} />
    <ArtPrints books={books.filter((book) => book.type === "art-prints")} />
  </div>
);

export default HomePage;
