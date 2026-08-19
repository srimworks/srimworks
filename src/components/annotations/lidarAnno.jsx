import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB4_HERO, ANNO_SUB4_LEFT2, ANNO_SUB4_LEFT4, ANNO_SUB4_RIGHT1, ANNO_SUB4_RIGHT3, ANNO_SUB4_RIGHT5 } from '../../utils/constsnts'

const LidarAnno = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...ANNO_SUB4_HERO}/>
    <RightAside {...ANNO_SUB4_RIGHT1}/>
    <LeftAside {...ANNO_SUB4_LEFT2}/>
    <RightAside {...ANNO_SUB4_RIGHT3}/>
    <LeftAside {...ANNO_SUB4_LEFT4}/>
    <RightAside {...ANNO_SUB4_RIGHT5}/>
</div>
  )
}

export default LidarAnno