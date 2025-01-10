import React from 'react'
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
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {BIGDATA_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...BIGDATA_MARKET_TRENDS}/>
    <Accordian/>
  </div>
  )
}

export default BigData