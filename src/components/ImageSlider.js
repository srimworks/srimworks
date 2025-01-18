import React, { useEffect, useState } from "react";
import { HOME_SLIDE } from "../utils/constsnts";
import "../styles/imageSlider.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HOME_SLIDE.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImg(index);
  };

  return (
    <div className="image-slider-css">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-content-top">
            <h3 className="hero-header">SRIM WORKS</h3>
            <h1 className="hero-title">{HOME_SLIDE[currentImg].title}</h1>
          </div>
          <p className="hero-description">{HOME_SLIDE[currentImg].description}</p>
          <div className="buttons-container">
            <Link to='/contact-us' className="link">
              <button className="secondary-button">{HOME_SLIDE[currentImg].button1.text}</button>
            </Link>
            <Link to='/about-us' className="link">
              <button className="secondary-button-outline">{HOME_SLIDE[currentImg].button2.text}</button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={HOME_SLIDE[currentImg].image}
        alt="slider"
        className="hero-section-image"
      />
      <div className="dots-container">
        {HOME_SLIDE.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImg ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
