import React from "react";
import "../styles/leftAside.css";
import { Link } from "react-router-dom";
const LeftAside = ({
  image,
  heading,
  desc,
  title,
  content,
  btnText,
  dataList,
}) => {
  return (
    <div className="overall-aside-container">
      <div className="aside-container-left-image">
        <img src={image} alt="" />
        <aside className="aside-container-aside">
          <div>
          {heading.length > 0 && (
              <h2 className="aside-tag-heading-left">{heading}</h2>
          )}
          <h1 className="aside-heading-left">{title}</h1>
          </div>
          <p className="aside-content-left">{content || desc}</p>
          <div>
            {dataList.length > 0 &&
              dataList.map((item, index) => {
                return (
                  <li className="aside-content-left" key={index}>
                    {item}
                  </li>
                );
              })}
          </div>

          
            {btnText && (
              <button
                className="secondary-button-white-filled"
              >
                <Link className="link" to="/contact-us">
                {btnText}
                </Link>
              </button>
            )}
          
        </aside>
      </div>
    </div>
  );
};

export default LeftAside;
