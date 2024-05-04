import FooterContentTop from "./components/FooterContentTop";
import FooterNewsLetter from "./components/FooterNewsLetter";
import FooterContentBottom from "./components/FooterContentBottom";

import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <FooterContentTop />
    <FooterNewsLetter />
    <FooterContentBottom />
  </div>
);

export default Footer;
