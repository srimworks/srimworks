import React from "react";
import '../styles/leftAside.css';

const RightAside = ({ image, heading, header, title, desc, dataList, asideList }) => {
  return (
    <div className="aside-container">
      <aside className={title === 'Overview' ? "aside-container-aside-overview" : "aside-container-aside"}>
        {heading && heading.length > 0 && (
          <div className="aside-tag">
            <h2 className="aside-tag-heading">{heading || header}</h2>
          </div>
        )}
        <h1 className={title === 'Overview' ? "aside-heading-overview" : "aside-heading"}>{title}</h1>
        <p className={title === 'Overview' ? "aside-content-overview" : "aside-content"}>{desc}</p>
        <div>
          {asideList && asideList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <h3 className="aside-content-head">{item.title}</h3>
                <p className="aside-content">{item.content}</p>
              </React.Fragment>
            );
          })}
          {dataList && dataList.length > 0 && dataList.map((item, index) => {
            return (<li className="aside-content" key={index}>{item}</li>);
          })}
        </div>
      </aside>
      <img src={image} alt={title || heading || "SRIM WORKS Capabilities"} loading="lazy" decoding="async" />
    </div>
  );
};

export default RightAside;
