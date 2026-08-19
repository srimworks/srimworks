import React from "react";
import "../styles/location.css";
import { IMAGES } from "../utils/images";

const Location = () => {
  return (
    <section className="location-section-container" aria-label="Global Locations">
      <div className="location-header-wrapper">
        <span className="location-pill-tag">Global Presence</span>
        <h2 className="location-heading">Our Delivery Hubs & Strategic Locations</h2>
        <p className="location-description">
          At SRIM Works, our reach spans continents, enabling us to deliver cutting-edge technology solutions, high-speed data annotation suites, and cloud systems to clients worldwide.
        </p>
      </div>

      <div className="location-map-container">
        <img 
          src={IMAGES.MAP} 
          alt="SRIM WORKS Global Delivery Hubs Map" 
          className="location-map-image" 
          loading="lazy" 
          decoding="async" 
        />
      </div>

      <div className="location-hubs-grid">
        <div className="location-hub-card">
          <div className="hub-badge">HQ & Global Delivery Center</div>
          <h3 className="hub-city">Hyderabad, India</h3>
          <p className="hub-address">
            Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, Financial District, Manikonda Jagir, Hyderabad, Telangana 500032
          </p>
          <a href="tel:+9108062180277" className="hub-phone">+91 (080) 6218-0277</a>
        </div>

        <div className="location-hub-card">
          <div className="hub-badge">North America Regional Office</div>
          <h3 className="hub-city">Houston / Delaware, USA</h3>
          <p className="hub-address">
            Enterprise Client Services & Strategic Technology Advisory Center, Serving North American Enterprise Partners
          </p>
          <a href="tel:+18325013875" className="hub-phone">+1 (832) 501-3875</a>
        </div>
      </div>
    </section>
  );
};

export default Location;
