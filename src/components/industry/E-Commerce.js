import React from 'react'
import { E_COMMERCE_HERO, E_COMMERCE_MARKET_TRENDS, E_COMMERCE_OVERVIEW, E_COMMERCE_SEAMLESS, E_COMMERCE_SMART_SUPPLY } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const ECommerce = () => {
  return (
    <>
    <HeroSection {...E_COMMERCE_HERO}/>
    <RightAside {...E_COMMERCE_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...E_COMMERCE_MARKET_TRENDS}/>
    <RightAside {...E_COMMERCE_SEAMLESS}/>

    <LeftAside {...E_COMMERCE_SMART_SUPPLY} />
    
    </>
  )
}

export default ECommerce