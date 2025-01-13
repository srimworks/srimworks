import React from 'react'
import ContactForm from './ContactForm'
import HeroSection from '../reusable/HeroWithLeftImg'
import CoreValues from '../reusable/CoreValues'
import RightAside from '../reusable/rightAside'
import { CARRER_HERO, CARRER_OPENINGS, CARRERS_HERO, CARRERS_OVERVIEW } from '../utils/constsnts'
import Location from '../reusable/Location'
import HeroRightSection from '../reusable/HeroRightImage'
import Cards from '../reusable/cards'

const Carrers = () => {
  return (
    <div className='outlet-render'>
    <HeroRightSection {...CARRERS_HERO}/>
    <RightAside {...CARRERS_OVERVIEW}/>
{/* cards */}
<Cards {...CARRER_OPENINGS}/>

<Location/>
    </div>
  )
}

export default Carrers