import React from "react";
import "../styles/location.css"; // Import the CSS file
import { IMAGES } from "../utils/images";

const Location = () => {
  return (
    <div className="container">
      {/* Header */}
      <h1 className="header">Our Locations</h1>

      {/* Description */}
      <p className="description">
      At SRIM Works, our reach spans across continents, enabling us to deliver cutting-edge technology solutions to clients worldwide. With a strategic presence in key locations, we’re always close to the industries and businesses we serve.
      </p>

      {/* Image */}
      <div className="image-container">
        <img
          src={IMAGES.MAP}
          alt="Location"
          className="image"
        />
      </div>
    </div>
  );
};

export default Location;
