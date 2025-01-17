import React from "react";
import "../styles/whychoose.css";
import { IMAGES } from "../utils/images";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div className="why-choose-container-outer">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <h1 className="why-choose-head">Why Choose SRIM Works?</h1>
          <div id="why-choose-list-container">
            <div id="why-choose-list">
              <div id="why-choose-icon">
                <img
                  src={IMAGES.WHO_WE_ABOUTUS_GLOBAL_ICON}
                  alt="Global Icon"
                />
              </div>
              <div id="why-choose-list-content">
                <div id="list-content-heading">Global Expertise</div>
                <div id="list-content-body">
                  Delivering world-class technology solutions across industries.
                </div>
              </div>
            </div>
            <div id="why-choose-list">
              <div id="why-choose-icon">
                <img
                  src={IMAGES.WHO_WE_ABOUTUS_INNOVATION_ICON}
                  alt="Innovation Icon"
                  id="why-choose-icon-img"
                />
              </div>
              <div id="why-choose-list-content">
                <div id="list-content-heading">Innovation-Driven</div>
                <div id="list-content-body">
                  Continuously exploring emerging technologies to keep you
                  ahead.
                </div>
              </div>
            </div>
            <div id="why-choose-list">
              <div id="why-choose-icon">
                <img
                  src={IMAGES.WHO_WE_ABOUTUS_CLIENT_ICON}
                  alt="Client Icon"
                />
              </div>
              <div id="why-choose-list-content">
                <div id="list-content-heading">Client-Centric Approach</div>
                <div id="list-content-body">
                  Customizing solutions that align with your business vision.
                </div>
              </div>
            </div>
          </div>
          <button className="secondary-button-white-filled">
           <Link to='/contact-us' className="link">Schedule Meeting</Link> </button>
        </div>
        <div className="why-choose-right">
          <img src={IMAGES.WHO_WE_ABOUTUS_SECTION_1} alt="SRIM WORKS Image" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
