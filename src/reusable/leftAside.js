import React from "react";
import "../styles/leftAside.css";
import { Link } from "react-router-dom";
const LeftAside = ({ image, heading, title, content, btnText, list }) => {
  return (
    <>
      <div className="aside-container-left-image">
        <img src={image} alt="" />
        <aside className="aside-container-aside">
          {heading.length > 0 && (
            <div className="aside-tag">
              <hr className="aside-tag-hr-2" />
              <h2 className="aside-tag-heading">{heading}</h2>
            </div>
          )}
          <h1 className="aside-heading">{title}</h1>
          <p className="aside-content">{content}</p>
        <Link className="link" to="/get-in-touch">{btnText && <button className="primary-button" onClick={(e)=> e.stopPropagation()}>{btnText}</button>}</Link> 
        </aside>
      </div>
    </>
  );
};

export default LeftAside;
