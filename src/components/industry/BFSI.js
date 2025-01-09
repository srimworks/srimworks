import React from 'react'
import { BFSI_HELP, BFSI_HERO, BFSI_MARKET_TRENDS, BFSI_ORG, BFSI_OVERVIEW } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const BFSI = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...BFSI_HERO}/>
    <RightAside {...BFSI_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...BFSI_MARKET_TRENDS}/>
    <RightAside {...BFSI_ORG}/>

    <LeftAside {...BFSI_HELP} />
    
    </div>
  )
}

export default BFSI