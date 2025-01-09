import React from "react";
import "../styles/heroosections.css";

const HeroSection = ({ image, header, title, desc, btnText }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-content-top">
            <h1 className="hero-header">{header}</h1>
            <h1 className="hero-title">{title}</h1>
          </div>
          <p className="hero-description">{desc}</p>
          {btnText.length > 0 && (
            <button className="secondary-button">{btnText}</button>
          )}
        </div>
      </div>
      <img src={image} className="hero-section-image" />
    </section>
  );
};

export default HeroSection;
