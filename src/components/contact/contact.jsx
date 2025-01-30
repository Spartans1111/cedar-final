import React from "react";
import "./contact.css";
import contactimg from "../../images/contact/ContactUs.jpeg";
import Contactform from "../formdesign/contactform";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { IoMdLocate } from "react-icons/io";
import Quoteform from "../formdesign/quoteform";
import { Helmet } from "react-helmet-async";

const contact = () => {
  return (
    <>
     <Helmet>
        <title>Contact Us - Cedar Interiors</title>
        <meta name="description" content="Get in touch with Cedar Interiors. Call, email, or visit us for expert interior design services that redefine your space." />
      </Helmet>
    <div className="contact">
      <div className="contacthero"></div>
      <div className="contact-top">
        <div className="contact-address">
          <div className="address-inner">
            <img src={contactimg} alt="" />

            <div className="address-text-inner">
              <p className="contact-head">CONTACT US - HEADQUATRES</p>

              <div className="contact-blurb">
                <div className="blurb">
                  <i>{<IoLocationOutline />}</i>
                  <div className="con-blurb-content">
                    <h4>ADDRESS</h4>
                    <p>
                      Cedar Interiors, Robinson Road, Emmar Plaza, Palakkad, 678001
                    </p>
                  </div>
                </div>

                <div className="contactt-blurb-col">
                  <div className="blurb">
                    <i>{<TiMessage />}</i>
                    <div className="con-blurb-content">
                      <h4>MAIL ID</h4>
                      <p><a href="mailto:info@cedarinteriors.in">info@cedarinteriors.in</a></p>
                    </div>
                  </div>

                  <div className="blurb">
                    <i>{<MdPhone />}</i>
                    <div className="con-blurb-content">
                      <h4>PHONE NUMBER</h4>
                      <p><a href="tel:+919633737722">+91 9633737722</a></p>
                    </div>
                  </div>
                  <div className="blurb">
                    <p><a href="tel:+919633157722">+91 9633157722</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <Quoteform />
        </div>
      </div>
      
     
      <hr />
      
      <div className="contactt-branches">
        <h2 className="header2">
          <span>OUR BRANCHES</span>
        </h2>
        <div className="branch-hr"></div>
        <div className="contact-branch-inner">
          {/*col1*/}
          <div className="branch-col">
            <h5>Coimbatore</h5>
            <div className="blurb">
              <i>{<IoLocationOutline />}</i>
              <div className="con-blurb-content">
                <h4>ADDRESS</h4>
                <p>
                552, Palathurai Road, Madhukarai, Coimbatore, Tamil Nadu, 641105
                </p>
              </div>
            </div>

            <div className="blurb">
              <i>{<MdPhone />}</i>
              <div className="con-blurb-content">
                <h4>PHONE NUMBER</h4>
                <p><a href="tel:+919633737722">+91 9633737722</a></p>
              </div>
            </div>
            {/*map*/}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119121.65993784422!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1733557237904!5m2!1sen!2sin"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="btn">
                <i>
                  <IoMdLocate />
                </i>
                Locate in map
              </div>
            </div>
          </div>
          {/*col1*/}
          <div className="branch-col">
            <h5>Palakkad</h5>
            <div className="blurb">
              <i>{<IoLocationOutline />}</i>
              <div className="con-blurb-content">
                <h4>ADDRESS</h4>
                <p>
                Cedar Interiors, Robinson Road, Emmar Plaza, Palakkad, 678001
                </p>
              </div>
            </div>

            <div className="blurb">
              <i>{<MdPhone />}</i>
              <div className="con-blurb-content">
                <h4>PHONE NUMBER</h4>
                <p><a href="tel:+919633157722">+91 9633157722</a></p>
              </div>
            </div>
            {/*map*/}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119212.11751895866!2d76.49800711652524!3d10.788128101144977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d31ad%3A0xf542d6eb7a870a56!2sPalakkad%2C%20Kerala!5e1!3m2!1sen!2sin!4v1733557319501!5m2!1sen!2sin"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="btn">
                <i>
                  <IoMdLocate />
                </i>
                Locate in map
              </div>
            </div>
          </div>
          {/*col1*/}
        </div>
      </div>
    </div>
    </>
  );
};

export default contact;
