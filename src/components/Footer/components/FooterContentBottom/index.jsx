import svgs from "./svgs";

import "./FooterContentBottom.css";

const FooterContentBottom = () => (
  <div className="footer-content-bottom">
    <div className="block-svgs">
      {svgs.map((svg) => (
        <div className="svg-item" key={svg.key}>
          {svg}
        </div>
      ))}
    </div>
    <div className="copyright">
      © 2024, Imagine Books Shop Powered by Shopify Refund policy Privacy policy
      Terms of service Contact information
    </div>
  </div>
);

export default FooterContentBottom;
