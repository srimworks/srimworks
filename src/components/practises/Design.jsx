import React from "react";
import {
  DESIGN_CARDS,
  DESIGN_MARKET_TRENDS,
  DESIGN_OVERVIEW,
  DESIGN_HERO,
} from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";

const Design = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DESIGN_HERO} />
      <RightAside {...DESIGN_OVERVIEW} />
      <section className="what-offers-section" aria-label="Design Engineering Capabilities">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Design thinking workshops, comprehensive enterprise design systems, rapid prototyping, and user-centric experience engineering.
          </p>
        </div>
        <div className="practices-cards">
          {DESIGN_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...DESIGN_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={DESIGN_MARKET_TRENDS} />
    </div>
  );
};

export default Design;
