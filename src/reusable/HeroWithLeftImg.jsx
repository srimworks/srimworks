import React from "react";
import "../styles/heroosections.css";
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
const HeroSection = ({ cards, image, header, title, desc, btnText, btnClass }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-content-top">
            <h1 className="hero-header">{header}</h1>
            <h2 className="hero-title">{title}</h2>
          </div>
          <p className="hero-description">{desc}</p>
          {btnText && btnText.length > 0 && (
            <Link to='/contact-us' className="link">
              <button
                className={
                  btnClass ? "secondary-button-white-filled" : "secondary-button"
                }
              >
                {btnText}
              </button>
            </Link>
          )}
        </div>
        {cards && (
          <div className="cards-container">
            {cards.map((item, idx) => {
              return (
                <div className="img-cards" key={item.id || idx}>
                  <h3 className="img-card-heading">{item.title}</h3>
                  <p className="img-card-body">{item.content}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <img src={image} className="hero-section-image" alt={title || header || "SRIM WORKS Enterprise"} decoding="async" />
    </section>
  );
};

export default HeroSection;
