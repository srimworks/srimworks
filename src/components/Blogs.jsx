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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter(a => {
    const matchesCat = selectedCat === "All" || a.category === selectedCat;
    const matchesSearch = searchQuery === "" || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className='outlet-render'>
      <HeroSection {...RESOURCES_BLOGS_HERO} />

      <section className="blogs-directory-section" style={{ maxWidth: "1300px", margin: "0 auto", padding: "64px 32px 120px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <span style={{ color: "#0284c7", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", letterSpacing: "1px" }}>
            Thought Leadership & Insights
          </span>
          <h2 style={{ fontFamily: "Config Condensed", fontSize: "44px", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Latest Industry Articles & Technical Deep Dives
          </h2>
          <p style={{ fontSize: "17px", color: "#64748b", maxWidth: "750px", margin: 0, lineHeight: "1.6" }}>
            Explore practical insights on enterprise artificial intelligence, precision training data, distributed cloud systems, and modern digital engineering from SRIM WORKS engineers.
          </p>

          {/* Search Input & Category Filter Pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
            <div style={{ maxWidth: "450px", position: "relative" }}>
              <input
                type="text"
                placeholder="Search articles by keyword, tech, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  borderRadius: "9999px",
                  border: "1px solid #cbd5e1",
                  fontSize: "14.5px",
                  outline: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontWeight: 700
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "9999px",
                    border: selectedCat === cat ? "1px solid #0f172a" : "1px solid #e2e8f0",
                    backgroundColor: selectedCat === cat ? "#0f172a" : "#ffffff",
                    color: selectedCat === cat ? "#ffffff" : "#475569",
                    fontWeight: selectedCat === cat ? 700 : 500,
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
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div style={{ padding: "48px 0", textAlign: "center", color: "#64748b" }}>
            <p style={{ fontSize: "18px" }}>No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCat("All"); }}
              style={{ marginTop: "12px", padding: "8px 20px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "9999px", cursor: "pointer", fontWeight: 600 }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
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
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
              >
                <div style={{ height: "210px", overflow: "hidden", backgroundColor: "#0f172a" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", gap: "16px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span style={{
                        backgroundColor: "rgba(2, 132, 199, 0.1)",
                        color: "#0284c7",
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "9999px"
                      }}>
                        {article.tag}
                      </span>
                      <span style={{ fontSize: "13px", color: "#94a3b8" }}>{article.readTime}</span>
                    </div>
                    <h3 style={{
                      fontFamily: "Config Condensed",
                      fontSize: "23px",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: "1.3",
                      marginBottom: "12px"
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      fontSize: "15px",
                      color: "#475569",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      {article.desc}
                    </p>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "13px",
                    color: "#64748b"
                  }}>
                    <span style={{ fontWeight: 600 }}>By {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;