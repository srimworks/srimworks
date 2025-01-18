import React, { useState } from "react";
import "../styles/navbar.css"; // Import the CSS file for styling
import { IMAGES } from "../utils/images";
import { Link } from "react-router-dom";
import { NavItems } from "../utils/constsnts";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index); 
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null); 
  };

  const handleItemClick = () => {
    setActiveDropdown(null); 
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">
            <img src={IMAGES.NAV_LOGO} alt="Logo" className="logo-image" />
          </Link>
          <img src={IMAGES.MENU_ICON} alt="Menu_Icon" className="menu-icon" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        </div>

        <div className={`navbar-items ${isMobileMenuOpen ? "active":""} `}>
          {NavItems.map((item, index) => (
            <div
              key={index}
              className="navbar-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={()=> setIsDropDownMenuOpen(!isDropDownMenuOpen)}
            >
              <button className="nav-button" >
                {item.title}
                <img
                  src={IMAGES.CHEVRON_DOWN}
                  alt="Chevron"
                  className="chevron-image"
                />
              </button>
              {activeDropdown === index && (
                <div id={`${isDropDownMenuOpen && isMobileMenuOpen ? "nav-dropdown-active":"nav-dropdown"}`}>
                  <div id="nav-dropdown-container">
                    <h1 id="dropdown-heading">{item.title}</h1>
                    <div className="dropdown">
                      {item.links.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.to}
                          className="dropdown-item"
                          onClick={handleItemClick}
                          // onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
                  <div className="navbar-item">
            <Link to="/careers" className="link">
              <button className="nav-button" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>Careers</button>
            </Link>
          </div>
        </div>

        <div className={`${isMobileMenuOpen ? "navbar-button-active":"navbar-button" }`}>
          <Link to="/contact-us" className="link" >
            <button className="primary-button" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>Schedule a Call</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;