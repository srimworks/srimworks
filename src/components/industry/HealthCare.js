import React from 'react'
import { HEALTH_CARE_HERO, HEALTH_CARE_MARKET_TRENDS, HEALTH_CARE_OPERATIONAL, HEALTH_CARE_OVERVIEW, HEALTH_CARE_PATIENT } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'

const HealthCare = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...HEALTH_CARE_HERO}/>
    <RightAside {...HEALTH_CARE_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...HEALTH_CARE_MARKET_TRENDS}/>
    <RightAside {...HEALTH_CARE_PATIENT}/>

    <LeftAside {...HEALTH_CARE_OPERATIONAL} />
    
    </div>
  )
}

export default HealthCare