import React from 'react';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { BIGDATA_CARDS, BIGDATA_ENGINEERING_HERO, BIGDATA_MARKET_TRENDS, BIGDATA_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const BigData = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...BIGDATA_ENGINEERING_HERO} />
      <RightAside {...BIGDATA_OVERVIEW} />
      <section className="what-offers-section" aria-label="Big Data Solutions">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Scalable data lakes, real-time event stream pipelines, and enterprise business intelligence frameworks to turn massive datasets into strategic advantage.
          </p>
        </div>
        <div className="practices-cards">
          {BIGDATA_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...BIGDATA_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={BIGDATA_MARKET_TRENDS} />
    </div>
  );
};

export default BigData;