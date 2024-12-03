
    import React, { useEffect, useState } from 'react';
    import aboutimg1 from '../../images/aboutpage/aboutimg3.png';
    import aboutimg2 from '../../images/aboutpage/aboutimg.png';
    import aboutimg3 from '../../images/aboutpage/aboutimg4.png';
    import "./service.css";
    import Quatationform from "../formdesign/quoteform";
    import Aboutslider from "../about/aboutslider";
    import Awardandwinning from "../awardandwinng/awardandwinning";
    import Homeservice from "./homeservice/homeservice";
    import Serportfolio from "./serviceportfolio/serportfolio";
    import Succes from "../Home/success/success";
    import Testimonial from "../Home/powerfull/powerfull";
    import Serviceabt from "./servicabt/serviceabt";
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
    import qut from "../../images/quote.png";
    import author from "../../images/testimonial/Sudeepkrishna.png";
    import author1 from "../../images/testimonial/Mahadevan.png";
    import author2 from "../../images/testimonial/Ponmanikavel L.png";
    import testi1 from "../../images/testimonial/interior1.png";
    import testi2 from "../../images/testimonial/interior2.png";
    import testi3 from "../../images/testimonial/interior3.png";
    import abimg1 from "../../images/c1 (1).png";
    import abimg2 from "../../images/c1 (2).png";
    import abimg3 from "../../images/c1 (3).png";
    import abimg4 from "../../images/c1 (4).png";
    import { FaStar } from "react-icons/fa";
    import { Navigation } from "swiper/modules";
    import { Swiper, SwiperSlide } from "swiper/react";
    
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    
    export default function Customservice() {
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
    
      return (
        <>
          <div className="service-main">
          <div className="servicehero"></div>
          <div className="servicehero1">
            <div className="servicehero1col">
              <div className="discount">
                <h2 className="header2">
                  <span>custom interior units - Design Starting from</span> 2 Lakhs
                </h2>
                <h5 className="smallhead">cedar interiors</h5>
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
            <div className='awardandwinnig'> <h2 className='header2'><span>Beautiful Homes Begin</span></h2>
        <h6>with Cedar Interiors</h6>
        <p>Cedar Interiors, headquartered in Palakkad, Kerala, specializes in crafting premium, customized furniture and interior solutions for homes, offices, and institutions.</p>
    <p>We cater to both commercial and residential projects, offering turn-key solutions for hotels, offices, and schools. With cutting-edge infrastructure and a commitment to sustainability, our designs are energy-efficient and eco-friendly.</p>
    <p>Choose Cedar Interiors to transform your spaces with innovative designs, unmatched craftsmanship, and exceptional quality.</p>
    
    <div className="awardwiningblurb">
        <div className="blurb">
            <div className='aw-blurbimg'>
              <img src={aw2} alt="aw" />
            </div>
            <div className="aw-blurbcontent">
                <h5>1000+</h5>
                <p>Dream Spaces Designed</p>
            </div>
        </div>
        <div className="blurb">
            <div className='aw-blurbimg'>
              <img src={aw1} alt="aw" />
            </div>
            <div className="aw-blurbcontent">
                <h5>Trusted by 500+
              </h5>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
    </div>
            </div>
          </div>
          <div className="hrline-bg">
            <div className="hrline"></div>{" "}
          </div>
          <div className='homeservice'><h2 className="header2">SERVICES <span>FOR HOME INTERIORS</span></h2>
    <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
    <div className="hr"></div>
    {/*servicecard*/}
  <div className="homeservicecard">
    <div className="homesercardcol">
        <h5 className="smallhead">Living room designs</h5>
        <img src={hsimg1} alt="homedesign" />
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
    </div>
    {/*card2*/}
    <div className="homesercardcol">
        <h5 className="smallhead">Kitchen designs</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
    </div>
       {/*card32*/}
       <div className="homesercardcol">
        <h5 className="smallhead">Dinning designs</h5>
        <img src={hsimg2} alt="homedesign" />
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
    </div>
      {/*card32*/}
      <div className="homesercardcol">
        <h5 className="smallhead">Bed room designs</h5>
        <img src={hsimg3} alt="homedesign" />
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
    </div>

  </div>


    </div>
        <div className='serviceabt'>
            <div className="serviceabtinner">
                <div className="serviceabitinnercol1">
                    <div className="servblurb">
                        <h3>8049+</h3>
                        <p>Sq.ft Projects delivered</p>
                    </div>
                    <div className="servblurb">
                        <h3>8049+</h3>
                        <p>Sq.ft Projects delivered</p>
                    </div>
                    <div className="servblurb1">
                        <h3 className='smallhead'>Crafting dream
                        spaces since 2003</h3>
                        <p>Atlas Interiors & Kitchen, your partner in quality and excellence. From UAE to your dream home, with 10,000+ projects, we make interior planning a seamless journey.</p>
                        <button className='btn2'>NEED OUR SERVICE <span><BiRightArrowAlt/></span></button>
                    </div>
                </div>
                <div className="serviceabitinnercol">
                    <h2 className="header2">Beautiful house interior</h2>
                    <h6 className="smallhead">with cedar interiors</h6>
                    <div className="row1">
                        <div className="row1col">
                            <p>Elevate your spaces with Cedar Interiors L.L.C. Experience the fusion of
    your aspirations with our expertise, creating interiors  that speak volumes.
    Your space, our dedication a partnership that transforms imagination reality.</p>
                        </div>
                    </div>
                    <img src={serviabt1} alt="" />
                </div>
            </div>
        </div>
        <div className='serviceportfolio'>
     <h2 className="header2">PORTFOLIO FOR <span>HOME INTERIORS</span></h2>
     <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
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
          <div id="Testimonial">
            <div class="row-testimonial">
              <div class="col-testimonial">
                <h2 className="header2">Trusted by Our Clients</h2>
                <p class="get-insight">
                Discover how we’ve transformed spaces and lives with our designs. Hear directly from our 89+ satisfied clients worldwide, sharing their experiences and stories.
                </p>
                <h6>Real feedback, Real impact -</h6>
              </div>
              <div class="col-testimonial">
                <div class="satisfied-cutomer">
                  <span>100+</span>
                  <p>Satisfied Clients Across South India</p>
                </div>
              </div>
            </div>
    
            <div class="testimonial-card">
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3} // default slidesPerView for desktop
                navigation={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <div className="card-content-inner">
                          <div class="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <p>
                            {" "}
                            “Cedar Interiors completely redefined my living spaces. Their attention to detail and ability to blend style with comfort turned my house into a dream home. Highly recommended for anyone seeking perfection!”
                          </p>
                          <div class="quatation">
                            <img src={qut} alt="" />
                          </div>
                        </div>
                      </div>
                      <img src={testi1} alt="" className="card-hoverimg" />
                    </div>
    
                    <div class="card-authur">
                      <div className="card-author-inner">
                        <div class="autor-img">
                          {" "}
                          <img src={author} alt="" />
                        </div>
                        <div class="author-name">
                          <p>Ravi Krishnan</p>
                          <p>Cochin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
    
                {/*second--*/}
                <SwiperSlide>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <div className="card-content-inner">
                          <div class="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <p>
                            {" "}
                            “From start to finish, Cedar Interiors delivered excellence. They beautifully designed every corner of my home, making it functional yet elegant. Their team was professional, creative, and always attentive to my needs.”
                          </p>
                          <div class="quatation">
                            <img src={qut} alt="" />
                          </div>
                        </div>
                      </div>
                      <img src={testi2} alt="" className="card-hoverimg" />
                    </div>
    
                    <div class="card-authur">
                      <div className="card-author-inner">
                        <div class="autor-img">
                          {" "}
                          <img src={author1} alt="" />
                        </div>
                        <div class="author-name">
                          <p>Annamma Joseph</p>
                          <p>Palakkad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*second end--*/}
                {/*third--*/}
                <SwiperSlide>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <div className="card-content-inner">
                          <div class="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <p>
                            {" "}
                            “The modular kitchen designed by Cedar Interiors is a game-changer! It combines elegance and functionality perfectly. Cooking feels more enjoyable now, thanks to their creative designs and high-quality workmanship. Truly impressive service!”
                          </p>
                          <div class="quatation">
                            <img src={qut} alt="" />
                          </div>
                        </div>
                      </div>
                      <img src={testi3} alt="" className="card-hoverimg" />
                    </div>
    
                    <div class="card-authur">
                      <div className="card-author-inner">
                        <div class="autor-img">
                          {" "}
                          <img src={author2} alt="" />
                        </div>
                        <div class="author-name">
                          <p>Farhan Mohammed</p>
                          <p>Coimbatore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*thrid end--*/}
                {/*third--*/}
                <SwiperSlide>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <div className="card-content-inner">
                          <div class="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <p>
                            {" "}
                            “Cedar Interiors transformed our office into a vibrant, professional space. Their designs boosted productivity while adding a touch of sophistication. Their ability to meet deadlines without compromising quality was outstanding!”
                          </p>
                          <div class="quatation">
                            <img src={qut} alt="" />
                          </div>
                        </div>
                      </div>
                      <img src={testi2} alt="" className="card-hoverimg" />
                    </div>
    
                    <div class="card-authur">
                      <div className="card-author-inner">
                        <div class="autor-img">
                          {" "}
                          <img src={author1} alt="" />
                        </div>
                        <div class="author-name">
                          <p>Jayanth Nair</p>
                          <p>Trichur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*thrid end--*/}
              </Swiper>
            </div>
          </div>
        </div>
          
        </div>
    
        </>
      )
    }
    
