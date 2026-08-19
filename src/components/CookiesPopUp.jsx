import React, { useState, useEffect } from "react";
import "../styles/cookies.css";
import { IMAGES } from "../utils/images";
import { cookiesData } from "../utils/constsnts";

const CookiesPopup = () => {
  const [show, setShow] = useState(true);
  const [showCookie, setCookie] = useState(false);
  const [showindex, setIndex] = useState(0);
  const [setToggle,setToogleState]=useState(false)

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
    show &&
     <div className="cookies-popup-outer">
      <div className="cookies-popup">
        <div className="cookies-top">
          <div className="cookies-t-left">
            <img src={IMAGES.FOOTER_ICON} />
            <h2 className="cookies-heading"> Privacy Preference Center</h2>
          </div>
          <img src={IMAGES.CLOSE_ICON} onClick={()=>{setCookie(false)}}/>
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
                  onClick={() => {
                    setIndex(item.id);
                  }}
                >
                  {item.title}
                </h3>
                <div className={item.id===showindex? "cookies-m-right-down":"cookies-m-right-down-disable"}>
              <div className="cookies-m-r-top">
                <h3 className="cookies-m-r-t-head">
                  {cookiesData[showindex].title}
                </h3>
                {cookiesData[showindex].button === "Always Active" && (
                  <button className="cookies-btn-active">Always Active</button>
                )}
                {cookiesData[showindex].button==="switch" && <button className= {setToggle ? "toggle":"toggle-disable"} onClick={()=>{setToogleState(!setToggle)}} ><div className="toogle-circle"></div></button>}
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
                  <button className="cookies-btn-active">Always Active</button>
                )}
                {cookiesData[showindex].button==="switch" && <button className= {setToggle ? "toggle":"toggle-disable"} onClick={()=>{setToogleState(!setToggle)}} ><div className="toogle-circle"></div></button>}
              </div>
              <div className="cookies-m-r-bottom">
                <p className="cookies-m-r-bottom-content">
                  {cookiesData[showindex].content}
                </p>
              </div>
            </div>
        </div>
        <div className="cookies-bottom">
          <button className="secondary-button">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
