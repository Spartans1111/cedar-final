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
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

export default function Homeinterior() {
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
      title: 'What home interior services does Cedar Interiors provide in Kerala?',
      content: 'At Cedar Interiors, we specialize in creating personalized living spaces, including modular kitchens, bedroom interiors, dining rooms, and living room designs, tailored to your needs in Cochin, Palakkad, Tiruvalla, and other parts of Kerala.',
    },
    {
      title: 'How long does it take to complete a home interior project?',
      content: 'Our typical project timeline is 45 days, depending on the scope and complexity of the design. We pride ourselves on delivering exceptional interiors on time.',
    },
    {
      title: 'What materials do you use for home interiors?',
      content: 'We use premium, eco-friendly materials sourced from trusted suppliers to ensure durability and elegance in every project we deliver.',
    },
    {
          title:'Can I customize my home interior design with Cedar Interiors?',
          content:'Absolutely! We focus on bespoke designs, allowing you to personalize every detail to suit your style and functional requirements.'
    },
    {
      title:'Do you offer after-sales support for home interiors?',
      content:'Yes, we provide dedicated after-sales support to address any concerns and ensure your home remains beautiful and functional for years to come.Let me know if you’d like further adjustments!'
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
        <title>Home Interiors - Cedar Interiors</title>
        <meta name="description" content="Explore our comprehensive home interior solutions. From modular kitchens to living rooms, we craft functional and stylish spaces tailored to your needs.
" />
      </Helmet>
      <div className="service-main">
      <div className="servicehero"></div>
      <div className="servicehero1">
        <div className="servicehero1col">
          <div className="discount">
          <h2 className="header2">
              <span> Home Interior Design Services</span>
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
        <div className='awardandwinnig'> <h2 className='header2'><span>Transform Your Home with Premium Interior Design Services</span></h2>
    <h6>Luxury Home Decor and Custom Interiors</h6>
    <p>Discover the art of transforming your living spaces with premium home interior design services. At Cedar Interiors, we combine creativity, functionality, and timeless elegance to craft bespoke interiors. Whether you desire modern minimalism or luxurious traditional designs, our tailored solutions ensure your home reflects your style perfectly.</p>
<p>At Cedar Interiors, we specialize in luxury home decor and custom interior design services tailored to your unique style and needs. With a deep focus on quality craftsmanship and timeless elegance, our solutions transform houses into dream homes. Experience premium home interiors crafted for both functionality and unmatched aesthetic appeal.</p>

<div className="awardwiningblurb">
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw2} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Premium Quality</h5>
            <p>Finest materials ensured.</p>
        </div>
    </div>
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw1} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Innovation
          </h5>
            <p>Creative, modern solutions.</p>
        </div>
    </div>
</div>
</div>
        </div>
      </div>
      <div className="hrline-bg">
        <div className="hrline"></div>{" "}
      </div>
      <div className='homeservice'><h2 className="header2"><span>Best</span> Home Interior <span>Designers</span></h2>
    <p className='service-desc'>Transform your home into a haven of style and functionality with Cedar Interiors. From elegant living spaces to modular kitchens, dining areas, and bedrooms, we deliver bespoke interior solutions tailored to your taste and needs.</p>
    <div className="hr"></div>
    {/*servicecard*/}
  <div className="homeservicecard">
    <div className="homesercardcol">
        <h5 className="smallhead">Living Room Interiors</h5>
        <img src={hsimg1} alt="homedesign" />
        <p>Transform your living room into the heart of your home with custom-crafted solutions. Whether it’s sleek TV units, practical coffee tables, or artistic partitions, our designs blend functionality and aesthetics to create a space you’ll love.</p>
        <Link to="/living-room-interiors"><button className='btn1'>Learn More<span><BiRightArrowAlt/></span></button></Link>
    </div>
    {/*card2*/}
    <div className="homesercardcol">
      <h5 className="smallhead">Modular Kitchen Designs</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Upgrade your cooking space with state-of-the-art modular kitchens. From space-efficient L-shaped and straight kitchens to spacious U-shaped and island designs, we offer layouts that seamlessly blend modernity and convenience. Crafted to enhance your cooking experience and add elegance to your home.</p>
        <Link to="/modular-kitchens"><button className='btn1'>Learn More<span><BiRightArrowAlt/></span></button></Link>
    </div>
       {/*card32*/}
       <div className="homesercardcol">
        <h5 className="smallhead">Bedroom Interiors</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Create a personal sanctuary with customized bedroom interiors. Our solutions include stylish wardrobes, cozy beds, and functional dressing units that combine storage, comfort, and elegance. Experience interiors that bring harmony and rejuvenation to your private space.</p>
        <Link to="/bedroom-interiors"><button className='btn1'>Learn More<span><BiRightArrowAlt/></span></button></Link>
    </div>
      {/*card32*/}
      <div className="homesercardcol">
        <h5 className="smallhead">Dining Room Interiors</h5>
        <img src={hsimg3} alt="homedesign" />
        <p>Reimagine your dining space with thoughtfully designed furniture and layouts. From luxurious dining table sets to smart storage units and room partitions, our designs cater to both family gatherings and formal dinners. A blend of sophistication and practicality for your dining area.</p>
        <Link to="/dining-room-interiors"><button className='btn1'>Learn More<span><BiRightArrowAlt/></span></button></Link>
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
                    <p>Cedar Interiors transforms ordinary spaces into extraordinary experiences with over two decades of expertise. We craft interiors that blend functionality and aesthetics to bring your dream space to life.</p>
                    <button className='btn2' onClick={openPopup}>Get a Quote <span><BiRightArrowAlt/></span></button>
                </div>
            </div>
            <div className="serviceabitinnercol">
                <h2 className="header2">Transform Spaces Into Homes</h2>
                <h6 className="smallhead">with cedar interiors</h6>
                <div className="row1">
                    <div className="row1col">
                        <p>Experience bespoke home interiors crafted to reflect your style and needs. Cedar Interiors combines functionality and beauty, ensuring every corner of your home resonates with perfection.
Your space, our dedication a partnership that transforms imagination reality.</p>
                    </div>
                </div>
                <img src={serviabt1} alt="" />
            </div>
        </div>
    </div>
    <div className='serviceportfolio'>
 <h2 className="header2">Portfolio For <span>Home Interiors</span></h2>
 <p>Discover our curated portfolio of home interiors designed for comfort and style.</p>
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
              <h4>INSPIRATION</h4>
              <p>
              We start by drawing inspiration from your vision and lifestyle, ensuring every detail reflects your unique taste.
              </p>
            </div>
          </div>



          <div class="item">
              {" "}
              <img src={success2} alt="" />
              <div className="blurb">
                <h4>PLANNING</h4>
                <p>
                Strategizing and mapping out the perfect balance of form and function to bring your ideas to life.
                </p>
              </div>
          </div>

          <div class="item">
              {" "}
              <img src={success3} alt="" />
              <div className="blurb">
              <h4>CRAFTSMANSHIP</h4>
              <p>
              Bringing designs to reality through innovative techniques and skilled artistry for flawless interiors.
              </p>
            </div>
          </div>

          <div class="item">
              {" "}
              <img src={success4} alt="" />
              <div className="blurb">
              <h4>DELIVERY</h4>
              <p>
              Completing your dream space with precision, on-time execution, and uncompromised quality.
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

