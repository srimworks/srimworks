import React from 'react';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { MICROSOFT_CARDS, MICROSOFT_HERO, MICROSOFT_MARKET_TRENDS, MICROSOFT_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const Microsoft = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...MICROSOFT_HERO} />
      <RightAside {...MICROSOFT_OVERVIEW} />
      <section className="what-offers-section" aria-label="Microsoft Technologies Practice">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Enterprise Microsoft Azure cloud migrations, .NET Core microservices, Microsoft 365 governance, and Power Platform automated workflows.
          </p>
        </div>
        <div className="practices-cards">
          {MICROSOFT_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...MICROSOFT_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={MICROSOFT_MARKET_TRENDS} />
    </div>
  );
};

export default Microsoft;