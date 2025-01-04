import React from "react";
import "../styles/heroosections.css";
import { IMAGES } from "../utils/images";
const HeroSection = () => {
  const backgroundImage = IMAGES.OFFER_4; 

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Website</h1>
          <p className="hero-description">
            Discover amazing features and explore endless possibilities with us.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
