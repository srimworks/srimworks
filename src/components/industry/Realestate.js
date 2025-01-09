import React from 'react'
import { REAL_ESTATE_AI, REAL_ESTATE_DIGITAL, REAL_ESTATE_HERO, REAL_ESTATE_MARKET_TRENDS, REAL_ESTATE_OVERVIEW } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const Realestate = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...REAL_ESTATE_HERO}/>
    <RightAside {...REAL_ESTATE_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...REAL_ESTATE_MARKET_TRENDS}/>
    <RightAside {...REAL_ESTATE_DIGITAL}/>

    <LeftAside {...REAL_ESTATE_AI} />
    
    </div>
  )
}

export default Realestate