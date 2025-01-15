import React, { useEffect, useState } from "react";
import { HOME_SLIDE } from "../utils/constsnts";
import "../styles/imageSlider.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [slidesData, setSlidesData] = useState(HOME_SLIDE);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % slidesData.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [slidesData.length]);

  const handleDotClick = (index) => {
    setCurrentImg(index);
  };

  return (
    <>
<div className="image-slider-css">
  <div className="hero-overlay">
    <div className="hero-content">
      <div className="hero-content-top">
        <h3 className="hero-header">SRIM WORKS</h3>
        <h1 className="hero-title">
          Your Global Partner for Technology Innovation and Excellence
        </h1>
      </div>
      <p className="hero-description">
        Welcome to SRIM Works, your trusted multinational partner for
        advanced technology solutions. Headquartered in Hyderabad, India's
        thriving tech hub, we drive innovation and deliver transformative
        solutions that empower businesses worldwide.
      </p>
      <div className="buttons-container">
        <Link to="/Get-Started" className="link">
          <button className="secondary-button">Get Started</button>
        </Link>
        <button className="secondary-button-outline">Learn More</button>
      </div>
    </div>
  </div>
  {/* Slider Image */}
  <img
    src={slidesData[currentImg].image}
    alt="slider"
    className="hero-section-image"
  />
  <div className="dots-container">
    {slidesData.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentImg ? "active" : ""}`}
        onClick={() => handleDotClick(index)}
      ></span>
    ))}
  </div>
</div>
    </>
  );
};

export default ImageSlider;
