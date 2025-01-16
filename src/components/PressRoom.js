import React from 'react'
import HeroWithLeftImg from '../reusable/HeroWithLeftImg'
import ReachOut from '../reusable/reachOut'
import Cards from '../reusable/cards'
import { PRESS_CARDS, PRESS_HERO } from '../utils/constsnts'
import HeroSection from '../reusable/HeroWithLeftImg'
import HeroRightSection from '../reusable/HeroRightImage'

const PressRoom = () => {
  return (
    <div>
        <HeroRightSection {...PRESS_HERO}/>
      {PRESS_CARDS.map((item,index,self)=>{
        return(
          <Cards {...item}/>
        )
      })}
        {/* <h1>press room</h1> */}
        {/* <Navbar/> */}
        {/* <articles/> */}
        {/* <ReachOut/> */}

    </div>
  )
}

export default PressRoom