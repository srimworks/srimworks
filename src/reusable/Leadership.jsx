import React from "react";
import { IMAGES } from "../utils/images";
import '../styles/Leadership.css';

const Leadership = () => {
  return (
    <div className="leadership-section">
      <div className="leadership-content">
        <h2 className="leadership-heading">Executive Leadership</h2>
        <p className="leadership-body">
          At SRIM Works, our leadership team unites deep technical expertise with global business execution. We are dedicated to architecting mission-critical artificial intelligence, specialized data annotation suites, and cloud infrastructure that scale seamlessly for enterprise clients across North America, Europe, and the Asia-Pacific region.
        </p>
      </div>
      <div className="leadership-images">
        <div id="leader-image-container">
          <img 
            src={IMAGES.WHO_WE_ABOUTUS_LEADERSHIP_1} 
            alt="Vigneswara Kireeti Alugunulla — CEO, SRIM Works" 
            loading="lazy"
            decoding="async"
          />
          <h3 id="leader-name">Vigneswara Kireeti Alugunulla</h3>
          <p id="leader-designation">Chief Executive Officer, SRIM Works</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
