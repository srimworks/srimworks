import React from "react";
import "../styles/heroRight.css";

const HeroRightSection = ({ image, header,heading, title, desc, btnText }) => {
  return (
    <section className="hero-right-section">
      <div className="hero-right-overlay">
        <div className="hero-right-content">
          <div className="hero-right-content-top">
            <h1 className="hero-right-header">{header || heading}</h1>
            <h1 className="hero-right-title">{title}</h1>
          </div>
          {desc && <p className="hero-right-description">{desc}</p>}
          {btnText.length > 0 && (
            <button className="secondary-button">{btnText}</button>
          )}
        </div>
      </div>
      <img src={image} className="hero-right-section-image" />
    </section>
  );
};

export default  HeroRightSection;
