import React from "react";
import {
  CARDS_DATA,
  DESIGN_CARDS,
  DESIGN_MARKET_TRENDS,
  DESIGN_OVERVIEW,
} from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import { DESIGN_HERO } from "../../utils/constsnts";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";

const Design = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DESIGN_HERO} />
      <RightAside {...DESIGN_OVERVIEW} />
      {DESIGN_CARDS.map((item) => {
        return <Cards {...item} />;
      })}
      <MarketReuse {...DESIGN_MARKET_TRENDS}/>
      <Accordian/>
    </div>
  );
};

export default Design;
