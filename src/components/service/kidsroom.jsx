
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

export default function Kidsroom() {
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
      title: 'What kids’ room interior services does Cedar Interiors offer in Kerala?',
      content: 'We provide customized solutions like bunk beds, study tables, toy storage units, and wall art panels for kids’ rooms in Cochin, Palakkad, and other areas.',
    },
    {
      title: 'How safe are your designs for kids’ rooms?',
      content: 'Safety is our priority. We use child-friendly materials, rounded edges, and sturdy designs to ensure your child’s safety and comfort.',
    },
    {
      title: 'Can I customize the designs for my child’s specific needs?',
      content: 'Absolutely! Our kids’ room designs are fully customizable to match your child’s personality, needs, and available space.',
    },
    {
          title:'How long does it take to complete a kids’ room interior project?',
          content:'Kids’ room projects typically take 30–45 days, depending on the complexity and scope of work.'
    },
    {
      title:'Do you provide kids’ room interior services in Tamil Nadu?',
      content:'Yes, we cater to clients in Tamil Nadu, including Coimbatore, with personalized kids’ room interior solutions.'
  },
  {
    title:'What materials do you use for kids’ room interiors?',
    content:'We use premium, durable, and eco-friendly materials to ensure safe and long-lasting designs for your child’s room.'
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
      <div className="service-main">
      <div className="servicehero"></div>
      <div className="servicehero1">
        <div className="servicehero1col">
          <div className="discount">
          <h2 className="header2">
              <span>Kids Room Interior Design Services</span>
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
        <div className='awardandwinnig'> <h2 className='header2'><span> Designing Delightful Kids Room Interiors</span></h2>
    {/* <h6>with Cedar Interiors</h6> */}
    <p>Cedar Interiors crafts vibrant and functional kids’ rooms tailored to your child’s personality and needs. From space-saving solutions to creative designs, our interiors combine fun and practicality, ensuring a joyful and nurturing environment for your little ones.</p>
<p>Transform your child’s space with Cedar Interiors’ kids room designs. With a focus on ergonomic solutions and playful aesthetics, we create rooms that foster growth, creativity, and comfort. Explore customized designs that inspire and adapt as your child grows.</p>

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
      <div className='homeservice'><h2 className="header2">Best Kids Room <span>Interior Designers</span></h2>
    <p>Create a magical and organized space for your children with Cedar Interiors. From cozy bunk beds to creative storage solutions, we design functional and safe interiors tailored to your family’s needs.</p>
    <div className="hr"></div>
    {/*servicecard*/}
  <div className="homeservicecard">
    <div className="homesercardcol">
        <h5 className="smallhead">Bunk Beds</h5>
        <img src={hsimg1} alt="homedesign" />
        <p>Maximize space and fun with our custom-designed bunk beds. These space-saving solutions offer safety, style, and comfort, making them perfect for shared rooms or playful sleepovers.</p>
        <button className='btn2' onClick={openPopup}>Get a Quote <span><BiRightArrowAlt/></span></button>
    </div>
    {/*card2*/}
    <div className="homesercardcol">
        <h5 className="smallhead">Study Tables</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Encourage learning and focus with ergonomic study tables. Designed with ample storage and a modern aesthetic, our study tables create a perfect study environment for your child.</p>
        <button className='btn2' onClick={openPopup}>Get a Quote <span><BiRightArrowAlt/></span></button>
    </div>
       {/*card32*/}
       <div className="homesercardcol">
        <h5 className="smallhead">Toy Storage Units</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Say goodbye to clutter with our efficient toy storage units. These designs combine functionality with style, ensuring every toy has its place while maintaining a tidy and inviting room.</p>
        <button className='btn2' onClick={openPopup}>Get a Quote <span><BiRightArrowAlt/></span></button>
    </div>
      {/*card32*/}
      <div className="homesercardcol">
        <h5 className="smallhead">Wall Art Panels</h5>
        <img src={hsimg3} alt="homedesign" />
        <p>Add a splash of creativity with personalized wall art panels. From playful patterns to educational designs, these panels enhance the room’s personality and inspire young minds.</p>
        <button className='btn2' onClick={openPopup}>Get a Quote <span><BiRightArrowAlt/></span></button>
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
                    <p>Cedar Interiors turns kids’ spaces into nurturing environments with innovative designs and over two decades of expertise. We craft interiors that bring joy and practicality to your child’s world.</p>
                    <button className='btn2'>Get a Quote <span><BiRightArrowAlt/></span></button>
                </div>
            </div>
            <div className="serviceabitinnercol">
                <h2 className="header2">Vibrant Interiors for Young Minds</h2>
                {/* <h6 className="smallhead">with cedar interiors</h6> */}
                <div className="row1">
                    <div className="row1col">
                        <p>Experience kids’ rooms designed for growth and imagination. Cedar Interiors blends creativity and functionality to craft spaces where children thrive.</p>
                    </div>
                </div>
                <img src={serviabt1} alt="" />
            </div>
        </div>
    </div>
    <div className='serviceportfolio'>
 <h2 className="header2">Portfolio for <span>Kids Room Interiors</span></h2>
 <p>Explore our curated portfolio of kids’ room interiors tailored for fun, comfort, and creativity.</p>
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

