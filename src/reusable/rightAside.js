import React from "react";
import '../styles/leftAside.css'

const RightAside = ({ image, heading,header, title, desc ,dataList}) => {

  return (
    <div className="aside-container">
      <aside className={title=='Overview'? "aside-container-aside-overview":"aside-container-aside" }>
        {heading.length > 0 && (
          <div className="aside-tag">
            {/* <hr className="aside-tag-hr" /> */}
            <h2 className="aside-tag-heading">{heading || header}</h2>
          </div>
        )}
        <h1 className={title=='Overview' ?"aside-heading-overview"  : "aside-heading"}>{title}</h1>
        <p className={title=='Overview' ? "aside-content-overview": "aside-content"}>{desc}</p>
        <div>
        {dataList.length > 0 && dataList.map((item,index)=>{
            return (<li className="aside-content" key={index} >{item}</li>)
          })}
        </div>
        {/* <p className="aside-content">Additionally, we offer a Free Digital Marketing services to Non-Profit Organizations, NGO’s and government , helping them achieve their goals and flourish in the marketplace. </p> */}
      </aside>
      <img src={image} alt={title} />
    </div>
  );
};

export default RightAside;

