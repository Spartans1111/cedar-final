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
        <li className={isActive("/about-cedar-interiors") ? "active" : ""}>
          <Link to="/about-cedar-interiors" onClick={closeMenu}>
            OUR STORY
          </Link>
        </li>
        <li className={`dropdown ${isActive("/service") ? "active" : ""}`}>
          <Link  onClick={toggleDropdown}>
            OUR SERVICES <FaChevronDown />
          </Link>
          {/* Dropdown toggle for mobile */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <div className={isActive("/home-interiors") ? "active" : ""}>
              <Link to="/home-interiors" onClick={closeMenu}>
                {" "}
                HOME INTERIORS{" "}
              </Link>
            </div>
            <div className={isActive("/living-room-interiors") ? "active" : ""}>
              <Link to="/living-room-interiors" onClick={closeMenu}>
                LIVING ROOM INTERIORS
              </Link>
            </div>
            <div className={isActive("/modular-kitchens") ? "active" : ""}>
              <Link to="/modular-kitchens" onClick={closeMenu}>MODULAR KITCHEN</Link>
            </div>
            <div className={isActive("/bedroom-interiors") ? "active" : ""}>
              <Link to="/bedroom-interiors" onClick={closeMenu}>BED ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/dining-room-interiors") ? "active" : ""}>
              <Link to="/dining-room-interiors" onClick={closeMenu}>DINING ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/kids-room-interiors") ? "active" : ""}>
              <Link to="/kids-room-interiors" onClick={closeMenu}>KIDS ROOM INTERIORS</Link>
            </div>
            <div className={isActive("/office-interiors") ? "active" : ""}>
              <Link to="/office-interiors" onClick={closeMenu}>
                OFFICE ROOM INTERIORS
              </Link>
            </div>
            <div className={isActive("/custom-interior-units") ? "active" : ""}>
              <Link to="/custom-interior-units" onClick={closeMenu}>
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
            <div className={isActive("/interior-designers-palakkad") ? "active" : ""}>
              <Link to='/interior-designers-palakkad' onClick={closeMenu}>PALAKKAD</Link>
            </div>
            <div className={isActive("/interior-designers-coimbatore") ? "active" : ""}>
              <Link to='/interior-designers-coimbatore' onClick={closeMenu}>COIMBATORE</Link>
            </div>
            <div className={isActive("/interior-designers-cochin") ? "active" : ""}>
              <Link to="/interior-designers-cochin" onClick={closeMenu}>
                {" "}
                COCHIN{" "}
              </Link>
            </div>
            <div className={isActive("/interior-designers-tiruvalla") ? "active" : ""}>
              <Link to='/interior-designers-tiruvalla' onClick={closeMenu}>TIRUVALLA</Link>
            </div>
          </div>
        </li>
        <li className={isActive("/2bhk-3bhk-interior-packages") ? "active" : ""}>
          <Link to="/2bhk-3bhk-interior-packages" onClick={closeMenu}>
            OUR PACKAGES
          </Link>
        </li>
        <li className={isActive("/gallery") ? "active" : ""}>
          <Link to="/gallery" onClick={closeMenu}>
            GALLERY
          </Link>
        </li>
        <li className={isActive("/contact-us") ? "active" : ""}>
          <Link to="/contact-us" onClick={closeMenu}>
            CONTACT US
          </Link>
        </li>

        {/* Phone Button inside the menu when open */}
        {open && (
          <div className="navbtn-container-mobile">
            <button className="navbtn navbtn-phone">
              <a href="tel:+919633737722">
                <span>
                  <MdPhone />
                </span>
                +91 9633737722
              </a>
            </button>
          </div>
        )}
      </ul>

      {/* Phone Button for Desktop */}
      <div className="navbtn-container">
        <button className="navbtn navbtn-phone">
          <a href="tel:+919633737722">
            <span>
              <MdPhone />
            </span>
            +91 9633737722
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
