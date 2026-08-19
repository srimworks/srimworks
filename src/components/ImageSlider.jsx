import React, { useEffect, useState } from "react";
import { HOME_SLIDE } from "../utils/constsnts";
import "../styles/imageSlider.css";
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HOME_SLIDE.length);
    }, 6000);
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
            <span className="hero-header">{HOME_SLIDE[currentImg].header || "SRIM WORKS"}</span>
            <h1 className="hero-title">{HOME_SLIDE[currentImg].title}</h1>
          </div>
          <p className="hero-description">{HOME_SLIDE[currentImg].description}</p>
          <div className="buttons-container">
            <Link to={HOME_SLIDE[currentImg].button1.link || '/contact-us'} className="link">
              <button className="secondary-button">{HOME_SLIDE[currentImg].button1.text}</button>
            </Link>
            <Link to={HOME_SLIDE[currentImg].button2.link || '/about-us'} className="link">
              <button className="secondary-button-outline">{HOME_SLIDE[currentImg].button2.text}</button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={HOME_SLIDE[currentImg].image}
        alt={HOME_SLIDE[currentImg].title || "SRIM WORKS Global Technology Solutions"}
        className="hero-section-image"
        loading="eager"
        decoding="async"
      />
      <div className="dots-container" role="tablist" aria-label="Hero slider pagination">
        {HOME_SLIDE.map((_, index) => (
          <button
            type="button"
            key={index}
            role="tab"
            aria-selected={index === currentImg}
            aria-label={`Go to slide ${index + 1}`}
            className={`dot ${index === currentImg ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
