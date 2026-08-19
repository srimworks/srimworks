import React, { useState } from 'react';
import HeroSection from '../reusable/HeroWithLeftImg';
import { RESOURCES_BLOGS_HERO } from '../utils/constsnts';
import { IMAGES } from '../utils/images';

const ARTICLES = [
  {
    id: 1,
    category: "AI & ML",
    title: "Fine-Tuning Enterprise LLMs: Data Quality vs Model Parameter Scale",
    desc: "Why precision-annotated domain data outperforms raw model size when deploying domain-specific agents, retrieval-augmented systems (RAG), and compliant enterprise copilot workflows.",
    date: "August 15, 2026",
    readTime: "6 min read",
    author: "SRIM AI Research Lab",
    image: IMAGES.AIML_IMG || "/assets/images/AIML.svg",
    tag: "Machine Learning"
  },
  {
    id: 2,
    category: "Data Annotation",
    title: "3D LiDAR Point Cloud & Video Annotation: Powering Autonomous Robotics",
    desc: "A deep dive into multi-sensor fusion, cuboid labeling, and temporal continuous tracking for high-velocity autonomous vehicles, maritime vessels, and industrial warehouse robotics.",
    date: "August 02, 2026",
    readTime: "8 min read",
    author: "Data Engineering Team",
    image: IMAGES.DATAANNOTATION_IMG || "/assets/images/Data Annotation.svg",
    tag: "Computer Vision"
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    title: "Architecting Resilient Multi-Cloud Microservices on Global Edge Networks",
    desc: "Best practices for containerized orchestration, zero-trust edge security, sub-50ms latency routing, and automated disaster recovery across AWS, Google Cloud, and Cloudflare.",
    date: "July 24, 2026",
    readTime: "5 min read",
    author: "Cloud Solutions Team",
    image: IMAGES.CLOUD_IMG || "/assets/images/Cloud Computing.svg",
    tag: "Cloud Infrastructure"
  },
  {
    id: 4,
    category: "Data Annotation",
    title: "Human-in-the-Loop (HITL) Quality Assurance: Reaching 99.8% Ground Truth",
    desc: "How multi-tier peer auditing, automated consensus scoring, and specialized domain annotators eliminate edge-case hallucinations in multimodal training sets.",
    date: "July 12, 2026",
    readTime: "7 min read",
    author: "Quality & Governance",
    image: IMAGES.BIGDATA_IMG || "/assets/images/Big Data Analytics.svg",
    tag: "Data Quality"
  },
  {
    id: 5,
    category: "Design & UX",
    title: "Designing Frictionless Design Systems for Complex Enterprise Platforms",
    desc: "Bridging the gap between design tokens, accessible components, and rapid engineering delivery in high-density data analytics and fintech dashboards.",
    date: "June 28, 2026",
    readTime: "4 min read",
    author: "Product Design Studio",
    image: IMAGES.DESIGN_IMG || "/assets/images/Design.svg",
    tag: "Product Design"
  },
  {
    id: 6,
    category: "Digital Engineering",
    title: "Modernizing Legacy Banking & Supply Chain Platforms with Event-Driven Architecture",
    desc: "Migrating monolithic ERP and logistics backbones to decoupled asynchronous message brokers, microfrontends, and real-time observability.",
    date: "June 10, 2026",
    readTime: "9 min read",
    author: "Enterprise Solutions Team",
    image: IMAGES.DIGITAL_IMG || "/assets/images/Digital Engineering.svg",
    tag: "Enterprise Tech"
  }
];

const CATEGORIES = ["All", "AI & ML", "Data Annotation", "Cloud & DevOps", "Design & UX", "Digital Engineering"];

const Blogs = () => {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredArticles = selectedCat === "All"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCat);

  return (
    <div className='outlet-render'>
      <HeroSection {...RESOURCES_BLOGS_HERO} />

      <section className="blogs-directory-section" style={{ maxWidth: "1300px", margin: "0 auto", padding: "64px 32px 120px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          <span style={{ color: "#aa2121", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", letterSpacing: "1px" }}>
            Thought Leadership & Insights
          </span>
          <h2 style={{ fontFamily: "Config Condensed", fontSize: "44px", fontWeight: 600, color: "#0c0c0c", margin: 0 }}>
            Latest Industry Articles & Technical Deep Dives
          </h2>
          <p style={{ fontFamily: "SF Pro Display", fontSize: "18px", color: "#555", maxWidth: "750px", margin: 0 }}>
            Explore practical insights on enterprise artificial intelligence, precision training data, distributed cloud systems, and modern digital engineering from SRIM WORKS engineers.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: selectedCat === cat ? "1px solid #aa2121" : "1px solid #e2e8f0",
                  backgroundColor: selectedCat === cat ? "#aa2121" : "#f8fafc",
                  color: selectedCat === cat ? "#ffffff" : "#334155",
                  fontWeight: selectedCat === cat ? 600 : 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "32px"
        }}>
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#0f172a" }}>
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{
                      backgroundColor: "#fee2e2",
                      color: "#991b1b",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "12px"
                    }}>
                      {article.tag}
                    </span>
                    <span style={{ fontSize: "13px", color: "#64748b" }}>{article.readTime}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "Config Condensed",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#0f172a",
                    lineHeight: "1.3",
                    marginBottom: "12px"
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontFamily: "SF Pro Display",
                    fontSize: "15px",
                    color: "#475569",
                    lineHeight: "1.6",
                    marginBottom: "20px"
                  }}>
                    {article.desc}
                  </p>
                </div>
                <div style={{
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1e293b", display: "block" }}>{article.author}</span>
                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>{article.date}</span>
                  </div>
                  <a
                    href="/contact-us"
                    style={{
                      color: "#aa2121",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none"
                    }}
                  >
                    Discuss Solution →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;