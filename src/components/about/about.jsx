import React from "react";
import "./about.css";
import Aboutslider from "./aboutslider";
import border from "../../images/aboutpage/border.png";
import Awardandwinning from "../awardandwinng/awardandwinning";
import Testimonial from "../Home/powerfull/powerfull";
import bestimg from "../../images/aboutpage/bestseller.png";
import Chooseus from '../Home/whychose/choose.jsx';

function about() {
  return (
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

      {/* <div className="aboutchoose">
        <div className="aboutchoosrow1">
          <div className="aboutchooserow1col col1">
            <h2 className="header2">Cedar Assurance</h2>
            <p>
            Cedar Assurance is our promise to make your interior journey seamless and stress-free. We go beyond delivering beautiful spaces by ensuring every detail reflects quality, precision, and care. With our unwavering commitment to innovation and client satisfaction, Cedar Interiors stands as your trusted partner in creating timeless spaces that inspire.
            </p>
          </div>
          <div className="aboutchooserow1col col2">
            <div className="yofexp">
              <p>45</p>
              <span>Days</span>
              <span>Delivery</span>
            </div>

            <div className="yofexp">
            <p>4Lakh</p>
              <span>SqFt</span>
              <span>Developed</span>
            </div>
            <div className="yofexp">
            <p>10</p>
              <span>Years</span>
              <span>Warranty</span>
            </div>
          </div>
        </div>
       
        <div className="about-card">
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg1} alt="" />
              <h4>45 Days Delivery</h4>
              <p>
              Enjoy fast and reliable interior solutions for your new home with our guaranteed 45-day delivery. Your dream home, delivered on time.
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg2} alt="" />
              <h4>Design Experts</h4>
              <p>
              Collaborate with our skilled designers to explore premium ideas and co-create interiors that match your unique style and vision.
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg3} alt="" />
              <h4>Aftercare Service</h4>
              <p>
              Experience uninterrupted support with our dedicated customer care team, ensuring your interiors remain flawless even after project completion.
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg4} alt="" />
              <h4>10-Year Warranty</h4>
              <p>
              Benefit from high-quality materials and craftsmanship backed by a 10-year warranty for a defect-free and lasting experience.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutbtn2">
          {" "}
          <button className="btn2">
            PORTFOLIO PROJECTS
            <span>
              <BiRightArrowAlt />
            </span>
          </button>
        </div>
      </div> */}
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
  );
}

export default about;
