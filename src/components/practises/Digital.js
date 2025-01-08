import React from 'react'
import { DIGITAL_CARDS, DIGITAL_ENGINEERING_HERO, DIGITAL_MARKET_TRENDS, DIGITAL_OVERVIEW } from '../../utils/constsnts';
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import Accordian from '../../reusable/accordian';

const Digital = () => {
  return (
    <>
    <HeroSection {...DIGITAL_ENGINEERING_HERO} />
    <RightAside {...DIGITAL_OVERVIEW} />
    {DIGITAL_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...DIGITAL_MARKET_TRENDS}/>
    <Accordian/>
  </>
  )
}

export default Digital