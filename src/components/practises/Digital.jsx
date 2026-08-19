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

const Digital = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DIGITAL_ENGINEERING_HERO} />
      <RightAside {...DIGITAL_OVERVIEW} />
      <section className="what-offers-section" aria-label="Digital Engineering Solutions">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            End-to-end digital engineering disciplines across Salesforce ecosystem, Cloud Architecture, Modernization, and CI/CD DevOps.
          </p>
        </div>
        
        <div className="digital-categories-container">
          {DIGITAL_CARDS.map((category, index) => (
            <div key={index} className="digital-category-block">
              <div className="category-header">
                <h3 className="category-heading">{category.heading}</h3>
                <p className="category-description">{category.content}</p>
              </div>

              <div className="practices-cards">
                {category.cards.map((card, cardIndex) => (
                  <Cards
                    key={cardIndex}
                    title={card.heading}
                    content={card.content.replace(/^Text:\s*/i, "")}
                    image={card.image}
                    badge={category.heading}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <MarketReuse {...DIGITAL_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={DIGITAL_MARKET_TRENDS} />
    </div>
  );
};

export default Digital;
