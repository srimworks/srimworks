import React from 'react';
import HeroSection from '../reusable/HeroWithLeftImg';
import { CONTACT_HERO } from '../utils/constsnts';
import ContactForm from './ContactForm';
import Location from '../reusable/Location';

const Schedule = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...CONTACT_HERO} />
      <ContactForm />
      <Location />
    </div>
  );
};

export default Schedule;