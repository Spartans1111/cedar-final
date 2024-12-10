
import React, { useEffect, useState } from 'react';
import aboutimg1 from '../../images/aboutpage/aboutimg3.png';
import aboutimg2 from '../../images/aboutpage/aboutimg.png';
import aboutimg3 from '../../images/aboutpage/aboutimg4.png';
import "./service.css";
import Quatationform from "../formdesign/quoteform";
import aw1 from '../../images/awandwin/aw1.png';
import aw2 from '../../images/awandwin/aw2.png';
import { BiRightArrowAlt } from "react-icons/bi";
import hsimg1 from '../../images/herobanner2.png';
import hsimg2 from '../../images/package2.png';
import hsimg3 from '../../images/pakage1.png';
import serviabt1 from '../../images/service/serviceabt.png';
import port1 from '../../images/service/port1.png';
import port2 from '../../images/service/port2.png';
import port3 from '../../images/service/port3.png';
import port4 from '../../images/service/port4.png';
import port6 from '../../images/service/port6.png';
import port7 from '../../images/service/port7.png';
import port8 from '../../images/service/port8.png';
import port5 from '../../images/service/port5.png';
import success1 from "../../images/success/success (1).png";
import success2 from "../../images/success/success (2).png";
import success3 from "../../images/success/success (3).png";
import success4 from "../../images/success/success (4).png";
import abimg1 from "../../images/c1 (1).png";
import abimg2 from "../../images/c1 (2).png";
import abimg3 from "../../images/c1 (3).png";
import abimg4 from "../../images/c1 (4).png";
import Accordion from '../Home/accordian/Accordion'; 
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Testimonial from "../Home/powerfull/powerfull";
import Popup from '../pup/popup';
import { Helmet } from "react-helmet-async";

export default function Officeservice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aboutimg1, aboutimg2, aboutimg3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []); 

  const portfolioimg1 = [port1, port2,port3,port4];
  const duplicatedImages = [...portfolioimg1, ...portfolioimg1]; 
  const portfolioimg2 = [port5, port6,port7,port8];
  const duplicatedImages2 = [...portfolioimg2, ...portfolioimg2]; 

  const items = [
    {
      title: 'What office interior services does Cedar Interiors provide in Kerala?',
      content: 'We specialize in custom office interiors, including workstations, reception desks, conference tables, and file storage units, catering to businesses in Cochin, Palakkad, and other areas.',
    },
    {
      title: 'Can Cedar Interiors design a modern and functional workspace for my office?',
      content: 'Yes! We focus on ergonomic, modern designs tailored to optimize your workspace for productivity and collaboration.',
    },
    {
      title: 'How long does it take to complete an office interior project?',
      content: 'Most office interior projects are completed within 30–45 days, depending on the scope and complexity.',
    },
    {
          title:'Do you offer office interior services in Tamil Nadu?',
          content:'Yes, we provide our services in Tamil Nadu, including Coimbatore, ensuring businesses have inspiring workspaces.'
    },
    {
      title:'Can I customize my office interiors with Cedar Interiors?',
      content:'Absolutely! Our office interior solutions are fully customizable to align with your business needs and aesthetic preferences.'
  },
  {
    title:'What materials do you use for office interiors?',
    content:'We use premium and durable materials to ensure functionality and longevity, matching your office’s style and requirements.'
},
  ];

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const openPopup = () => {
    setShowPopup(true); // Function to open the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Function to close the popup
  };

  return (
    <>
    <Helmet>
        <title>Office Interiors - Cedar Interiors</title>
        <meta name="description" content="Transform your workspace with Cedar Interiors. Offering workstations, reception desks, and conference tables to enhance productivity and style." />
      </Helmet>
      <div className="service-main">
      <div className="servicehero"></div>
      <div className="servicehero1">
        <div className="servicehero1col">
          <div className="discount">
          <h2 className="header2">
              <span>Office Interior Design Services</span>
            </h2>
            <h5 className="smallhead">Starting from <span>2 Lakhs</span></h5>
          </div>
        </div>
        <div className="servicehero1col">
          <Quatationform />
        </div>
      </div>
      <div className="serviceinterior">
        <div className="serviceinteriorcol sercol1">
          <div className="service-slide">
            {" "}
            <div className='aboutslider'>
      <div className="about-slider-inner">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`h-slide ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + images.length) % images.length ? 'previous' : ''}`}
          >
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>
        <div className="serviceinteriorcol sercol2">
        <div className='awardandwinnig'> <h2 className='header2'><span> Redefine Your Workspace</span></h2>
    <h6>with Tailored Office Interiors</h6>
    <p>Cedar Interiors specializes in creating inspiring office spaces that boost productivity and represent your brand. From ergonomic designs to modern aesthetics, we craft offices that balance functionality with style. Transform your workspace into a hub of efficiency and innovation.</p>
