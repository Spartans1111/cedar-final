import React from 'react';
import { useState } from 'react';
import './gallery.css';
import galimg from '../../images/gallery/ns.png';
import Gallery1 from './gallery1/gallery1';
import Gallery2 from './gallery2/gallery2';
import Gallery3 from './gallery3/gallery3';
import Popup from '../pup/popup';
import { Helmet } from "react-helmet-async";

const Gallery = () => {
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
        <title>Gallery - Cedar Interiors</title>
        <meta name="description" content="Browse Cedar Interiors’ portfolio. Explore inspiring living rooms, modular kitchens, bedrooms, and custom interiors from our past projects." />
      </Helmet>
    <div className='gallery'>
       <div className="galleryhero">
        <h1>GAllery</h1>
       </div>
       {/* <div className="topgallry">
        <div className="contact-hr"></div>
        <h4>CEDAR INTERIORS</h4>
        <h2 className="header2"><span>Timely Project Completion Ensuring Satisfaction</span></h2>
        <p>Indulge in the ultimate relaxation and adventure at our exclusive resorts. Book now and
        experience unparalleled comfort, stunning views, and world-class amenities.</p>
       </div> */}

 {/*gallery-row-1*/}      
       <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
                <h2 className="header2">Home Interior Design <span>Showcase </span></h2>
                <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p onClick={openPopup}>need services</p>
                </div>
                          </div>
        </div>
<Gallery1/>
       </div>


       {/*gallery-row-3*/}      
       <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Modular Kitchen Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p onClick={openPopup}>need services</p>
                </div>
                          </div>
        </div>
<Gallery3/>
       </div>
 


     {/*gallery-row-7*/}      
     <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Office Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p onClick={openPopup}>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
       </div>    

     {/*gallery-row-8*/}      
     <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Custom Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p onClick={openPopup}>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
       </div>    
 

       <Popup showPopup={showPopup} closePopup={closePopup} />
    </div>
    </>
  )
}

export default Gallery