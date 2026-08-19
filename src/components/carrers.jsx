import React from 'react';
import HeroRightSection from '../reusable/HeroRightImage';
import RightAside from '../reusable/rightAside';
import CoreValues from '../reusable/CoreValues';
import { CARRERS_HERO, CARRERS_OVERVIEW } from '../utils/constsnts';

const Carrers = () => {
  const hiringSteps = [
    { num: "01", title: "Application & Profile Review", desc: "Our talent team evaluates your engineering portfolio, GitHub, or domain expertise within 48 hours." },
    { num: "02", title: "Technical Architecture Deep Dive", desc: "A peer-level discussion with our principal engineers focusing on real-world system design and distributed pipelines." },
    { num: "03", title: "Practical Problem Solving", desc: "A collaborative session tackling a practical coding challenge, model tuning problem, or data annotation workflow." },
    { num: "04", title: "Executive Alignment & Offer", desc: "Meet leadership, align on career trajectory, compensation package, and welcome onboarding." }
  ];

  return (
    <div className='outlet-render'>
      <HeroRightSection {...CARRERS_HERO} />
      <RightAside {...CARRERS_OVERVIEW} />
      <CoreValues />

      {/* 4-Step Transparent Hiring Journey */}
      <section className="hiring-journey-section">
        <div className="hiring-journey-container">
          <div className="hiring-journey-header">
            <span className="section-badge">How We Hire</span>
            <h2 className="section-title">Our Transparent 4-Step Engineering Recruitment Process</h2>
            <p className="section-subtitle">We value your time. Our hiring process is designed to be fast, technical, and respectful of your expertise.</p>
          </div>
          <div className="hiring-steps-grid">
            {hiringSteps.map((step, idx) => (
              <div className="hiring-step-card" key={idx}>
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .hiring-journey-section {
            max-width: 1300px;
            margin: 0 auto;
            padding: 64px 32px;
            width: 100%;
          }
          .hiring-journey-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          .hiring-journey-header {
            text-align: center;
            max-width: 750px;
            margin: 0 auto;
          }
          .section-badge {
            display: inline-block;
            padding: 4px 14px;
            background: rgba(166, 209, 201, 0.25);
            color: #064e3b;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .section-title {
            font-family: "Config Condensed", sans-serif;
            font-size: 38px;
            font-weight: 700;
            color: #0f172a;
            margin-top: 12px;
            line-height: 1.2;
          }
          .section-subtitle {
            font-size: 16px;
            color: #64748b;
            margin-top: 10px;
            line-height: 1.5;
          }
          .hiring-steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
          .hiring-step-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 28px 22px;
            box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.03);
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .step-num {
            font-family: "Config Condensed", sans-serif;
            font-size: 32px;
            font-weight: 800;
            color: #0284c7;
          }
          .step-title {
            font-size: 17px;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
          }
          .step-desc {
            font-size: 14px;
            color: #475569;
            line-height: 1.6;
          }
          @media (max-width: 1024px) {
            .hiring-steps-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .hiring-steps-grid {
              grid-template-columns: 1fr;
            }
            .section-title {
              font-size: 28px;
            }
          }
        `}</style>
      </section>

      {/* Live PyjamaHR Portal */}
      <section id="open-positions" style={{ maxWidth: "1300px", margin: "0 auto", padding: "32px 32px 100px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span style={{ display: "inline-block", padding: "4px 14px", background: "rgba(2, 132, 199, 0.1)", color: "#0284c7", borderRadius: "9999px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
            Live Job Openings
          </span>
          <h2 style={{ fontFamily: "Config Condensed", fontSize: "40px", fontWeight: 700, color: "#0f172a", marginTop: "10px" }}>
            Explore Opportunities & Apply Directly
          </h2>
          <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "620px", margin: "8px auto 0" }}>
            Find your next high-impact role in artificial intelligence, full-stack software development, precision data labeling, and cloud platform architecture.
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