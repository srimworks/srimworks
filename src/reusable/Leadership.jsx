import React from "react";
import { IMAGES } from "../utils/images";
import '../styles/Leadership.css'

const Leadership = () => {
  return (
    <div className="leadership-section">
      <div className="leadership-content">
        <h1 className="leadership-heading">Leadership Team</h1>
        <p className="leadership-body">
          At SRIM Works, our leadership team embodies vision, innovation, and
          expertise. With decades of experience across technology and business
          domains, our leaders inspire us to excel in delivering world-class
          solutions that empower businesses globally.
        </p>
      </div>
      <div className="leadership-images">
        <div id="leader-image-container">
          <img src={IMAGES.WHO_WE_ABOUTUS_LEADERSHIP_1} alt="Vigneswara Kireeti Alugunulla" />
          <h1 id="leader-name">Vigneswara Kireeti Alugunulla </h1>
          <p id="leader-designation">CEO, SRIM Works</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
