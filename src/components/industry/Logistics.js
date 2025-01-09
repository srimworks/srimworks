import React from 'react'
import { LOGISTICS_DATA_DRIVEN, LOGISTICS_DIGITAL, LOGISTICS_HERO, LOGISTICS_MARKET_TRENDS, LOGISTICS_OVERVIEW } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'

const Logistics = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...LOGISTICS_HERO}/>
    <RightAside {...LOGISTICS_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...LOGISTICS_MARKET_TRENDS}/>
    <RightAside {...LOGISTICS_DIGITAL}/>

    <LeftAside {...LOGISTICS_DATA_DRIVEN} />
    
    </div>
  )
}

export default Logistics