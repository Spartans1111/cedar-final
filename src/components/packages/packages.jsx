import React from 'react';
import './packages.css'
import Quatationform from '../formdesign/quoteform';
import Package from '../package/package.jsx';
import Detailpackage from './detailpackage/detailpackage.jsx';
import Keralapkg from './keralapackage/keralapkg.jsx';
import { GoArrowDown } from "react-icons/go";
import Tesimonial from '../Home/powerfull/powerfull.jsx';
import { BiRightArrowAlt } from "react-icons/bi";
import abimg1 from "../../images/c1 (1).png";
import abimg2 from "../../images/c1 (2).png";
import abimg3 from "../../images/c1 (3).png";
import abimg4 from "../../images/c1 (4).png";
import Accordion from '../Home/accordian/Accordion'; 
const packages = () => {
  const items = [
    {
      title: 'What do the Cedar Interiors packages include?',
      content: 'Our home interior packages include a wide range of furniture and design solutions, such as wardrobes, dressing tables, bed frames, sofa sets, dining tables, and modular kitchens with essential accessories. Each package is curated to provide a comprehensive interior setup for your home.',
    },
    {
      title: 'Are the packages customizable?',
      content: 'Yes, our packages can be tailored to fit your specific requirements. While the core items in each package remain the same, we offer customization options for sizes, finishes, and additional features to suit your preferences.',
    },
    {
      title: 'How long does it take to deliver and install the packages?',
      content: 'Our streamlined process ensures that the furniture and interior elements are delivered and installed within 45 days from the date of order confirmation, depending on the size and scope of the project.',
    },
    {
          title:'What is the quality assurance provided with these packages?',
          content:'We use premium-quality materials sourced from trusted suppliers and employ skilled craftsmanship to ensure durability and elegance. Additionally, all packages come with a 10-year warranty for your peace of mind.'
    },
    {
      title:'Are the packages suitable for both 2 BHK and 3 BHK homes?',
      content:'Absolutely! We offer separate packages tailored specifically for 2 BHK and 3 BHK homes. Each package is designed to maximize space utilization and elevate the aesthetics of your living spaces, ensuring functionality and style.'
  },
  ];
  return (
    <div>
        <div className="packagehero"></div>
        <div className="pakageshero1">
            <div className="packkageshero1col">
                     <div className="discount">
                        <h2 className="header2"><span>Affordable Interior Services Packages - 
                        </span> 30% Discount, </h2>
                        <h5 className="smallhead">Direct from Factory</h5>
                     </div>

            </div>
            <div className="packkageshero1col">
                      <Quatationform/>
            </div>
        </div>
        <div className="scrolldown"><GoArrowDown /> SCROLL DOWN</div>
<Package/>
<Detailpackage/>
<Keralapkg/>
<div className="aboutchoose">
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
          </div>
          <div className="servicegap"></div>
<Tesimonial/>
<div className='accordian'>
      <div className="accordian-col">
        <p className='qa'>QUESTIONS & ANSWERS</p>
        <h2 className='header2'>Let us help you find clarity</h2>
        <p className='qa-exp'>
        We’re here to answer your queries and guide you through every step of your journey with us. Explore our frequently asked questions below.
        </p>
      </div>
      
      <div className="accordian-col">
        {/* Place the Accordion component here */}
        <Accordion items={items} />
      </div>
    </div>

        </div>
  )
}

export default packages