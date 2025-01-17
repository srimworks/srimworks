import React from "react";
import {
  DIGITAL_CARDS,
  DIGITAL_ENGINEERING_HERO,
  DIGITAL_MARKET_TRENDS,
  DIGITAL_OVERVIEW,
} from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";
import "../../styles/practises.css";

const Digital = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DIGITAL_ENGINEERING_HERO} />
      <RightAside {...DIGITAL_OVERVIEW} />
      <div className="what-offers-section">
        <div className="what-offers-top">
          <p className="what-offers-tag">SRIM Works Offer</p>
          <h1 className="what-offers-heading">What We Offers</h1>
        </div>
        <div className="practices-cards">
          {DIGITAL_CARDS.map((category, index) => (
            <div key={index}>
              <div className="pc-whl-container">
                <div className="price-top-container">
                  <h2 className="pricing-category-head">{category.heading}</h2>
                  <p className="pricing-category-body">{category.content}</p>
                </div>

                <div className="practices-cards">
                  {category.cards.map((card, cardIndex) => (
                    <Cards
                      key={cardIndex}
                      title={card.heading}
                      content={card.content}
                      image={card.image}
                      postedon={category.heading} // Optionally add a date or heading here
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MarketReuse {...DIGITAL_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={DIGITAL_MARKET_TRENDS} />
    </div>
  );
};

export default Digital;
