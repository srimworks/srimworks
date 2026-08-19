import React, { useState } from "react";
import "../styles/navbar.css";
import { IMAGES } from "../utils/images";
import { NavItems } from "../utils/constsnts";

const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileAccordion = (index) => {
    setOpenMobileAccordion(openMobileAccordion === index ? null : index);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={IMAGES.NAV_LOGO} alt="SRIM WORKS Logo" className="logo-image" />
          </Link>
          <button 
            type="button"
            className="menu-icon-btn" 
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src={IMAGES.MENU_ICON} alt="" className="menu-icon" />
          </button>
        </div>

        <div className={`navbar-items ${isMobileMenuOpen ? "active" : ""}`}>
          {NavItems.map((item, index) => (
            <div
              key={index}
              className={`navbar-item ${activeDropdown === index ? "dropdown-open" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className="nav-button"
                onClick={() => toggleMobileAccordion(index)}
                aria-expanded={activeDropdown === index || openMobileAccordion === index}
              >
                {item.title}
                <img
                  src={IMAGES.CHEVRON_DOWN}
                  alt=""
                  className={`chevron-image ${openMobileAccordion === index ? "rotated" : ""}`}
                />
              </button>

              {/* Desktop Mega Menu Dropdown */}
              <div className={`nav-dropdown ${activeDropdown === index ? "active" : ""}`}>
                <div className="nav-dropdown-wrapper">
                  {item.groups ? (
                    <div className="dropdown-mega-groups">
                      {item.groups.map((grp, gIdx) => (
                        <div key={gIdx} className="dropdown-group-col">
                          <h4 className="dropdown-group-title">{grp.groupTitle}</h4>
                          <div className="dropdown-group-links">
                            {grp.links.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                to={link.to}
                                className="dropdown-item-card"
                                onClick={handleLinkClick}
                              >
                                <span className="dropdown-item-label">{link.label}</span>
                                {link.desc && <span className="dropdown-item-desc">{link.desc}</span>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="dropdown-grid-columns">
                      <div className="dropdown-column-header">
                        <h4 className="dropdown-group-title">{item.title}</h4>
                      </div>
                      <div className="dropdown-grid-links">
                        {item.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            to={link.to}
                            className="dropdown-item-card"
                            onClick={handleLinkClick}
                          >
                            <span className="dropdown-item-label">{link.label}</span>
                            {link.desc && <span className="dropdown-item-desc">{link.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Accordion Dropdown */}
              {openMobileAccordion === index && (
                <div className="mobile-dropdown-accordion">
                  {item.groups ? (
                    item.groups.map((grp, gIdx) => (
                      <div key={gIdx} className="mobile-group-block">
                        <span className="mobile-group-title">{grp.groupTitle}</span>
                        {grp.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            to={link.to}
                            className="mobile-dropdown-link"
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))
                  ) : (
                    item.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        to={link.to}
                        className="mobile-dropdown-link"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="navbar-item">
            <Link to="/careers" className="link" onClick={handleLinkClick}>
              <button type="button" className="nav-button">Careers</button>
            </Link>
          </div>
        </div>

        <div className={`navbar-button ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/contact-us" className="link" onClick={handleLinkClick}>
            <button type="button" className="primary-button">Schedule a Call</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;