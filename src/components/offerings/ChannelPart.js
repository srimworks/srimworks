import React from "react";
import {
  CHANNEL_APPROACH,
  CHANNEL_AREAS,
  CHANNEL_HERO,
  CHANNEL_OVERVIEW,
  CHANNEL_PARTNER,
} from "../../utils/offerings";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import LeftAside from "../../reusable/leftAside";
import ReachOut from "../../reusable/reachOut";

const ChannelPart = () => {
  return (
    <>
      <HeroSection {...CHANNEL_HERO} />
      <RightAside {...CHANNEL_OVERVIEW} />

      <LeftAside {...CHANNEL_PARTNER} />
      <RightAside {...CHANNEL_APPROACH} />

      <LeftAside {...CHANNEL_AREAS} />
    </>
  );
};

export default ChannelPart;
