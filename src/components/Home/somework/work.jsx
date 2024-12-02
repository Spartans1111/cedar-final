import React from 'react';
import './work.css';
import work1 from '../../../images/work/work1.png';
import work2 from '../../../images/work/work2.png';
import work3 from '../../../images/work/work3.png';
import work4 from '../../../images/work/work4.png';
import work1black from '../../../images/work/work1black.png';
import work2black from '../../../images/work/work2black.png';
import work3black from '../../../images/work/work3black.png';
import work4black from '../../../images/work/work4black.png';


const work = () => {
  return (
    <div className='work'>
      <h2 className="header2">Showcasing <span>Our Creations</span></h2>
      <p>Explore interiors crafted with elegance and purpose, designed to fit your unique lifestyle.</p>
      <div className="hr"></div>

      <div className="workimg">
        <div className="workimgcol">
          <img className="black-image" src={work1black} alt="Kitchen Designs Black" />
          <img className="normal-image" src={work1} alt="Kitchen Designs Normal" />
          <div className="workcontent">Home Interiors</div>
        </div>

        <div className="workimgcol">
          <img className="black-image" src={work2black} alt="Bedroom Designs Black" />
          <img className="normal-image" src={work2} alt="Bedroom Designs Normal" />
          <div className="workcontent">Modular Kitchens</div>
        </div>

        <div className="workimgcol">
          <img className="black-image" src={work3black} alt="Living Designs Black" />
          <img className="normal-image" src={work3} alt="Living Designs Normal" />
          <div className="workcontent">Office Interiors</div>
        </div>

        <div className="workimgcol">
          <img className="black-image" src={work4black} alt="Dining Designs Black" />
          <img className="normal-image" src={work4} alt="Dining Designs Normal" />
          <div className="workcontent">Custom Designed Interior Units</div>
        </div>
      </div>
    </div>
  );
}

export default work;
