import Footer from "../components/Footer";
import ArtPrints from "../components/Home/components/ArtPrints";
import BooksForDaysCrate from "../components/Home/components/BooksForDaysCrate";
import DustJackets from "../components/Home/components/DustJackets";
import PageOverlaySets from "../components/Home/components/PageOverlaySets";
import Apparel from "../components/Home/components/Apparel";

const HomePage = () => (
  <div style={{ paddingTop: 215 }}>
    <BooksForDaysCrate />
    <PageOverlaySets />
    <DustJackets />
    <ArtPrints />
    <Apparel />
    <Footer />
  </div>
);

export default HomePage;
