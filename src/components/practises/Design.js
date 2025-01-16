import React from "react";
import {
  CARDS_DATA,
  DESIGN_CARDS,
  DESIGN_MARKET_TRENDS,
  DESIGN_OVERVIEW,
} from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import { DESIGN_HERO } from "../../utils/constsnts";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";
import "../../styles/practises.css";

const Design = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DESIGN_HERO} />
      <RightAside {...DESIGN_OVERVIEW} />
      <div className="what-offers-section">
        <div className="what-offers-top">
          <p className="what-offers-tag">SRIM Works Offer</p>
          <h1 className="what-offers-heading">What We Offers</h1>
        </div>
        <div className="practices-cards">
          {DESIGN_CARDS.map((item) => {
            return <Cards {...item} />;
          })}
        </div>
      </div>
      <MarketReuse {...DESIGN_MARKET_TRENDS}/>
      {/* {DESIGN_MARKET_TRENDS.map((item)=>{})} */}
      <Accordian MARKKET_TRENDS={DESIGN_MARKET_TRENDS}/>
    </div>
  );
};

export default Design;
