import React from "react";
import "./about.css";
import Aboutslider from "./aboutslider";
import border from "../../images/aboutpage/border.png";
import Awardandwinning from "../awardandwinng/awardandwinning";
import Testimonial from "../Home/powerfull/powerfull";
import bestimg from "../../images/aboutpage/bestseller.png";
import Chooseus from '../Home/whychose/choose.jsx';
import { Helmet } from "react-helmet-async";

function about() {
  return (
    <>
     <Helmet>
        <title>About Cedar Interiors - Redefining Spaces with Creativity</title>
        <meta name="description" content="Discover the story behind Cedar Interiors. Learn how our passion for design and commitment to innovation create extraordinary spaces for you." />
      </Helmet>
    
    <div className="about-main">
      <div className="about-hero">
        <div className="aboutheroleft">
          <div className="about-slide">
          <img src={border} alt="img" className="aboutborderimg" />
            <Aboutslider />
          </div>
        </div>
        <div className="aboutheroright">
          <Awardandwinning />
        </div>
      </div>

      <div className="aboutherosecond">
        <div className="hrline"> </div>
        <div className="missandvis">
          <div className="vission">
            <h5 className="smallhead">OUR VISION</h5>
            <p>
              To lead the way in redefining interior spaces by crafting
              personalized, comfortable, and aesthetically appealing designs. We
              strive to blend innovation, quality, and functionality, delivering
              spaces that resonate with our clients’ lifestyles and aspirations.
            </p>
          </div>
          <div className="mission">
            <h5 className="smallhead">OUR MISSION</h5>
            <p>
              To enhance the comfort and lifestyle of our clients by providing
              exceptional interior solutions. We are dedicated to offering
              superior-quality products and services that go beyond
              expectations, creating lasting impressions through precision,
              trust, and excellence.
            </p>
          </div>
        </div>
      </div>
      {/*end*/}

<Chooseus/>
      {/*best selling*/}

      <div className="bestselling">
        <div className="bestsellcol">
          <div className="bestsellcard">
            <img src={bestimg} alt="img" className="bestsellimg" />
          </div>
        </div>
        <div className="bestsellcol">
          <p className="bestp">State-of-the-Art Infrastructure </p>
          <h2 className="header2">
            <span>Empowering Excellence with </span>Advanced Facilities
          </h2>
          <h6>and Skilled Expertise</h6>
          <p>
          Cedar Interiors, headquartered in Palakkad, Kerala, began its journey with timber trading, interior design, and on-site consultations. Over the years, we have established expertise in manufacturing and designing premium yet cost-effective customized furniture for homes, offices, and institutions, including soft furnishings and commercial furniture solutions.
          </p>
          <p>Our advanced manufacturing facility includes a state-of-the-art sawmill, wood processing, and treatment plants, exclusively dedicated to production. Equipped with the latest machinery, our workshop ensures seamless production planning and execution.</p>
          <p>Our team comprises skilled engineers, designers, architects, and space planners who collaborate to deliver exceptional craftsmanship. Additionally, a dedicated unit for office administration and after-sales services at our retail showrooms ensures the highest level of customer satisfaction.</p>
        </div>
      </div>

      <Testimonial />
    </div>
    </>
  );
}

export default about;
