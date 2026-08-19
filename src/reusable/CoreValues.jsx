import React from "react";
import { CARDS_DATA } from "../utils/constsnts";
import "../styles/corevalues.css";

const CoreValues = () => {
  return (
    <div className="cards-section">
      <div className="cards-section-top">
        <h1 className="card-section-heading-s">Our Core Values </h1>
        <h1 className="card-section-heading">The Heart of SRIM Works </h1>
      </div>
      <div className="cards">
        {CARDS_DATA.map((item, index) => {
          const { id, icon, heading, content } = item;
          return (
            <div className="why-choose-us-card" key={id}>
              <img src={icon} alt={heading} />
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
