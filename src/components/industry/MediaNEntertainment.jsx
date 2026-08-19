import React from 'react'
import { MEDIA_CONTENT, MEDIA_HERO, MEDIA_MARKET_TRENDS, MEDIA_OVERVIEW, MEDIA_PERSONALIZED } from '../../utils/constsnts'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'
import MarketReuse from '../../reusable/MarketReuse'


const MediaNEntertainment = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...MEDIA_HERO}/>
    <RightAside {...MEDIA_OVERVIEW}/>
    {/*  */}
    <MarketReuse {...MEDIA_MARKET_TRENDS}/>
    <RightAside {...MEDIA_CONTENT}/>

    <LeftAside {...MEDIA_PERSONALIZED} />
    
    </div>
  )
}

export default MediaNEntertainment