import React from "react";
import Cards from "../reusable/cards";
import { PRESS_CARDS, PRESS_HERO } from "../utils/constsnts";
import HeroRightSection from "../reusable/HeroRightImage";
import '../styles/PressRoom.css';

const PressRoom = () => {
  return (
    <div className="outlet-render">
      <HeroRightSection {...PRESS_HERO} />
      
      <div className="pressroom-section">
        <div className="pressroom-top">
          <span className="pr-t-tag">Media & Newsroom</span>
          <h1 className="pr-t-heading">Latest Announcements & Milestones</h1>
          <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "650px", margin: "12px 0 0" }}>
            Official press announcements, research breakthroughs, regulatory compliance milestones, and global partnership news from SRIM WORKS.
          </p>
        </div>

        <div className="pr-cards">
          {PRESS_CARDS.map((item, index) => {
            return <Cards {...item} key={index} />;
          })}
        </div>

        {/* Corporate Boilerplate & Media Contact */}
        <div className="press-boilerplate-section" style={{
          marginTop: "64px",
          padding: "40px",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04)"
        }}>
          <h2 style={{ fontFamily: "Config Condensed", fontSize: "28px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>
            About SRIM WORKS (Corporate Boilerplate)
          </h2>
          <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
            SRIM WORKS is a multinational digital engineering, artificial intelligence, and specialized data annotation technology firm headquartered in Hyderabad, India. With a dedicated team of over 300 domain engineers, data scientists, and cloud architects, SRIM WORKS builds and maintains mission-critical software systems, distributed microservices, and AI training pipelines for high-growth startups and global enterprises across North America, Europe, and the Asia-Pacific region.
          </p>
          
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid #f1f5f9"
          }}>
            <div>
              <strong style={{ color: "#0f172a", display: "block", fontSize: "14px" }}>Media & Press Inquiries:</strong>
              <a href="mailto:info@srimworks.com" style={{ color: "#0284c7", fontWeight: 600, textDecoration: "none", fontSize: "15px" }}>
                info@srimworks.com
              </a>
            </div>
            <a href="/contact-us" style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 22px",
              background: "#0f172a",
              color: "#ffffff",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none"
            }}>
              Contact Media Liaison &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRoom;
