import React, { useState } from 'react';
import '../styles/navbar.css'; // Import the CSS file for styling
import { IMAGES } from '../utils/images';

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
      <img src={IMAGES.NAV_LOGO} alt="Logo" className="logo-image" />
    </div>

    {/* <!-- Navbar Items --> */}
    <div className="navbar-items">
      <div className="navbar-item">
        <button className="nav-button">Who We Are
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <a href="#" className="dropdown-item">Dropdown 1</a>
          <a href="#" className="dropdown-item">Dropdown 2</a>
        </div>
      </div>

      <div className="navbar-item">
        <button className="nav-button">Practices
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <a href="#" className="dropdown-item">Dropdown 1</a>
          <a href="#" className="dropdown-item">Dropdown 2</a>
        </div>
      </div>
      <div className="navbar-item">
        <button className="nav-button">Offerings
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <a href="#" className="dropdown-item">Dropdown 1</a>
          <a href="#" className="dropdown-item">Dropdown 2</a>
        </div>
      </div>

      <div className="navbar-item">
        <button className="nav-button">Industries
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <a href="#" className="dropdown-item">Dropdown 1</a>
          <a href="#" className="dropdown-item">Dropdown 2</a>
        </div>
      </div>
      <div className="navbar-item">
        <button className="nav-button">Resources
        <img src={IMAGES.CHEVRON_DOWN} alt="Chevron" className="chevron-image" />
        </button>
        <div className="dropdown">
          <a href="#" className="dropdown-item">Dropdown 1</a>
          <a href="#" className="dropdown-item">Dropdown 2</a>
        </div>
      </div>

      <div className="navbar-item">
        <button className="nav-button">Careers</button>

      </div>
    </div>

    {/* <!-- Right Button --> */}
    <div className="navbar-button">
      <button className="primary-button">Schedule a Call</button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
