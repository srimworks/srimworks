import React from "react";
import { CARDS_DATA } from "../utils/constsnts";
import "../styles/corevalues.css";

const CoreValues = () => {
  return (
    <div className="cards-section">
        <h1 className="hero-inclined-image-heading">Our Core Values </h1>
      <h1 className="hero-inclined-image-heading">The Heart of SRIM Works </h1>
    <div className="cards">
      {CARDS_DATA.map((item, index) => {
        const { id,icon, heading, content } = item;
        return (
          <div className="why-choose-us-card" key={id}>
            <img src={icon} alt=""/>
            <h1 className="why-choose-us-card-heading">{heading}</h1>
            <p className="why-choose-us-card-body">"{content}"</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CoreValues;