import React from 'react'
import HeroSection from '../reusable/HeroWithLeftImg'
import { CARDS_DATA, RESOURCES_BLOGS_HERO } from '../utils/constsnts'

const Blogs = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...RESOURCES_BLOGS_HERO}/>
    </div>
  )
}

export default Blogs