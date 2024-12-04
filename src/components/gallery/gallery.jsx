import React from 'react';
import './gallery.css';
import galimg from '../../images/gallery/ns.png';
import Gallery1 from './gallery1/gallery1';
import Gallery2 from './gallery2/gallery2';
import Gallery3 from './gallery3/gallery3';


const gallery = () => {
  return (
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
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery1/>
       </div>

{/*gallery-row-2*/}      
<div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Living Room Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
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
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery3/>
       </div>

     {/*gallery-row-4*/}      
     <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Bedroom Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
       </div>    


     {/*gallery-row-5*/}      
     <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Dining Room Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
       </div>    


     {/*gallery-row-6*/}      
     <div className="gallery-row">
        <div className="galley-row-content">
            <div className="galllry-col">
            <h2 className="header2">Kids Room Interior Design <span>Showcase </span></h2>
            <p>Discover the artistry of Cedar Interiors through our curated gallery. </p>
                <div className="gal-hr"></div>
            </div>
            <div className="galllry-col">
                <div className="galleryserv">
                <img src={galimg} alt="" />
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
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
                <p>need services</p>
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
                <p>need services</p>
                </div>
                          </div>
        </div>
<Gallery2/>
       </div>    
 


    </div>
  )
}

export default gallery