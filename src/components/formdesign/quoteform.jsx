import React from 'react';
import './quoteform.css';
import { GoArrowRight } from "react-icons/go";

const quoteform = () => {
  return (

    <div className='quoteform'>
        <h3>GET A FREE QUOTATION</h3>
        <form action="">
          <input type="text" placeholder='Enter your name' className='inputfeild' />
          <input type="number"placeholder='Enter your WhatsApp number' className='inputfeild' />
          <input type="text" placeholder='Project Subject' className='inputfeild' />
          <input type="email" placeholder='Enter your email ID' className='inputfeild' />
          <input type="text" placeholder='Enter your city or town' className='inputfeild'/>
          <button className='submit'>GET QUOTATION <span>{<GoArrowRight/>}</span></button>
        </form>

    </div>
    
  )
}
export default quoteform;

