import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import MarketReuse from '../../reusable/MarketReuse'
import LeftAside from '../../reusable/leftAside'
import { FINTECH_HERO, FINTECH_MARKET_TRENDS, FINTECH_OVERVIEW, FINTECH_SEAMLESS, FINTECH_SMART_SUPPLY } from '../../utils/constsnts'

const Fintech = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...FINTECH_HERO}/>
    <RightAside {...FINTECH_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...FINTECH_MARKET_TRENDS}/>
    <RightAside {...FINTECH_SEAMLESS}/>

    <LeftAside {...FINTECH_SMART_SUPPLY} />
    
    </div>
  )
}

export default Fintech