import React from 'react';
import './heroslider.css'; 
import banner1 from '../../../images/herobanner1.png';
import banner2 from '../../../images/herobanner22.png';
import banner3 from '../../../images/herobanner3.png';
import banner4 from '../../../images/herobanner2.png';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function HeroSlider() {
  

  return (
    <div className="heroslider">
    <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000, // Change the delay to your preferred timing
          disableOnInteraction: false, // Autoplay won't stop after user interaction
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
        <div className="slider">
              <img src={banner2} alt="" />
              <div className="herocontent">
                <p>Luxury Home Interiors
                </p>
                <h4>Cedar Interiors creates stunning and functional spaces that match your lifestyle. Let’s bring your vision to life.</h4>
             </div>
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <img src={banner3} alt="" />
              <div className="herocontent">
                <p>Modular Kitchens</p>
                <h4>Transform Your Space with cedar’s
                Expert Design Consulting </h4>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <img src={banner1} alt="" />
              <div className="herocontent">
                <p>Custom Interior Unites</p>
                <h4>Transform Your Space with cedar’s
                Expert Design Consulting </h4>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <img src={banner4} alt="" />
              <div className="herocontent">
                <p>Office Interiors</p>
                <h4>Transform Your Space with cedar’s
                Expert Design Consulting </h4>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider">
              <img src={banner4} alt="" />
              <div className="herocontent">
                <p>Exclusive Packages</p>
                <h4>Transform Your Space with cedar’s
                Expert Design Consulting </h4>
             </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
