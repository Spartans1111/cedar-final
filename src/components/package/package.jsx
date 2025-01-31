import React from 'react';
import './package.css';
import package1 from '../../images/pakage1.png';
import package2 from '../../images/package2.png';
import { MdCurrencyRupee } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const Package = () => {
  return (
    <div className='package'>
        <h2 className='header2'>Exclusive Home <span>Interior Packages</span></h2>
        <p className='pricesubhead'>Discover tailor-made home interior packages designed to suit your style, space, and budget. </p>
      <div className="hr"></div>
        <div className="package-price">
            <div className="pricelist">
                <img src={package1} alt="package" />
                <p className='bhk'>2 BHK</p>
                <p className='price'><i><MdCurrencyRupee /></i>5.25LAKH ONLY <span>7.8LAKH</span></p>
                <ul>
                    <li>2 Wardrobe</li>
                    <li>2 Dressing Table</li>
                    <li>2 Cots/Bed Frames</li>
                    <li>6 Seater Sofa Set</li>
                    <li>TV Unit with Paneling</li>
                    <li>Dining Table with 4 Chair</li>
                    <li>Modular Kitchen with Basic Accessories</li>
                </ul>
                <button className="pricebutton btn1">Get 2 BHK Package<span>{<GoArrowRight/>}</span></button>
            </div>

            {/*pricelist2--*/}
            <div className="pricelist pricelist2">
            <img src={package2} alt="package" />
            <p className='bhk'>3 BHK</p>
                <p className='price'><i><MdCurrencyRupee /></i>6.25LAKH ONLY <span>8.8LAKH</span></p>
                <ul>
                    <li>3 Wardrobe</li>
                    <li>3 Dressing Table</li>
                    <li>3 Cots/Bed Frames</li>
                    <li>6 Seater Sofa Set</li>
                    <li>TV Unit with Paneling</li>
                    <li>6 Seater Dining Table</li>
                    <li>Modular Kitchen with Basic Accessories</li>
                </ul>
                <button className="pricebutton btn1">Get 3 BHK Package<span>{<GoArrowRight/>}</span></button>
            </div>
        </div>

    </div>
  )
}

export default Package