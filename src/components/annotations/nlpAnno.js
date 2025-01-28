import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB6_HERO, ANNO_SUB6_LEFT, ANNO_SUB6_RIGHT } from '../../utils/constsnts'

const NlpAnno = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...ANNO_SUB6_HERO}/>
    <RightAside {...ANNO_SUB6_RIGHT}/>
    <LeftAside {...ANNO_SUB6_LEFT}/>
</div>
  )
}

export default NlpAnno