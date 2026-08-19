import React from "react";

const StatsBanner = () => {
  const stats = [
    { value: "300+", label: "Engineers & Data Specialists", detail: "Across Hyderabad & Global Hubs" },
    { value: "99.8%", label: "Annotation Consensus SLA", detail: "Multi-tier QA Verification" },
    { value: "10+", label: "Global Industry Verticals", detail: "Fintech, BFSI, Healthcare, Logistics" },
    { value: "<50ms", label: "Microservice p99 Latency", detail: "High-Throughput Edge Pipelines" }
  ];

  return (
    <section className="stats-banner-wrapper" aria-label="Enterprise Metrics">
      <div className="stats-banner-container">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
            <div className="stat-detail">{item.detail}</div>
          </div>
        ))}
      </div>
      <style>{`
        .stats-banner-wrapper {
          width: 100%;
          background: #020617;
          border-top: 1px solid #1e293b;
          border-bottom: 1px solid #1e293b;
          padding: 40px 24px;
        }
        .stats-banner-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          border-left: 2px solid #0284c7;
          padding-left: 20px;
        }
        .stat-value {
          font-family: "Config Condensed", -apple-system, sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: #38bdf8;
          line-height: 1;
        }
        .stat-label {
          font-size: 15px;
          font-weight: 600;
          color: #f8fafc;
          line-height: 1.3;
        }
        .stat-detail {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.4;
        }
        @media (max-width: 1024px) {
          .stats-banner-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }
        @media (max-width: 600px) {
          .stats-banner-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .stat-value {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsBanner;
