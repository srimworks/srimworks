import React from "react";
import "../styles/heroosections.css";
import { IMAGES } from "../utils/images";
const HeroSection = ({image,header, title, desc, btnText}) => {
  const backgroundImage = IMAGES.OFFER_4; 

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <h1 className="hero-title">{header}</h1>
          <p className="hero-description">
            {desc}
          </p>
          <button className="hero-button">{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
