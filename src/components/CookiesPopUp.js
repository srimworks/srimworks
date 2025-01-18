import React, { useState, useEffect } from "react";
import "../styles/cookies.css"; 

const CookiesPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    if (!acceptedCookies) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShow(false);
  };

  return (
    show && (
      <div className="cookies-popup">
        <p>
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our
          <a href="/privacy-policy"> Privacy Policy</a>.
        </p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  );
};

export default CookiesPopup;
