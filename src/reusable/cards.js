import React from 'react';
import '../styles/cards.css';

const Cards = ({ postedon, title, image, content }) => {
  return (
    <div className="card-section">
      {/* {postedon && <h1>{postedon}</h1>} */}
      <div className="overlay">
        <h1 className="card-heading">{title}</h1>
        <p className="card-content">{content}</p>
      </div>
      <img src={image} alt={title} className="card-image" />
    </div>
  );
};

export default Cards;

