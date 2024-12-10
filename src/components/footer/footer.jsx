import React from "react";
import Quoteform from "../formdesign/quoteform";
import "./footer.css";
import footerhouse from "../../images/footerhouse.png";
// import flogo from "../../images/footelogo.png";
import flogo from "../../images/footelogo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

import { TiMessage } from "react-icons/ti";
import fb from "../../images/footer/fb.png";
import insta from "../../images/footer/insta.png";
import tw from "../../images/footer/tw.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footertop-col ftopcol1">
          <img src={footerhouse} alt="" />
        </div>
        <div className="footertop-col ftopcol2">
          <Quoteform />
        </div>
      </div>
      <div className="footermid"></div>
      <div className="hrlinefooter">
        <hr></hr>
      </div>
      <div className="footer-bottom">
        {/* col1 */}
        <div className="footer-bottom-col col1">
          <div className="logo flogo">
            <Link to='/' className="logo-link"><img src={flogo} alt="Logo" /></Link>
          </div>
          <p>
          Cedar Interiors, headquartered in Palakkad, Kerala, specializes in crafting premium, customized furniture and interior solutions for homes, offices, and institutions.
          </p>
          <p>We cater to both commercial and residential projects, offering turn-key solutions for hotels, offices, and schools. With cutting-edge infrastructure and a commitment to sustainability, our designs are energy-efficient and eco-friendly.</p>
        </div>
        {/* col2 */}
        <div className="footer-bottom-col col2">
          <h6>Our Services</h6>
          <ul>
            <li><Link to="/home-interiors">Home Interiors</Link></li>
            <li> <Link to="/2bhk-3bhk-interior-packages">2 & 3 BHK Interior Packages</Link></li>
            <li><Link to="/living-room-interiors">Living Room Interiors</Link></li>
            <li><Link to="/modular-kitchens">Modular Kitchens</Link></li>
            <li><Link to="/bedroom-interiors">Bedroom Interiors</Link></li>
            <li><Link to="/dining-room-interiors">Dining Room Interiors</Link></li>
            <li><Link to="/kids-room-interiors">Kids Room Interiors</Link></li>
            <li><Link to="/office-interiors">Office Interiors</Link></li>
            <li><Link to="/custom-interior-units">Custom Interior Units</Link></li>
          </ul>
        </div>
        {/* col3 */}
        <div className="footer-bottom-col col3">
          <h6>CONTACT</h6>
          <div className="blurb">
            <i>{<IoLocationOutline />}</i>
            <p>Robinson Road, Emmar Plaza, Palakkad, Kerala - 678001
            </p>
          </div>
          <div className="blurb">
            <i>{<MdPhone />}</i>
            <p>+91 7907330407</p>
          </div>
          <div className="blurb">
            <i>{<TiMessage />}</i>
            <p>contact@cedarinteriors.in</p>
          </div>
        </div>
        {/* col4 */}
        <div className="footer-bottom-col col4">
          <h6>FOLLOW US ON!</h6>
          <div className="social-icons">
            <img src={insta} alt="insa" />
            <img src={fb} alt="insa" />
            <img src={tw} alt="insa" />
          </div>
          <h4>STAY TUNED!</h4>
          <form>
            <input
              type="text"
              placeholder="Enter your mail"
              className="subscribe"
            />
            <button>CONNECT</button>
          </form>
        </div>
      </div>
      <div className="secondryfooter">
        <div className="copyright">
          <p>© 2024 . All Rights Reserved</p>
        </div>
        <div className="company">
          <p>Website by <Link to="https://internetspartans.com/">Spartan Technologies</Link></p>
        </div>
        <div className="privacyterms">
          <p><Link to='/privacypolicy'>Privacy Policy</Link> | <Link to=''>Terms & Condition</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;