import React from "react";
import "../styles/location.css"; // Import the CSS file
import { IMAGES } from "../utils/images";

const Location = () => {
  return (
    <div className="container">
      {/* Header */}
      <h1 className="header">Welcome to My Portfolio</h1>

      {/* Description */}
      <p className="description">
        This is a responsive React component styled with normal CSS. It
        demonstrates how to center content and ensure a great user experience
        across all screen sizes.
      </p>

      {/* Image */}
      <div className="image-container">
        <img
          src={IMAGES.LOCATION_MAP}
          alt="Location"
          className="image"
        />
      </div>
    </div>
  );
};

export default Location;
