import React from 'react'
import HeroSection from '../reusable/HeroWithLeftImg'
import { CARDS_DATA, RESOURCES_BLOGS_HERO } from '../utils/constsnts'

const Blogs = () => {
  return (
    <>
    <HeroSection {...RESOURCES_BLOGS_HERO}/>
    </>
  )
}

export default Blogs