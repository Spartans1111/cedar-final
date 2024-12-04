import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../../images/cedar-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Close the dropdown when clicking outside the dropdown menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest(".dropdown") === null) {
        setDropdownOpen(false); // Close the dropdown if clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/" className="logo-link">
          <h1>CEDAR INTERIORS</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={open ? "navlinkactive" : ""}>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <Link to="/about" onClick={closeMenu}>
            OUR STORY
          </Link>
        </li>
        <li className={`dropdown ${isActive("/service") ? "active" : ""}`}>
          <Link  onClick={toggleDropdown}>
            OUR SERVICES <FaChevronDown />
          </Link>
          {/* Dropdown toggle for mobile */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <div className={isActive("/homeinterior") ? "active" : ""}>
              <Link to="/homeinterior" onClick={closeMenu}>
                {" "}
                HOME INTERIORS{" "}
              </Link>
            </div>
            <div className={isActive("/livingservice") ? "active" : ""}>
              <Link to="/livingservice" onClick={closeMenu}>
                LIVING ROOM INTERIORS
              </Link>
            </div>
            <div className={isActive("/modularservice") ? "active" : ""}>
              <Link to="/modularservice" onClick={closeMenu}>MODULAR KITCHEN</Link>
            </div>
            <div className={isActive("/bedroom") ? "active" : ""}>
              <Link to="/bedroom" onClick={closeMenu}>BED ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/diningroom") ? "active" : ""}>
              <Link to="/diningroom" onClick={closeMenu}>DINING ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/kidsroom") ? "active" : ""}>
              <Link to="/kidsroom" onClick={closeMenu}>KIDS ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/officeservice") ? "active" : ""}>
              <Link to="/officeservice" onClick={closeMenu}>
                OFFICE ROOM INTERIORS
              </Link>
            </div>
            <div className={isActive("/customservice") ? "active" : ""}>
              <Link to="/customservice" onClick={closeMenu}>
                CUSTOM INTERIOR UNITS
              </Link>
            </div>
          </div>
        </li>
        <li className={`dropdown ${isActive("/location") ? "active" : ""}`}>
          <Link onClick={toggleDropdown}>
            OUR LOCATIONS <FaChevronDown />
          </Link>
          {/* Dropdown toggle for mobile */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <div className={isActive("/location") ? "active" : ""}>
              <Link to="/location" onClick={closeMenu}>
                {" "}
                COCHIN{" "}
              </Link>
            </div>
            <div className={isActive("/palakkad") ? "active" : ""}>
              <Link to='/palakkad' onClick={closeMenu}>PALAKKAD</Link>
            </div>
            <div className={isActive("/coimbatore") ? "active" : ""}>
              <Link to='/coimbatore' onClick={closeMenu}>COIMBATORE</Link>
            </div>
            <div className={isActive("/tiruvalla") ? "active" : ""}>
              <Link to='/tiruvalla' onClick={closeMenu}>TIRUVALLA</Link>
            </div>
          </div>
        </li>
        <li className={isActive("/packages") ? "active" : ""}>
          <Link to="/packages" onClick={closeMenu}>
            OUR PACKAGES
          </Link>
        </li>
        <li className={isActive("/gallery") ? "active" : ""}>
          <Link to="/gallery" onClick={closeMenu}>
            GALLERY
          </Link>
        </li>
        <li className={isActive("/contact") ? "active" : ""}>
          <Link to="/contact" onClick={closeMenu}>
            CONTACT US
          </Link>
        </li>

        {/* Phone Button inside the menu when open */}
        {open && (
          <div className="navbtn-container-mobile">
            <button className="navbtn navbtn-phone">
              <a href="tel:+919400989363">
                <span>
                  <MdPhone />
                </span>
                +91 940 098 9363
              </a>
            </button>
          </div>
        )}
      </ul>

      {/* Phone Button for Desktop */}
      <div className="navbtn-container">
        <button className="navbtn navbtn-phone">
          <a href="tel:+919400989363">
            <span>
              <MdPhone />
            </span>
            +91 940 098 9363
          </a>
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className="humbargur">
        {open ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Header;
