import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { OPENSOURCE_CARDS, OPENSOURCE_HERO, OPENSOURCE_OVERVIEW , OPENSOURCE_MARKET_TRENDS} from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const OpenSource = () => {
  return (
    <>
    <HeroSection {...OPENSOURCE_HERO} />
    <RightAside {...OPENSOURCE_OVERVIEW} />
    {OPENSOURCE_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...OPENSOURCE_MARKET_TRENDS}/>
    <Accordian/>
  </>
  )
}

export default OpenSource