import React from 'react';
import '../styles/cards.css';

const Cards = ({ postedon, title, image, content, link, btnText_btn, badge }) => {
  const cardBody = (
    <>
      <div className="card-media-wrapper">
        <img 
          src={image} 
          alt={title || "SRIM WORKS Capability"} 
          className="card-media-img" 
          loading="lazy" 
          decoding="async" 
        />
        <div className="card-media-overlay" />
        {badge && <span className="card-category-badge">{badge}</span>}
      </div>
      <div className="card-content-wrapper">
        {postedon && !badge && <span className="card-meta-date">{postedon}</span>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{content}</p>
        <div className="card-cta-bar">
          <span className="card-cta-link">
            {btnText_btn || "Explore Solution"}
            <svg className="card-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className="card-item-link" aria-label={title || "Explore Solution"}>
        <article className="card-item-container">
          {cardBody}
        </article>
      </a>
    );
  }

  return (
    <article className="card-item-container">
      {cardBody}
    </article>
  );
};

export default Cards;
