import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { OPENSOURCE_CARDS, OPENSOURCE_HERO, OPENSOURCE_OVERVIEW , OPENSOURCE_MARKET_TRENDS} from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const OpenSource = () => {
  return (
    <div className="outlet-render">
    <HeroSection {...OPENSOURCE_HERO} />
    <RightAside {...OPENSOURCE_OVERVIEW} />
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {OPENSOURCE_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...OPENSOURCE_MARKET_TRENDS}/>
    <Accordian MARKKET_TRENDS={OPENSOURCE_MARKET_TRENDS}/>
  </div>
  )
}

export default OpenSource