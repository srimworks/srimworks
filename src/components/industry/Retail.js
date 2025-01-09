import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { RETAIL_DATA_DRIVEN, RETAIL_HERO, RETAIL_MARKET_TRENDS, RETAIL_OPERATIONAL, RETAIL_OVERVIEW } from '../../utils/constsnts'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const Retail = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...RETAIL_HERO}/>
    <RightAside {...RETAIL_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...RETAIL_MARKET_TRENDS}/>
    <RightAside {...RETAIL_OPERATIONAL}/>

    <LeftAside {...RETAIL_DATA_DRIVEN} />
    
    </div>
  )
}

export default Retail