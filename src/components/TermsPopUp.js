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
        <p>
          By using this site, you agree to our <a href="/terms">Terms and Conditions</a>.
        </p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  );
};

export default TermsPopup;