<p>Elevate your workspace with Cedar Interiors’ modern office designs. We combine cutting-edge layouts, high-quality materials, and practical solutions to create interiors that enhance collaboration and inspire creativity. Achieve an office space tailored to your business needs and aesthetics.</p>

<div className="awardwiningblurb">
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw2} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Premium Quality</h5>
            <p>Finest materials ensured</p>
        </div>
    </div>
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw1} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Innovation
          </h5>
            <p>Creative, modern solutions</p>
        </div>
    </div>
</div>
</div>
        </div>
      </div>
      <div className="hrline-bg">
        <div className="hrline"></div>{" "}
      </div>
      <div className='homeservice'><h2 className="header2">Best Office <span>Interior Designers</span></h2>
    <p>Enhance your workspace with Cedar Interiors’ office interior solutions. From ergonomic workstations to stylish reception desks, conference tables, and file storage units, we design spaces that optimize functionality and reflect professionalism.</p>
    <div className="hr"></div>
    {/*servicecard*/}
  <div className="homeservicecard">
    <div className="homesercardcol">
        <h5 className="smallhead">Workstations</h5>
        <img src={hsimg1} alt="homedesign" />
        <p>Create a dynamic and efficient workspace with customized workstations. Designed for comfort and collaboration, our ergonomic solutions ensure your employees stay productive and focused.</p>
        <button className='btn1' onClick={openPopup}>Get a Quote<span><BiRightArrowAlt/></span></button>
    </div>
    {/*card2*/}
    <div className="homesercardcol">
        <h5 className="smallhead">Reception Desks</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Make a lasting first impression with elegant reception desks. Our designs combine functionality with aesthetics, creating a welcoming and professional ambiance for your visitors.</p>
        <button className='btn1' onClick={openPopup}>Get a Quote<span><BiRightArrowAlt/></span></button>
    </div>
       {/*card32*/}
       <div className="homesercardcol">
        <h5 className="smallhead">Conference Tables</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Host meetings in style with our custom conference tables. Combining sleek designs with practicality, our tables are crafted to encourage collaboration and seamless communication.</p>
        <button className='btn1' onClick={openPopup}>Get a Quote<span><BiRightArrowAlt/></span></button>
    </div>
      {/*card32*/}
      <div className="homesercardcol">
        <h5 className="smallhead">File Storage Units</h5>
        <img src={hsimg3} alt="homedesign" />
        <p>Stay organized with our modern file storage units. Designed for space efficiency and durability, these units blend seamlessly into your office decor while keeping your files easily accessible.</p>
        <button className='btn1' onClick={openPopup}>Get a Quote<span><BiRightArrowAlt/></span></button>
    </div>

  </div>


    </div>
    <div className='serviceabt'>
        <div className="serviceabtinner">
            <div className="serviceabitinnercol1">
                <div className="servblurb">
                    <h3>4 Lakh+ Sq. Ft.</h3>
                    <p>Projects Successfully Completed</p>
                </div>
                <div className="servblurb">
                    <h3>10-Year</h3>
                    <p>Trusted Warranty Coverage</p>
                </div>
                <div className="servblurb1">
                    <h3 className='smallhead'>Turning Ideas Into Reality</h3>
                    <p>With over two decades of expertise, Cedar Interiors transforms office spaces into functional, innovative, and inspiring environments that fuel productivity and reflect your brand identity.</p>
                    <button className='btn2'>Get a Quote<span><BiRightArrowAlt/></span></button>
                </div>
            </div>
            <div className="serviceabitinnercol">
                <h2 className="header2">Innovative Spaces for Productivity</h2>
                {/* <h6 className="smallhead">with cedar interiors</h6> */}
                <div className="row1">
                    <div className="row1col">
                        <p>Experience office interiors designed for efficiency and collaboration. Cedar Interiors blends innovation and functionality to craft workspaces tailored to your business success.</p>
                    </div>
                </div>
                <img src={serviabt1} alt="" />
            </div>
        </div>
    </div>
    <div className='serviceportfolio'>
 <h2 className="header2">Portfolio for <span>Office Interiors</span></h2>
 <p>Explore our portfolio of office interiors tailored for style, comfort, and productivity.</p>
 <div className="hr"></div>
 
 <div className="servportfolioinner">
 <div className="carousel-container">
      <div className="logo-carousel">
        {duplicatedImages.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
    {/*second*/}
    <div className="carousel-container">
      <div className="logo-carousel1">
        {duplicatedImages2.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>

 </div>

    </div>

    <div className="successstory">
      <div className="success">
        <p className="build-success">The Path to Your Perfect Space</p>
        <h2 className="header2">Our Success Route</h2>
        <p className="sucees-elevate">
          Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C.
          Experience the fusion of your aspirations with our expertise, creating
          interiors that speak volumes. Your space, our dedication.
        </p>
      </div>

      <div className="success-card">
        <div className="sucess-card1">
          <ul class="card-color">
            <li class="item">
              {" "}
              <img src={success1} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success2} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success3} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success4} alt="" />
            </li>
          </ul>
        </div>
        <div className="success-card2">
          <div className="success-col">
            <div className="blurb">
              <h4>Inspiration
              </h4>
              <p>
              We start by drawing inspiration from your vision and lifestyle, ensuring every detail reflects your unique taste.
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>Planning</h4>
              <p>
              Strategizing and mapping out the perfect balance of form and function to bring your ideas to life.
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>Craftsmanship</h4>
              <p>
              Bringing designs to reality through innovative techniques and skilled artistry for flawless interiors.
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>Delivery</h4>
              <p>
              Completing your dream space with precision, on-time execution, and uncompromised quality.
              </p>
            </div>
          </div>
        </div>

        {/* mobile*/}

        <div className="success-card-mob">
          <div class="item">
              {" "}
              <img src={success1} alt="" />
              <div className="blurb">
              <h4>CONCEPT</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>



          <div class="item">
              {" "}
              <img src={success2} alt="" />
              <div className="blurb">
                <h4>IDEALOGY</h4>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
          </div>

          <div class="item">
              {" "}
              <img src={success3} alt="" />
              <div className="blurb">
              <h4>DESIGN</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>

          <div class="item">
              {" "}
              <img src={success4} alt="" />
              <div className="blurb">
              <h4>EXECUTION</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      </div>
      
      <div>
      {" "}
      <Testimonial />
    </div>
      
    <div className='accordian'>
      <div className="accordian-col">
        <p className='qa'>QUESTIONS & ANSWERS</p>
        <h2 className='header2'>Let us help you find clarity</h2>
        <p className='qa-exp'>
        We’re here to answer your queries and guide you through every step of your journey with us. Explore our frequently asked questions below.
          {/* <br /><br />
          Experience the ultimate getaway at our luxurious resort,
          where every detail is designed to offer. */}
        </p>
      </div>
      
      <div className="accordian-col">
        {/* Place the Accordion component here */}
        <Accordion items={items} />
      </div>
    </div>
    <Popup showPopup={showPopup} closePopup={closePopup} />
    </div>

    </>
  )
}

