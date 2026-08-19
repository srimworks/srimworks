import React from 'react'
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
    <div className="what-offers-section">
      <div className="what-offers-top">
        <p className="what-offers-tag">SRIM Works Offer</p>
        <h1 className="what-offers-heading">What We Offers</h1>
      </div>
      <div className="practices-cards">
      {ERP_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      </div>
      </div>
    <MarketReuse {...ERP_MARKET_TRENDS}/>
    <Accordian MARKKET_TRENDS={ERP_MARKET_TRENDS}/>
  </div>
  )
}

export default Erp