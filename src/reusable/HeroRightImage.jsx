import React from "react";
import "../styles/heroRight.css";
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const HeroRightSection = ({ image, header, heading, title, desc, btnText }) => {
  return (
    <section className="hero-right-section">
      <div className="hero-right-overlay">
        <div className="hero-right-content">
          <div className="hero-right-content-top">
            <h1 className="hero-right-header">{header || heading}</h1>
            <h2 className="hero-right-title">{title}</h2>
          </div>
          {desc && <p className="hero-right-description">{desc}</p>}
          {btnText && btnText.length > 0 && (
            <Link to="/contact-us" className="link">
              <button className="secondary-button">{btnText}</button>
            </Link>
          )}
        </div>
      </div>
      <img src={image} className="hero-right-section-image" alt={title || header || "SRIM WORKS Solutions"} decoding="async" />
    </section>
  );
};

export default HeroRightSection;
