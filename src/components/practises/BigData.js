import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { BIGDATA_CARDS, BIGDATA_ENGINEERING_HERO, BIGDATA_MARKET_TRENDS, BIGDATA_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const BigData = () => {
  return (
    <>
    <HeroSection {...BIGDATA_ENGINEERING_HERO} />
    <RightAside {...BIGDATA_OVERVIEW} />
    {BIGDATA_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...BIGDATA_MARKET_TRENDS}/>
    <Accordian/>
  </>
  )
}

export default BigData