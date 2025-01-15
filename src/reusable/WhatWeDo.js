import React from 'react'
import '../styles/WhatWeDo.css'
import { IMAGES } from '../utils/images'

const WhatWeDo = () => {
  return (
    <div className='whatwedo-section'>
      <div className="whatwedo-top">
        <h2 className="whatwedo-top-title">What We Do</h2>
        <h1 className="whatwedo-top-heading">Comprehensive Solutions for 
        Every Business Need</h1>
        <p className="whatwedo-top-content">At SRIM Works, we offer a wide range of technology solutions and services to empower businesses on their digital transformation journey. 
        Our expertise spans across:</p>
      </div>
      <div className="what-we-do-middle">
        <hr id='wwd-hr' />
        <div className="practices-list">
          <div className="practices-item">
            <img src={IMAGES.DESIGN_ICON}/>
            <h3 className="practices-item-name">Design</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.DIGITAL_ICON}/>
            <h3 className="practices-item-name">Digital Engineering</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.BIGDATA_ICON}/>
            <h3 className="practices-item-name">Big Data Analytics</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.AIML_ICON}/>
            <h3 className="practices-item-name">AI & ML</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.OPENSOURCE_ICON}/>
            <h3 className="practices-item-name">Open Source Technologies</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.MICROSOFT_ICON}/>
            <h3 className="practices-item-name">Microsoft Technologies</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.CLOUD_ICON}/>
            <h3 className="practices-item-name">Cloud Computing</h3>
          </div>
          <div className="practices-item">
            <img src={IMAGES.ERP_ICON}/>
            <h3 className="practices-item-name">ERM And CRM Solutions</h3>
          </div>
        </div>
        <hr id='wwd-hr' />
      </div>
      <div className="what-we-do-bottom">
        <div className="what-we-do-left">
          <div className="wwd-l-content">
            <h1 className="wwd-heading">Creating Impactful Experiences 
            with Human-Centered Design</h1>
            <p className='wwd-body'>Develop future-ready products and solutions that generate exceptional business value using design thinking principles, focusing on user needs, rapid prototyping, and iterative development.
            Services we offer:</p>
            <li className="wwd-list">Digital Product Design</li>
            <li className="wwd-list">UI/UX Design</li>
            <li className="wwd-list">Industrial & Mechanical Design</li>
            <li className="wwd-list">Service Experience Design</li>
            <li className="wwd-list">Branding & Visual Identity</li>
          </div>
          <button className="secondary-button-black-filled">View More Details</button>
        </div>
        <img src={IMAGES.DESIGN_IMG} alt="Design" />
      </div>
    </div>
  )
}

export default WhatWeDo