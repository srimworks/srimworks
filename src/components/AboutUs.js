import React, { useEffect } from "react";
import HeroRightSection from "../reusable/HeroRightImage";
import WhyChoose from "../reusable/whyChoose";
import CoreValues from "../reusable/CoreValues";
import MarketReuse from "../reusable/MarketReuse";
import Leadership from "../reusable/Leadership";
import Location from "../reusable/Location";
import { ABOUT_HERO, ABOUT_MARKET_TRENDS } from "../utils/constsnts";

const AboutUs = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove "#" and find the element
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="outlet-render">
      <HeroRightSection {...ABOUT_HERO} />
      <WhyChoose />
      <CoreValues />
      <MarketReuse {...ABOUT_MARKET_TRENDS} />
      <div id="leader-ship"> {/* Add ID here */}
        <Leadership />
      </div>
      <Location />
    </div>
  );
};

export default AboutUs;
