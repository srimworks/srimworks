import React, { useState } from "react";
import "../styles/marketreuse.css";

const MarketReuse = ({
  heading,
  desc,
  image,
  accordians_contents,
  
}) => {
  const [openvalue,setId]=useState(0);
  return (
    <div className="market-reuse">
      <div className="market-resue-container">
        <div>
          <h1 className="market-head">{heading}</h1>
          <p className="market-desc">{desc}</p>
        </div>
        <div className="market-aside">
          <div className="market-left">
            {accordians_contents.map((item,index)=>{
              return ( <div className= "market-left-open-container" key={index} onClick={()=> setId(item.id)}>
                <h1 className={ item.id===openvalue ?"market-left-heading" :"market-left-heading-close"}>{item.subHead}</h1>
                <hr className= {item.id===openvalue ? "market-seperation-line": "market-seperation-line-close"} />
                <p className={item.id===openvalue ? "market-left-content": "market-left-content-close"}>{item.content}</p>
              </div> )

            })
            }
            {/* <div className="market-left-open-container">
              <h1 className="market-left-heading">{subHead1}</h1>
              <hr className="market-seperation-line" />
              <p className="market-left-content">{content1}</p>
            </div>
            <h2 className="market-left-heading">{subHead2}</h2>
            <h2 className="market-left-heading">{subHead3}</h2>*/}
          </div> 
          <div className="market-right">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReuse;
