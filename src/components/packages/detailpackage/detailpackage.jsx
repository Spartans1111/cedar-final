import React from 'react';
import './detailpackage.css'
import pk1 from '../../../images/pakage1.png';
import pk2 from '../../../images/herobanner3.png';
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const detailpackage = () => {
  return (
    <div className='detailpackage'>
        <h2 className="header2">DETAILED PACKAGE VIEW</h2>
        <p>Explore comprehensive home interior packages crafted with precision and passion. </p>
        <div className="hr"></div>
        
        <div className="detailofpackage">
           <div className="detailsofbackageimg">
            <img src={pk1} alt="" />
            <p className='bhk'>2 BHK</p>
           </div>
           <div className="detailsofpackagecontent">
           <p className='price'><i><MdCurrencyRupee /></i>5.25LAKH ONLY <span>7.8LAKH</span></p>
           {/*packagesdetailscontent*/}
           <div className="package-blurbs">
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">2 Wardrobe</h5>
                    <p>Spacious, soft-close wardrobes designed for maximum storage.</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">2 Dressing Table</h5>
                    <p>Includes ample drawer space for organizing personal essentials.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">2 Cots/Bed Frames</h5>
                    <p>Sturdy bed frames made with premium wood for durability.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead"> 6 Seater Sofa Set</h5>
                    <p>Upholstered in premium fabric for enhanced comfort and durability.</p>
                </div>
            </div>
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">TV Unit with Paneling</h5>
                    <p>Sleek, modern design with concealed cable management.</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead"> Dining Table with 4 Chair</h5>
                    <p>Made with a high-quality finish for an elegant dining experience.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">Modular Kitchen with Basic Accessories</h5>
                    <p>Efficient layout designed for optimal functionality and space utilization.</p>
                </div>
               
            </div>
           </div>
           <button className="btn1">NEED SERVICES <span><FaArrowRight /></span></button>
           </div>

        </div>

  {/*detailpackage2*/}      
  <div className="detailofpackage">
           <div className="detailsofbackageimg">
            <img src={pk2} alt="" />
            <p className='bhk'>3 BHK</p>
           </div>
           <div className="detailsofpackagecontent">
           <p className='price'><i><MdCurrencyRupee /></i>6.25LAKH ONLYY <span>8.8LAKH</span></p>
           {/*packagesdetailscontent*/}
           <div className="package-blurbs">
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">3 Wardrobe</h5>
                    <p>Spacious, triple-door wardrobes designed for enhanced storage capacity.</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead"> 3 Dressing Table</h5>
                    <p>Comes with extended storage drawers for better organization of essentials.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">3 Cots/Bed Frames</h5>
                    <p>Expertly crafted bed frames with reinforced support for longevity.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead"> 6 Seater Sofa Set</h5>
                    <p>Luxurious seating with high-density foam for unmatched comfort.</p>
                </div>
            </div>
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">TV Unit with Paneling</h5>
                    <p>Functional design with smart storage options for gadgets and accessories.</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">6 Seater Dining Table</h5>
                    <p>Crafted with durable materials to support family meals and gatherings.</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">Modular Kitchen with Basic Accessories</h5>
                    <p>Tailored layouts with premium pull-out trays, bottle racks, and cutlery organizers.</p>
                </div>
               
            </div>
           </div>
           <button className="btn1">NEED SERVICES <span><FaArrowRight /></span></button>
           </div>

        </div>


    </div>
  )
}

export default detailpackage