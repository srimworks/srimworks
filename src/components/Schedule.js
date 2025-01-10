import React from 'react'
import HeroSection from '../reusable/HeroWithLeftImg'
import { CONTACT_HERO } from '../utils/constsnts'
import ContactForm from './ContactForm'
import CoreValues from '../reusable/CoreValues'
import Location from '../reusable/Location'

const Schedule = () => {
  return (
    <div className='outlet-render-contact'>
    <HeroSection {...CONTACT_HERO}/>
    <ContactForm/>
    <CoreValues/>
    <Location/>
    </div>
  )
}

export default Schedule