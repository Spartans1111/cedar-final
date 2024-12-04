import React from 'react';
import './quoteform.css';
import { GoArrowRight } from "react-icons/go";

const Contactform = () => {
  return (

    <div className='quoteform'>
        <h3 style={{textAlign:"center"}}>CONTACT US</h3>
        <form action="">
          <input type="text" placeholder='Name' className='inputfeild' />
          <input type="email" placeholder='Email Address' className='inputfeild' />
          <input type="number"placeholder='Phone Number' className='inputfeild' />
          <textarea type="text" placeholder='Message/Inquiry' className='inputfeild'></textarea>
          <button className='submit'> Submit Inquiry <span>{<GoArrowRight/>}</span></button>
        </form>

    </div>
    
  )
}
export default Contactform;

