import React from 'react';
import { AL_ML_MARKET_TRENDS, AL_ML_CARDS, AL_ML_HERO, AL_ML_OVERVIEW } from '../../utils/constsnts';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import Accordian from '../../reusable/accordian';

const Artificial = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...AL_ML_HERO} />
      <RightAside {...AL_ML_OVERVIEW} />
      <section className="what-offers-section" aria-label="AI and ML Capabilities">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Enterprise machine learning solutions, neural vision architectures, NLP automation, and intelligent conversational systems tailored for high-scale environments.
          </p>
        </div>
        <div className="practices-cards">
          {AL_ML_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...AL_ML_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={AL_ML_MARKET_TRENDS} />
    </div>
  );
};

export default Artificial;