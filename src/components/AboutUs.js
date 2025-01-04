import React from 'react'
import HeroWithLeftImg from '../reusable/HeroWithLeftImg'
import ReachOut from '../reusable/reachOut'
import LeftAside from '../reusable/leftAside'
import { ASIDE_HUMANITY, LEFT_ASIDE } from '../utils/constsnts'
import RightAside from '../reusable/rightAside'
import Reviews from '../reusable/Reviews'

const AboutUs = () => {
  const data = ASIDE_HUMANITY[0];

  return (
    <div>
        <h1>About Us</h1>
        <HeroWithLeftImg/>
        <LeftAside {...data}/>
        <RightAside {...data}/>
        <Reviews/>
        {/* <Navbar/> */}
       {/* <whyChooseSrim/> */}
       {/* <HearetOfSrimeWorks/> */}
       {/* <philosophy/> articles */}
       {/* <LeadeShip><location></location></LeadeShip> */}
       <ReachOut/>
       {/* <footer/> */}
    </div>
  )
}

export default AboutUs