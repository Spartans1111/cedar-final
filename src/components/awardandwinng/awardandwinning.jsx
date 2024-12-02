import React from 'react';
import './awardandwinng.css';
import aw1 from '../../images/awandwin/aw1.png';
import aw2 from '../../images/awandwin/aw2.png';

const Awardandwinning = () => {
  return (
    <div className='awardandwinnig'> <h2 className='header2'><span>Beautiful Homes Begin</span></h2>
    <h6>with Cedar Interiors</h6>
    <p>Cedar Interiors, headquartered in Palakkad, Kerala, specializes in crafting premium, customized furniture and interior solutions for homes, offices, and institutions.</p>
<p>We cater to both commercial and residential projects, offering turn-key solutions for hotels, offices, and schools. With cutting-edge infrastructure and a commitment to sustainability, our designs are energy-efficient and eco-friendly.</p>
<p>Choose Cedar Interiors to transform your spaces with innovative designs, unmatched craftsmanship, and exceptional quality.</p>

<div className="awardwiningblurb">
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw2} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>1000+</h5>
            <p>Dream Spaces Designed</p>
        </div>
    </div>
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw1} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Trusted by 500+
          </h5>
            <p>Happy Clients</p>
        </div>
    </div>
</div>
</div>
  )
}

export default Awardandwinning;