import React, { useState } from "react";
import "../styles/terms.css";

const TermsPopup = () => {
  const [show, setShow] = useState(true);

  const handleAccept = () => {
    localStorage.setItem("acceptedTerms", "true");
    setShow(false);
  };

  return (
    show && (
      <div className="terms-popup">
        <div className="terms-content">
          <h2 className="terms-heading">We value your privacy</h2>
          <p className="terms-body">
            We use cookies to enhance your browsing experience, serve
            personalised ads or content, and analyse our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="terms-button">
          <button id="outline-button">Customize</button>
          <button id="outline-button">Reject All</button>
          <button className="secondary-button" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    )
  );
};

export default TermsPopup;
