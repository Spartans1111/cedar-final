
import React from "react";
import "./design.css";
import img1 from "../../../images/design/design1.png";
import img2 from "../../../images/design/design2.png";
import img3 from "../../../images/design/design3.png";
import img4 from "../../../images/design/design4.png";
import img5 from "../../../images/design/design5.png";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const design = () => {
  return (
    <div className="design">
      <div className="designheader">
        <h2 className="header2">
          Designed <span> for Your Unique Lifestyle</span>
        </h2>
        <p>
        Your space deserves interiors that not only look good but also feel perfect for your everyday life. Cedar Interiors specializes in crafting bespoke designs that solve your interior needs while adding unmatched elegance.
        </p>
      </div>
      <div className="design-grid">
        <div className="grid grid1">
          <img src={img3} alt="design" />
          <div className="design-btn">
            <button className="btn2"><Link to="/living-room-interiors">
              Living Room Interiors<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>
        </div>
        <div className="grid grid2">
          {" "}
          <img src={img4} alt="design" />
          <div className="design-btn">
            <button className="btn2"> <Link to="/modular-kitchens">
              Modular Kitchenss<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>{" "}
        </div>
        <div className="grid grid3">
          {" "}
          <div className="bedroomimg">
            <img src={img5} alt="design" />
            <div className="design-btn">
              <button className="btn2"><Link to="/bedroom-interiors">
              Bedroom Interiors<span>{<GoArrowRight />}</span></Link>
              </button>
            </div>
          </div>
          <div className="designmore">
            <h3>10+</h3>
            <p>Custom Interior Solutions</p> <Link to="/custom-interior-units">
            <span className="designmorearrow">{<GoArrowRight />}</span></Link>
          </div>
        </div>
        <div className="grid grid4">
          {" "}
          <img src={img2} alt="design" />
          <div className="design-btn">
            <button className="btn2">  <Link to="/office-interiors" >
            Office Interiors<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>{" "}
        </div>
        <div className="grid grid5">
          {" "}
          <img src={img1} alt="design" />
          <div className="design-btn">
            <button className="btn2"> <Link to="/dining-room-interiors">
            Dining Room Interiors<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>
        </div>
      </div>


      {/* design grid for mobile screen */}
      <div className="design-grid-mob">
        <div className="design-card">
          <img src={img3} alt="design" />
          <div className="design-btn">
            <button className="btn2"><Link to="/living-room-interiors">
              Living room design<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>
        </div>
        <div className="design-card">
          {" "}
          <img src={img4} alt="design" />
          <div className="design-btn">
            <button className="btn2"><Link to="/modular-kitchens">
              Kitchan designs<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>{" "}
        </div>
        <div className="design-card">
          {" "}
          
            <img src={img5} alt="design" />
            <div className="design-btn">
              <button className="btn2"><Link to="/bedroom-interiors">
                Bedroom designs<span>{<GoArrowRight />}</span></Link>
              </button>
            </div>
        </div>
        <div className="design-card">
          {" "}
          <img src={img2} alt="design" />
          <div className="design-btn">
            <button className="btn2"> <Link to="/office-interiors" >
              Office designs<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>{" "}
        </div>
        <div className="design-card">
          {" "}
          <img src={img1} alt="design" />
          <div className="design-btn">
            <button className="btn2"><Link to="/dining-room-interiors">
              Dining designs<span>{<GoArrowRight />}</span></Link>
            </button>
          </div>
        </div>

        <div className="designmore">
            <h3>10+</h3>
            <p>Interior Designs</p>
            <span className="designmorearrow">{<GoArrowRight />}</span>
          </div>
      </div>
    </div>
  );
};

export default design;
