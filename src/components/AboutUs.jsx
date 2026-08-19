import React, { useEffect } from "react";
const useLocation = () => ({ pathname: typeof window !== "undefined" ? window.location.pathname : "/" });
import HeroRightSection from "../reusable/HeroRightImage";
import WhyChoose from "../reusable/whyChoose";
import CoreValues from "../reusable/CoreValues";
import MarketReuse from "../reusable/MarketReuse";
import Leadership from "../reusable/Leadership";
import Location from "../reusable/Location";
import { ABOUT_HERO, ABOUT_MARKET_TRENDS } from "../utils/constsnts";

const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, [location]);

  return (
    <div className="outlet-render">
      <HeroRightSection {...ABOUT_HERO} />
      <WhyChoose />
      <CoreValues />
      <MarketReuse {...ABOUT_MARKET_TRENDS} />
      <div id="leader-ship"> 
        <Leadership />
      </div>
      <Location />
    </div>
  );
};

export default AboutUs;
