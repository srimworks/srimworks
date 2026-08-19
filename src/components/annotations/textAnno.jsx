import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB2_HERO, ANNO_SUB2_LEFT, ANNO_SUB2_RIGHT } from '../../utils/constsnts'
const TextAnno = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...ANNO_SUB2_HERO}/>
    <RightAside {...ANNO_SUB2_RIGHT}/>
    <LeftAside {...ANNO_SUB2_LEFT}/>
</div>
  )
}

export default TextAnno