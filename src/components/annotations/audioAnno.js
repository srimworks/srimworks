import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB3_HERO, ANNO_SUB3_LEFT, ANNO_SUB3_RIGHT } from '../../utils/constsnts'

const AudioAnno = () => {
  return (
    <div className='outlet-render'>
        <HeroSection {...ANNO_SUB3_HERO}/>
        <RightAside {...ANNO_SUB3_RIGHT}/>
        <LeftAside {...ANNO_SUB3_LEFT}/>
    </div>
  )
}

export default AudioAnno