import React from 'react'
import HeroWithLeftImg from '../reusable/HeroWithLeftImg'
import ReachOut from '../reusable/reachOut'
import LeftAside from '../reusable/leftAside'
import { LEFT_ASIDE } from '../utils/constsnts'

const AboutUs = () => {
  const data = LEFT_ASIDE[0].offer_1;

  return (
    <div>
        <h1>About Us</h1>
        <LeftAside {...data}/>
        {/* <Navbar/> */}
        {/* <HeroWithLeftImg/> */}
       {/* <whyChooseSrim/> */}
       {/* <HearetOfSrimeWorks/> */}
       {/* <philosophy/> articles */}
       {/* <LeadeShip><location></location></LeadeShip> */}
       {/* <ReachOut/> */}
       {/* <footer/> */}
    </div>
  )
}

export default AboutUs