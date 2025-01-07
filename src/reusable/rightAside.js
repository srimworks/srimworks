import React from "react";

const RightAside = ({ image, heading, title, desc ,datalist}) => {

  return (
    <div className="aside-container">
      <aside className="aside-container-aside">
        {heading.length > 0 && (
          <div className="aside-tag">
            {/* <hr className="aside-tag-hr" /> */}
            <h2 className="aside-tag-heading">{heading}</h2>
          </div>
        )}
        <h1 className="aside-heading">{title}</h1>
        <p className="aside-content">{desc}</p>
        {/* {datalist.length > 0 && datalist.map((item,index)=>{
          //   return (<li className="aside-content" key={index}>{item}</li>)
          // })} */}
        <p className="aside-content">Additionally, we offer a Free Digital Marketing services to Non-Profit Organizations, NGO’s and government , helping them achieve their goals and flourish in the marketplace. </p>
      </aside>
      <img src={image} alt="" />
    </div>
  );
};

export default RightAside;

