import React from 'react'
import HeroWithLeftImg from '../reusable/HeroWithLeftImg'
import ReachOut from '../reusable/reachOut'
import LeftAside from '../reusable/leftAside'
import { ABOUT_HERO, ABOUT_MARKET_TRENDS, ASIDE_HUMANITY, CONTACT_HERO, LEFT_ASIDE, MARINE_HERO, REACH_OUT } from '../utils/constsnts'
import RightAside from '../reusable/rightAside'
import Reviews from '../reusable/Reviews'
import Location from '../reusable/Location'
import CoreValues from '../reusable/CoreValues'
import Footer from '../reusable/footer'
import Accordian from '../reusable/accordian'
import MarketReuse from '../reusable/MarketReuse'
import HeroSection from '../reusable/HeroWithLeftImg'
import HeroRightSection from '../reusable/HeroRightImage'
import WhyChoose from '../reusable/whyChoose'

const AboutUs = () => {
  const data = ASIDE_HUMANITY[0];

  return (
    <div className="outlet-render">
        {/* <LeftAside {...data}/> */}
        {/* <RightAside {...data}/> */}
        {/* <HeroSection {...ABOUT_HERO}/>
         */}
         <HeroRightSection {...ABOUT_HERO}/>
         {/* <WhyChoose/> */}
        <CoreValues/>        
        <MarketReuse {...ABOUT_MARKET_TRENDS}/>
        <Location/>
    </div>
  )
}

export default AboutUs