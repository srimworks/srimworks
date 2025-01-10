import React from 'react'
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
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {CLOUD_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...CLOUD_MARKET_TRENDS}/>
    <Accordian/>
  </div>
  )
}

export default Cloud