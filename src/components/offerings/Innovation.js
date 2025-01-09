import React from "react";
import {
  INNOVATION_BRIDGING,
  INNOVATION_HERO,
  INNOVATION_LIVING,
  INNOVATION_OVERVIEW,
  INNOVATION_RESEARCHING,
} from "../../utils/offerings";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import LeftAside from "../../reusable/leftAside";
import ReachOut from "../../reusable/reachOut";

const Innovation = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...INNOVATION_HERO} />
      <RightAside {...INNOVATION_OVERVIEW} />
      {/*  */}

      <LeftAside {...INNOVATION_LIVING} />
      <RightAside {...INNOVATION_BRIDGING} />

      <LeftAside {...INNOVATION_RESEARCHING} />
    </div>
  );
};

export default Innovation;
