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
    {MICROSOFT_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...MICROSOFT_MARKET_TRENDS}/>
    <Accordian/>
  </div>
  )
}

export default Microsoft