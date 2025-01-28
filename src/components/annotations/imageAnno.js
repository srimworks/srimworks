import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB1_HERO, ANNO_SUB1_LEFT, ANNO_SUB1_RIGHT } from '../../utils/constsnts'

const ImageAnno = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {... ANNO_SUB1_HERO}/>
    <RightAside {...ANNO_SUB1_RIGHT}/>
    <LeftAside {...ANNO_SUB1_LEFT}/>
</div>
  )
}

export default ImageAnno