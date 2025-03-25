import React from "react";
import "../styles/heroosections.css";
import { IMAGES } from "../utils/images";
import { Link } from "react-router-dom";
const HeroSection = ({cards,image,header, title, desc, btnText,btnClass}) => {

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
           <Link to='/contact-us' className="link"> <button
              className={
                btnClass ? "secondary-button-white-filled" : "secondary-button"
              }
            >
              {btnText}
            </button></Link>
          )}
        </div>
        {cards && (
          <div className="cards-container">
            {cards.map((item) => {
              return (
                <div className="img-cards" key={item.id}>
                  <h2 className="img-card-heading">{item.title}</h2>
                  <p className="img-card-body">{item.content}</p>
                </div>
              );
            })}
          </div>
        )}
        
      </div>
      <img src={image} className="hero-section-image" alt={title}/>
    </section>
  );
};

export default HeroSection;
