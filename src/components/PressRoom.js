import React from "react";
import HeroWithLeftImg from "../reusable/HeroWithLeftImg";
import ReachOut from "../reusable/reachOut";
import Cards from "../reusable/cards";
import { PRESS_CARDS, PRESS_HERO } from "../utils/constsnts";
import HeroSection from "../reusable/HeroWithLeftImg";
import HeroRightSection from "../reusable/HeroRightImage";
import '../styles/PressRoom.css'

const PressRoom = () => {
  return (
    <div className="outlet-render">
      <HeroRightSection {...PRESS_HERO} />
      <div className="pressroom-section">
        <div className="pressroom-top">
          <h2 className="pr-t-tag">Media</h2>
          <h1 className="pr-t-heading">Articles From SRIM Works</h1>
        </div>
        <div className="pr-cards">
          {PRESS_CARDS.map((item, index, self) => {
            return <Cards {...item} />;
          })}
        </div>
      </div>
      {/* <h1>press room</h1> */}
      {/* <Navbar/> */}
      {/* <articles/> */}
      {/* <ReachOut/> */}
    </div>
  );
};

export default PressRoom;
