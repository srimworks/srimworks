import React from 'react'
import HeroSection from '../../reusable/HeroWithLeftImg'
import RightAside from '../../reusable/rightAside'
import LeftAside from '../../reusable/leftAside'
import { ANNO_SUB5_HERO, ANNO_SUB5_LEFT2, ANNO_SUB5_RIGHT1 } from '../../utils/constsnts'

const VideoAnno = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...ANNO_SUB5_HERO}/>
    <RightAside {...ANNO_SUB5_RIGHT1}/>
    <LeftAside {...ANNO_SUB5_LEFT2}/>
</div>
  )
}

export default VideoAnno