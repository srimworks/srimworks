import React from 'react'
import ContactForm from './ContactForm'
import HeroSection from '../reusable/HeroWithLeftImg'
import CoreValues from '../reusable/CoreValues'
import RightAside from '../reusable/rightAside'
import { CARRER_HERO, CARRERS_HERO, CARRERS_OVERVIEW } from '../utils/constsnts'
import Location from '../reusable/Location'

const Carrers = () => {
  return (
    <div className='outlet-render'>
    <HeroSection {...CARRERS_HERO}/>
    <RightAside {...CARRERS_OVERVIEW}/>
{/* cards */}

<Location/>
    </div>
  )
}

export default Carrers