import React from "react";
import { DATAAN_CARDS, DATAAN_HERO, DATAAN_MARKET_TRENDS, DATAAN_OVERVIEW } from "../../utils/constsnts";
import HeroSection from "../../reusable/HeroWithLeftImg";
import RightAside from "../../reusable/rightAside";
import Cards from "../../reusable/cards";
import MarketReuse from "../../reusable/MarketReuse";
import Accordian from "../../reusable/accordian";

const DataAnnotations = () => {
  return (
    <div className="outlet-render">
      <HeroSection {...DATAAN_HERO} />
      <RightAside {...DATAAN_OVERVIEW} />
      <section className="what-offers-section" aria-label="Data Annotation Solutions">
        <div className="what-offers-top">
          <span className="what-offers-tag">SRIM Works Capabilities</span>
          <h2 className="what-offers-heading">What We Offer</h2>
          <p className="what-offers-subheading">
            Pixel-accurate computer vision labeling, multi-lingual NLP annotation, 3D LiDAR point cloud segmentation, and human-in-the-loop quality benchmarking.
          </p>
        </div>
        <div className="practices-cards">
          {DATAAN_CARDS.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </section>
      <MarketReuse {...DATAAN_MARKET_TRENDS} />
      <Accordian MARKKET_TRENDS={DATAAN_MARKET_TRENDS} />
    </div>
  );
};

export default DataAnnotations;
