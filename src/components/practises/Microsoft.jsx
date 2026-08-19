import React from 'react'
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
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {MICROSOFT_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...MICROSOFT_MARKET_TRENDS}/>
    <Accordian MARKKET_TRENDS={MICROSOFT_MARKET_TRENDS}/>
  </div>
  )
}

export default Microsoft