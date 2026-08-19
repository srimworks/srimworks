import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import LeftAside from '../../reusable/leftAside'
import RightAside from '../../reusable/rightAside'
import '../../index.css'
import ReachOut from '../../reusable/reachOut'
import { MARINE_HERO, MARINE_MARKET_TRENDS, MARINE_OPERATIONS, MARINE_OVERVIEW, MARINE_SUSTAINABILITY } from '../../utils/constsnts'
import MarketReuse from '../../reusable/MarketReuse'

const Marine = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...MARINE_HERO}/>
    <RightAside {...MARINE_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...MARINE_MARKET_TRENDS}/>
    <RightAside {...MARINE_OPERATIONS}/>

    <LeftAside {...MARINE_SUSTAINABILITY} />
    
    </div>
  )
}

export default Marine