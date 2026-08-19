import React from 'react';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { ERP_CARDS, ERP_HERO, ERP_MARKET_TRENDS, ERP_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const Erp = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...ERP_HERO} />
      <RightAside {...ERP_OVERVIEW} />
      <section className="what-offers-section" aria-label="ERP and CRM Solutions">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Enterprise resource planning, customer relationship platforms, SAP integrations, and unified data synchronization architectures.
          </p>
        </div>
        <div className="practices-cards">
          {ERP_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...ERP_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={ERP_MARKET_TRENDS} />
    </div>
  );
};

export default Erp;