import React from 'react'
import Reviews from '../reusable/Reviews'
import ImageSlider from './ImageSlider'
import LeftAside from '../reusable/leftAside'
import { INTRO_SRIMWORKS, HOME_WEWORK, WHO_WE_ARE } from '../utils/constsnts'
import CoreValues from '../reusable/CoreValues'
import HeroSection from '../reusable/HeroWithLeftImg'
import WhatWeDo from '../reusable/WhatWeDo'

const Home = () => {
  return (
    <div className='outlet-render'>
    {/* slider */}
    <ImageSlider/>
    {/* left */}
    <LeftAside {...INTRO_SRIMWORKS}/>
    <Reviews/>
    <HeroSection {...WHO_WE_ARE}/>
    <CoreValues/>
    <WhatWeDo/>
    <LeftAside {...HOME_WEWORK}/>
    
    
    </div>
  )
}

export default Home