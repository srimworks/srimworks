import React from 'react'
import HeroWithLeftImg from '../reusable/HeroWithLeftImg'
import ReachOut from '../reusable/reachOut'
import LeftAside from '../reusable/leftAside'
import { ASIDE_HUMANITY, LEFT_ASIDE, REACH_OUT } from '../utils/constsnts'
import RightAside from '../reusable/rightAside'
import Reviews from '../reusable/Reviews'
import Location from '../reusable/Location'
import CoreValues from '../reusable/CoreValues'
import Footer from '../reusable/footer'
import Accordian from '../reusable/accordian'

const AboutUs = () => {
  const data = ASIDE_HUMANITY[0];

  return (
    <div>
        <h1>About Us</h1>
        <HeroWithLeftImg/>
        <LeftAside {...data}/>
        <RightAside {...data}/>
        <CoreValues/>
        {/* <Reviews/> */}
        <Location/>
        <Accordian/>
        {/* <Navbar/> */}
       {/* <whyChooseSrim/> */}
       {/* <HearetOfSrimeWorks/> */}
       {/* <philosophy/> articles */}
       {/* <LeadeShip><location></location></LeadeShip> */}
       <ReachOut {...REACH_OUT}/>
       {/* <footer/> */}
    </div>
  )
}

export default AboutUs