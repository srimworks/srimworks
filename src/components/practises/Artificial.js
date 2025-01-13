import React from 'react'
import { AL_ML_MARKET_TRENDS, DESIGN_CARDS, DESIGN_HERO, DESIGN_MARKET_TRENDS, DESIGN_OVERVIEW } from '../../utils/constsnts';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import Accordian from '../../reusable/accordian';

const Artificial = () => {
  return (
    <div className="outlet-render">
    <HeroSection {...DESIGN_HERO} />
    <RightAside {...DESIGN_OVERVIEW} />
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {DESIGN_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...AL_ML_MARKET_TRENDS}/>
    <Accordian MARKKET_TRENDS={AL_ML_MARKET_TRENDS}/>
  </div>
  )
}

export default Artificial