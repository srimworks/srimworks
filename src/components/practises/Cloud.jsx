import React from 'react';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { CLOUD_CARDS, CLOUD_HERO, CLOUD_MARKET_TRENDS, CLOUD_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const Cloud = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...CLOUD_HERO} />
      <RightAside {...CLOUD_OVERVIEW} />
      <section className="what-offers-section" aria-label="Cloud Computing Capabilities">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Cloud-native application engineering, multi-cloud Kubernetes orchestration, site reliability automation, and FinOps infrastructure optimization.
          </p>
        </div>
        <div className="practices-cards">
          {CLOUD_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...CLOUD_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={CLOUD_MARKET_TRENDS} />
    </div>
  );
};

export default Cloud;