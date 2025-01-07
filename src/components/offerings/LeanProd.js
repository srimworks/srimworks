import React from 'react'
import { LEAN_AGILE, LEAN_HERO, LEAN_OVERVIEW, LEAN_RESOURCE, LEAN_THINKING } from '../../utils/offerings'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'

const LeanProd = () => {
  return (
    <>
    <HeroSection {...LEAN_HERO}/>
<RightAside {...LEAN_OVERVIEW}/>
{/*  */}

<LeftAside {...LEAN_THINKING} />
<RightAside {...LEAN_AGILE}/>

<LeftAside {...LEAN_RESOURCE} />

</>
  )
}

export default LeanProd