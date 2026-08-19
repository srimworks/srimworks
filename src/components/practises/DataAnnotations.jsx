import React from "react";
import { DATAAN_CARDS, DATAAN_HERO, DATAAN_MARKET_TRENDS, DATAAN_OVERVIEW } from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const DataAnnotations = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DATAAN_HERO} />
      <RightAside {...DATAAN_OVERVIEW} />
      <div className="what-offers-section">
        <div className="what-offers-top">
          <p className="what-offers-tag">SRIM Works Offer</p>
          <h1 className="what-offers-heading">What We Offers</h1>
        </div>
        <div className="practices-cards">
          {DATAAN_CARDS.map((item) => {
            return <Link className="link-cards" to={item.link}><Cards {...item} /></Link>
          })}
        </div>
      </div>
      <MarketReuse {...DATAAN_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={DATAAN_MARKET_TRENDS} />
    </div>
  );
};

export default DataAnnotations;
