import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg';
import RightAside from '../../reusable/rightAside';
import Cards from '../../reusable/cards';
import MarketReuse from '../../reusable/MarketReuse';
import { ERP_CARDS, ERP_HERO, ERP_MARKET_TRENDS, ERP_OVERVIEW } from '../../utils/constsnts';
import Accordian from '../../reusable/accordian';

const Erp = () => {
  return (
    <>
    <HeroSection {...ERP_HERO} />
    <RightAside {...ERP_OVERVIEW} />
    {ERP_CARDS.map((item) => {
      return <Cards {...item} />;
    })}
    <MarketReuse {...ERP_MARKET_TRENDS}/>
    <Accordian/>
  </>
  )
}

export default Erp