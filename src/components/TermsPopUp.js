import React, { useState } from "react";

import "../styles/terms.css";
import { IMAGES } from "../utils/images";
import { cookiesData } from "../utils/constsnts";

const TermsPopup = () => {
  const [show, setShow] = useState(true);
  const [showCookie, setCookie] = useState(false);
  const [showindex, setIndex] = useState(0);
  const [setToggle,setToogleState]=useState(false)
  const handleAccept = () => {
    localStorage.setItem("acceptedTerms", "true");
    setShow(false);
  };
  const handleReject = () => {
    setShow(false);
  };
  const handleCustomize = () => {
    setShow(false);
    setCookie(true);
  };

  return (
    <>
      {show && (
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
            <button id="outline-button" onClick={handleCustomize}>
              Customize
            </button>
            <button id="outline-button"  onClick={handleReject}>Reject All</button>
            <button className="primary-button" onClick={handleAccept}>
              Accept
            </button>
          </div>
        </div>
      )}
      {/* cookies popup */}
      {showCookie && (
        <div className="cookies-popup-outer">
          <div className="cookies-popup">
            <div className="cookies-top">
              <div className="cookies-t-left">
                <img src={IMAGES.FOOTER_ICON} />
                <h2 className="cookies-heading"> Privacy Preference Center</h2>
              </div>
              < img src={IMAGES.CLOSE_ICON}
                className="icon-fill"
                onClick={(e) => {
                  setCookie(false);
                  e.stopPropagation();
                }}
              />
            </div>
            <div className="cookies-middle">
              <div className="cookies-m-left">
                {cookiesData.map((item) => {
                  return (
                    <>
                      <h3
                        id={
                          item.id === showindex
                            ? "cookies-left-head"
                            : "cookies-left-head-ia"
                        }
                        onClick={(e) => {
                          setIndex(item.id);
                          e.stopPropagation();
                        }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={
                          item.id === showindex
                            ? "cookies-m-right-down"
                            : "cookies-m-right-down-disable"
                        }
                      >
                        <div className="cookies-m-r-top">
                          <h3 className="cookies-m-r-t-head">
                            {cookiesData[showindex].title}
                          </h3>
                          {cookiesData[showindex].button ===
                            "Always Active" && (
                            <button className="cookies-btn-active">
                              Always Active
                            </button>
                          )}
                          {cookiesData[showindex].button === "switch" && (
                            <button
                              className={
                                setToggle ? "toggle" : "toggle-disable"
                              }
                              onClick={() => {
                                setToogleState(!setToggle);
                              }}
                            >
                              <div className="toogle-circle"></div>
                            </button>
                          )}
                        </div>
                        <div className="cookies-m-r-bottom">
                          <p className="cookies-m-r-bottom-content">
                            {cookiesData[showindex].content}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="cookies-m-right">
                <div className="cookies-m-r-top">
                  <h3 className="cookies-m-r-t-head">
                    {cookiesData[showindex].title}
                  </h3>
                  {cookiesData[showindex].button === "Always Active" && (
                    <button className="cookies-btn-active">
                      Always Active
                    </button>
                  )}
                  {cookiesData[showindex].button === "switch" && (
                    <button
                      className={setToggle ? "toggle" : "toggle-disable"}
                      onClick={() => {
                        setToogleState(!setToggle);
                      }}
                    >
                      <div className="toogle-circle"></div>
                    </button>
                  )}
                </div>
                <div className="cookies-m-r-bottom">
                  <p className="cookies-m-r-bottom-content">
                    {cookiesData[showindex].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="cookies-bottom">
              <button
                className="secondary-button"
                onClick={(e) => {
                  setCookie(false);
                  e.stopPropagation();
                }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsPopup;
