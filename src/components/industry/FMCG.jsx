import React from 'react'
import { FMCG_DATA, FMCG_DIGITAL, FMCG_HERO, FMCG_MARKET_TRENDS, FMCG_OVERVIEW } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const FMCG = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...FMCG_HERO}/>
    <RightAside {...FMCG_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...FMCG_MARKET_TRENDS}/>
    <RightAside {...FMCG_DIGITAL}/>

    <LeftAside {...FMCG_DATA} />
    
    </div>
  )
}

export default FMCG