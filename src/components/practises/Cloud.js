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
    {CLOUD_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...CLOUD_MARKET_TRENDS}/>
    <Accordian/>
  </div>
  )
}

export default Cloud