import React, { useState } from "react";
import "../styles/WhatWeDo.css";
import { IMAGES } from "../utils/images";
import { practicesContent } from "../utils/constsnts";

const WhatWeDo = () => {

  const [selectedPractice, setSelectedPractice] = useState("Design");




  const handlePracticeClick = (practice) => {
    setSelectedPractice(practice);
  };

  const { title, description, services, image } = practicesContent[selectedPractice];

  return (
    <div className="whatwedo-section">
      <div className="whatwedo-top">
        <h2 className="whatwedo-top-title">What We Do</h2>
        <h1 className="whatwedo-top-heading">
          Comprehensive Solutions for Every Business Need
        </h1>
        <p className="whatwedo-top-content">
          At SRIM Works, we offer a wide range of technology solutions and
          services to empower businesses on their digital transformation
          journey. Our expertise spans across:
        </p>
      </div>
      <div className="what-we-do-middle">
        <hr id="wwd-hr" />
        <div className="practices-list">
          {Object.keys(practicesContent).map((practice, index) => (
            <div
              key={index}
              className={`practices-item ${selectedPractice === practice ? "active" : ""}`}
              onClick={() => handlePracticeClick(practice)}
            >
              <img src={IMAGES[`${practice.replace(/\s+/g, '_').toUpperCase()}_ICON`]} alt={practice} />
              <h3 className="practices-item-name">{practice}</h3>
            </div>
          ))}
        </div>
        <hr id="wwd-hr" />
      </div>
      <div className="what-we-do-bottom">
        <div className="what-we-do-left">
          <div className="wwd-l-content">
            <h1 className="wwd-heading">{title}</h1>
            <p className="wwd-body">{description}</p>
            <ul className="wwd-list-container">
              {services.map((service, index) => (
                <li key={index} className="wwd-list">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <button className="secondary-button-black-filled">View More Details</button>
        </div>
        <img src={image} alt={selectedPractice} />
      </div>
    </div>
  );
};

export default WhatWeDo;

