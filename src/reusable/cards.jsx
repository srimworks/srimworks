import React from 'react';
import '../styles/cards.css';

const Cards = ({ postedon, title, image, content, link, btnText_btn, badge }) => {
  return (
    <div className="card-section">
      <div className="card-image-wrapper">
        <img 
          src={image} 
          alt={title || "SRIM WORKS Capability"} 
          className="card-image" 
          loading="lazy" 
          decoding="async" 
        />
        <div className="card-image-overlay" />
      </div>
      <div className="card-body">
        {badge && <span className="card-badge">{badge}</span>}
        {postedon && <span className="card-date">{postedon}</span>}
        <h3 className="card-heading">{title}</h3>
        <p className="card-content">{content}</p>
        {link && (
          <div className="card-cta">
            <span className="card-cta-text">{btnText_btn || "Explore Solution"} &rarr;</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
