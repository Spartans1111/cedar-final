import React, { useState } from 'react';
import './choose.css';
import c1 from '../../../images/c1 (1).png';
import c2 from '../../../images/c1 (2).png';
import c3 from '../../../images/c1 (3).png';
import c4 from '../../../images/c1 (4).png';
import c5 from '../../../images//choosedetails.png';
import Popup from '../../pup/popup';

const Choose = () => {

    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const openPopup = () => {
      setShowPopup(true); // Function to open the popup
    };
  
    const closePopup = () => {
      setShowPopup(false); // Function to close the popup
    };

  return (
    <div className='whychooseus'>
        <div className="choose-inner">
        <div className="chooseheader">
            <div className="choose-headers">
                <h3>DESIGNED WITH YOU IN MIND</h3>
                <h2 className="header2"><span>Why Choose</span> Cedar Interiors?</h2>
            </div>
            <p>Cedar Interiors stands apart for its commitment to quality, innovation, and customer satisfaction. With decades of experience, a reputation for reliability, and designs that redefine elegance, we bring your dream spaces to life. Choose Cedar Interiors for unmatched craftsmanship and a seamless design experience tailored just for you.</p>
        </div>
      
<div className="chose-content">
    <div className="choose-content-col">
        <div className="blurb">
            <img src={c1} alt="choose" />
            <p>Reliability</p>
        </div>
        <div className="blurb">
            <img src={c2} alt="choose" />
            <p>Dedication </p>
        </div>
    </div>
    <div className="choose-content-col">
    <div className="blurb">
            <img src={c3} alt="choose" />
            <p>Integrity</p>
        </div>
        <div className="blurb">
            <img src={c4} alt="choose" />
            <p>Innovation</p>
        </div>
    </div>
    <div className="choose-content-col">
        <div className="choose-details">
            <img src={c5} alt="" />
            <div className="choose-contactus">
                <div className="choosecontact-inner">
                    <button onClick={openPopup}>Get Quote</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
       </div>
       <Popup showPopup={showPopup} closePopup={closePopup} />
        </div>
        
  )
}

export default Choose;