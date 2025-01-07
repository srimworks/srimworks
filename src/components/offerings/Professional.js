import React from 'react'
import { PROFESSIONAL_HERO, PROFESSIONAL_IMPLEMENTATION, PROFESSIONAL_OVERVIEW, PROFESSIONAL_SERVICES, PROFESSIONAL_STRATEGIC } from '../../utils/offerings'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'


const Professional = () => {
  return (
    <>
    <HeroSection {...PROFESSIONAL_HERO}/>
<RightAside {...PROFESSIONAL_OVERVIEW}/>
{/*  */}

<LeftAside {...PROFESSIONAL_STRATEGIC} />
<RightAside {...PROFESSIONAL_IMPLEMENTATION}/>

<LeftAside {...PROFESSIONAL_SERVICES} />

</>
  )
}

export default Professional