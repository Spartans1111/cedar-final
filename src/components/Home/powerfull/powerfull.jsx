import React from "react";
import "./powerfull.css";
import qut from "../../../images/quote.png";
import author from "../../../images/testimonial/Sudeepkrishna.png";
import author1 from "../../../images/testimonial/Mahadevan.png";
import author2 from "../../../images/testimonial/Ponmanikavel L.png";
import testi1 from "../../../images/testimonial/interior1.png";
import testi2 from "../../../images/testimonial/interior2.png";
import testi3 from "../../../images/testimonial/interior3.png";
import user from "../../../images/testimonial/male.png";
import user1 from "../../../images/testimonial/female.png";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const powerfull = () => {
  return (
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
                      <img src={user} alt="" />
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
                      <img src={user1} alt="" />
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
                      <img src={user} alt="" />
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
                      <img src={user} alt="" />
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
  );
};

export default powerfull;
