import React from 'react';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { OPENSOURCE_CARDS, OPENSOURCE_HERO, OPENSOURCE_OVERVIEW, OPENSOURCE_MARKET_TRENDS } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const OpenSource = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...OPENSOURCE_HERO} />
      <RightAside {...OPENSOURCE_OVERVIEW} />
      <section className="what-offers-section" aria-label="Open Source Solutions">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Modern open-source web frameworks, distributed architectures, secure API development, and cloud-native application stacks.
          </p>
        </div>
        <div className="practices-cards">
          {OPENSOURCE_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...OPENSOURCE_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={OPENSOURCE_MARKET_TRENDS} />
    </div>
  );
};

export default OpenSource;