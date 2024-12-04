import React from 'react';
import './keralapkg.css';
import kpg1 from '../../../images/package/keralabg1.png'
import kpg2 from '../../../images/package/keralabg2.png'

const keralapkg = () => {
  return (
    <div className='Keralapkg'>
<div className="kerlapkgcol">
    <div className="hrline"></div>
    <h2 className="header2"><span>Discover Tailored Home Interior Packages</span></h2>
    <p>Cedar Interiors presents thoughtfully curated home interior packages designed to elevate your living experience. These packages offer a perfect blend of functionality and elegance, featuring high-quality furniture and customized designs that cater to your unique style.
Whether you’re furnishing a compact apartment or a spacious home, our packages provide comprehensive solutions to transform your space into a haven of comfort and style. Enjoy premium craftsmanship and timeless designs that enhance every corner of your home.
</p>
<img src={kpg2} alt="" />
</div>
{/*col2*/}
<div className="kerlapkgcol">
<img src={kpg1} alt="" />
    <div className="hrline"></div>
    <h2 className="header2"><span>Comprehensive Interior Solutions for Your Home</span></h2>
    <p>Our home interior packages are crafted to meet diverse needs, ensuring your space reflects your personality while maximizing practicality. From modular kitchens to cozy bedrooms, each package is designed with meticulous attention to detail and high-quality finishes.
Experience the convenience of complete interior solutions under one package. With Cedar Interiors, you gain access to innovative designs, durable materials, and a seamless process that makes turning your house into a dream home effortless.
</p>

</div>

    </div>
  )
}

export default keralapkg