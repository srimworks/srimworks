import React from 'react'
import { LIFECYCLE_AGILE, LIFECYCLE_DEPLOYMENT, LIFECYCLE_HERO, LIFECYCLE_OVERVIEW, LIFECYCLE_PLANNING } from '../../utils/offerings'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import ReachOut from '../../reusable/reachOut'

const ProdDev = () => {
  return (
    <>
    <HeroSection {...LIFECYCLE_HERO}/>
<RightAside {...LIFECYCLE_OVERVIEW}/>
{/*  */}

<LeftAside {...LIFECYCLE_PLANNING} />
<RightAside {...LIFECYCLE_AGILE}/>

<LeftAside {...LIFECYCLE_DEPLOYMENT} />

</>
  )
}

export default ProdDev