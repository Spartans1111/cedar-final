import React, { useState } from "react";
import './quoteform.css';
import { GoArrowRight } from "react-icons/go";

const Quoteform = () => {
  // Initialize the selectedOption state using useState
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the state when option changes
  };

  return (
    <div className='quoteform'>
      <h3>GET A FREE QUOTATION</h3>
      <form action="">
        <input type="text" placeholder='Enter your name' className='inputfeild' required/>
        <input type="number" placeholder='Enter your WhatsApp number' className='inputfeild' required/>
        <input type="email" placeholder='Enter your email ID' className='inputfeild' />
        <input type="text" placeholder='Enter your city or town' className='inputfeild'/>
       
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectChange}
          required
        >
          {/* This will act as the placeholder */}
          <option value="" disabled>Service Required</option>
          <option value="Option 1">Home Interiors</option>
          <option value="Option 2">Modular Kitchen</option>
          <option value="Option 3">Office/Commercial Interiors</option>
          <option value="Option 4">Custom Interior Units (e.g., study tables, storage units, TV units)</option>
          <option value="Option 5">Custom Packages (e.g., 2BHK, 3BHK)</option>
        </select>

        <button className='submit'>
          Get Quotation<span>{<GoArrowRight />}</span>
        </button>
      </form>
    </div>
  );
}

export default Quoteform;