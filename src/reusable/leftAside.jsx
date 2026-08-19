import React from "react";
import "../styles/leftAside.css";
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
const LeftAside = ({
  image,
  heading,
  desc,
  title,
  content,
  btnText,
  dataList,
  asideList,
}) => {
  return (
    <div className="overall-aside-container">
      <div className="aside-container-left-image">
        <img src={image} alt={title} />
        <aside className="aside-container-aside">
          <div>
            {heading.length > 0 && (
              <h2 className="aside-tag-heading-left">{heading}</h2>
            )}
            <h1 className="aside-heading-left">{title}</h1>
          </div>
          <p className="aside-content-left">{content || desc}</p>
          <div>
            {asideList &&
              asideList.map((item, index) => {
                return (
                  <>
                    <h3 className="aside-content-left-head">{item.title}</h3>
                    <p className="aside-content-left">{item.content}</p>
                  </>
                );
              })}
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
            <button className="secondary-button-white-filled">
              <Link className="link-fill" to="/contact-us">
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
