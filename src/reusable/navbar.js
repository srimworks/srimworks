import React, { useState } from 'react';
import '../styles/navbar.css'; // Import the CSS file for styling
import { IMAGES } from '../utils/images';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false); // State to toggle the mobile menu

  // Toggle mobile menu on small screens
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
<nav className="navbar">
  <div className="navbar-content">
    {/* <!-- Left Logo --> */}
    <div className="navbar-logo">
     <Link to="/"><img src={IMAGES.NAV_LOGO} alt="Logo" className="logo-image" /></Link>
    </div>

    {/* <!-- Navbar Items --> */}
    <div className="navbar-items">
      <div className="navbar-item">
        <button className="nav-button">Who We Are
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <Link to="/about-us" className="dropdown-item">About US</Link>
          <Link to="/leadership-team" className="dropdown-item">Leadership Team</Link>
          <Link to="/pressroom" className="dropdown-item">Press Room</Link>
          <Link to="/carrers" className="dropdown-item">Carrers </Link>
        </div>
      </div>

      <div className="navbar-item">
        <button className="nav-button">Practices
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
        <Link to="/design" className="dropdown-item">Design</Link>
          <Link to="/digital-engineering" className="dropdown-item">Digital Engineering</Link>
          <Link to="/big-data" className="dropdown-item">Big Data Analytics</Link>
          <Link to="/AI&ML" className="dropdown-item">AI & ML </Link>
          <Link to="/open-source" className="dropdown-item">Open Source Technologies</Link>
          <Link to="/microsoft-technologies" className="dropdown-item">Microsoft Technologies</Link>
          <Link to="/cloud-computing" className="dropdown-item">Cloud Computing</Link>
          <Link to="/erp-crm" className="dropdown-item">ERP and CRM Solutions</Link>
        </div>
      </div>
      <div className="navbar-item">
        <button className="nav-button">Offerings
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
        <Link to="/innovation-research" className="dropdown-item">Innovation & Research Lab</Link>
          <Link to="/prod-dev-lifecycle" className="dropdown-item">Prod Dev Lifecycle</Link>
          <Link to="/lean-product-engineering" className="dropdown-item">Lean Product Engineering</Link>
          <Link to="/professional-services" className="dropdown-item">Professional Services</Link>
          <Link to="/channel-partners" className="dropdown-item">Channel Partners</Link>
        </div>
      </div>

      <div className="navbar-item">
        <button className="nav-button">Industries
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
        <Link to="/marine" className="dropdown-item">Marine</Link>
          <Link to="/logistics" className="dropdown-item">Logistics</Link>
          <Link to="/real-estate" className="dropdown-item">Real Estate</Link>
          <Link to="/retail" className="dropdown-item">Retail</Link>
          <Link to="/e-commerce" className="dropdown-item">ECommerce</Link>
          <Link to="/media-entertainment" className="dropdown-item">Media and Entertainment</Link>
          <Link to="/fmcg" className="dropdown-item">FMCG</Link>
          <Link to="/health-care" className="dropdown-item">Health Care</Link>
          <Link to="/bfsi" className="dropdown-item">BFSI</Link>

        </div>
      </div>
      <div className="navbar-item">
        <button className="nav-button">Resources
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
        <Link to="/blogs" className="dropdown-item">Blogs</Link>
        <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
        <Link to="/submit-reviews" className="dropdown-item">Submit Your Reviews</Link>

        </div>
      </div>

      <div className="navbar-item">
        <Link to="/carrers"><button className="nav-button">Careers</button></Link>

      </div>
    </div>

    {/* <!-- Right Button --> */}
    <div className="navbar-button">
      <Link to="/contact-us"><button className="primary-button">Schedule a Call</button></Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
