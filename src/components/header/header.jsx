import React, { useState } from "react";
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
          <Link to="/service" onClick={toggleDropdown}>
            OUR SERVICES <FaChevronDown />
          </Link>
          {/* Dropdown toggle for mobile */}
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <div
              className="has-submenu"
            >
             <Link to="/homeinterior"> HOME INTERIORS </Link>

            </div>
            <div><Link to='/livingservice'>LIVING ROOM INTERIORS</Link></div>
            <div><Link to='/modularservice'>MODULAR KITCHEN</Link></div>
            <div className="has-submenu">
              <Link to="/bedroom">BED ROOM INTERIORS</Link>
            </div>
            <div><Link to="/diningroom">DINING ROOM INTERIORS</Link></div>
            <div><Link to='/kidsroom'>KIDS ROOM INTERIORS</Link></div>
            <div><Link to='/officeservice'>OFFICE ROOM INTERIORS</Link></div>
            <div><Link to='/customservice'>CUSTOM INTERIOR UNITS</Link></div>
          </div>
        </li>
        <li className={isActive("/locations") ? "active" : ""}>
          <Link to="/locations" onClick={closeMenu}>
            OUR LOCATIONS
          </Link>
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
