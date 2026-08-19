import React from 'react';
import HeroRightSection from '../reusable/HeroRightImage';
import RightAside from '../reusable/rightAside';
import CoreValues from '../reusable/CoreValues';
import { CARRERS_HERO, CARRERS_OVERVIEW } from '../utils/constsnts';

const Carrers = () => {
  return (
    <div className='outlet-render'>
      <HeroRightSection {...CARRERS_HERO} />
      <RightAside {...CARRERS_OVERVIEW} />
      <CoreValues />
      
      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "64px 32px 100px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "#aa2121", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", letterSpacing: "1px" }}>
            Join Our Global Team
          </span>
          <h2 style={{ fontFamily: "Config Condensed", fontSize: "40px", fontWeight: 600, color: "#0c0c0c", marginTop: "8px" }}>
            Current Career Openings & Opportunities
          </h2>
          <p style={{ fontFamily: "SF Pro Display", fontSize: "17px", color: "#555", maxWidth: "600px", margin: "12px auto 0" }}>
            Explore open roles across AI engineering, full-stack software development, precision data labeling, cloud architecture, and client partnerships.
          </p>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
          minHeight: "750px"
        }}>
          <iframe
            src="https://app.pyjamahr.com/careers?company=SRIM%20WORKS&company_uuid=F98336B846"
            title="SRIM Works Careers Portal"
            frameBorder="0"
            scrolling="yes"
            style={{ display: "block", width: "100%", height: "800px", border: "none" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Carrers;