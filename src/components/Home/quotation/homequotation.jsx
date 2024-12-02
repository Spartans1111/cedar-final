import React, { useState } from "react";
import Quotationslider from "./quotationslider";
import "./homequotation.css";
import { GoArrowRight } from "react-icons/go";
const Homequotation = () => {
  // Initialize the selectedOption state using useState
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the state when option changes
  };
  return (
    <div className="homequtation">
      <div className="homequationslider">
        <div className="slide">
          {" "}
          <Quotationslider />
        </div>
      </div>
      <div className="homequotationcontent">
        <p>Let’s Build Your Dream Space</p>
        <h2 className="header2">
        Get your Personalized <span>Quotation</span>
        </h2>
        <form action="">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="inputfeild"
          />

<input
            type="text"
            placeholder="Enter your WhatsApp number"
            className="inputfeild"
          />

<input
            type="email"
            placeholder="Enter your email ID"
            className="inputfeild"
          />

          <input
            type="text"
            placeholder="Enter your city or town"
            className="inputfeild"
          />


          <p className="requsting">
            <label>Service Required - </label>{" "}
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              required
            >
              <option value="director">Select a service</option>
              <option value="Option 1">Home Interiors</option>
              <option value="Option 2">Modular Kitchen</option>
              <option value="Option 3">Office/Commercial Interiors</option>
              <option value="Option 4">Custom Interior Units (e.g., study tables, storage units, TV units)</option>
              <option value="Option 5">Custom Packages (e.g., 2BHK, 3BHK)</option>
            </select>
          </p>

          <button className="submit btn1">
            GET QUOTATION <span>{<GoArrowRight />}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homequotation;
