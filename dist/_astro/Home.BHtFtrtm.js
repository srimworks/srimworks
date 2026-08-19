import{r as o,R as e}from"./index.ai7qpRr1.js";import v from"./Reviews.bXZYVCVx.js";import{b1 as s,b2 as d,b3 as w,b4 as y,b5 as x}from"./constsnts.DePLWo3p.js";/* empty css                       */import{L as p}from"./leftAside.CBWMnggf.js";import{C as k}from"./CoreValues.8gpjzn5e.js";import{H as S}from"./HeroWithLeftImg.CAUcsnzk.js";/* empty css                       */import{I as m}from"./images.CaXP2vDm.js";const E=({to:t,children:l,...a})=>e.createElement("a",{href:t,...a},l),R=()=>{const[t,l]=o.useState(0);o.useEffect(()=>{const c=setInterval(()=>{l(n=>(n+1)%s.length)},6e3);return()=>clearInterval(c)},[]);const a=c=>{l(c)};return e.createElement("div",{className:"image-slider-css"},e.createElement("div",{className:"hero-overlay"},e.createElement("div",{className:"hero-content"},e.createElement("div",{className:"hero-content-top"},e.createElement("span",{className:"hero-header"},s[t].header||"SRIM WORKS"),e.createElement("h1",{className:"hero-title"},s[t].title)),e.createElement("p",{className:"hero-description"},s[t].description),e.createElement("div",{className:"buttons-container"},e.createElement(E,{to:s[t].button1.link||"/contact-us",className:"link"},e.createElement("button",{className:"secondary-button"},s[t].button1.text)),e.createElement(E,{to:s[t].button2.link||"/about-us",className:"link"},e.createElement("button",{className:"secondary-button-outline"},s[t].button2.text))))),e.createElement("img",{src:s[t].image,alt:s[t].title||"SRIM WORKS Global Technology Solutions",className:"hero-section-image",loading:"eager",decoding:"async"}),e.createElement("div",{className:"dots-container",role:"tablist","aria-label":"Hero slider pagination"},s.map((c,n)=>e.createElement("button",{type:"button",key:n,role:"tab","aria-selected":n===t,"aria-label":`Go to slide ${n+1}`,className:`dot ${n===t?"active":""}`,onClick:()=>a(n)}))))},C=()=>{const t=[{value:"300+",label:"Engineers & Data Specialists",detail:"Across Hyderabad & Global Hubs"},{value:"99.8%",label:"Annotation Consensus SLA",detail:"Multi-tier QA Verification"},{value:"10+",label:"Global Industry Verticals",detail:"Fintech, BFSI, Healthcare, Logistics"},{value:"<50ms",label:"Microservice p99 Latency",detail:"High-Throughput Edge Pipelines"}];return e.createElement("section",{className:"stats-banner-wrapper","aria-label":"Enterprise Metrics"},e.createElement("div",{className:"stats-banner-container"},t.map((l,a)=>e.createElement("div",{className:"stat-card",key:a},e.createElement("div",{className:"stat-value"},l.value),e.createElement("div",{className:"stat-label"},l.label),e.createElement("div",{className:"stat-detail"},l.detail)))),e.createElement("style",null,`
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
      `))},I=({to:t,children:l,...a})=>e.createElement("a",{href:t,...a},l),O=()=>{const[t,l]=o.useState("Design"),a=o.useRef(null),c=r=>{l(r)},n=()=>{a.current&&a.current.scrollBy({left:-200,behavior:"smooth"})},u=()=>{a.current&&a.current.scrollBy({left:200,behavior:"smooth"})},{title:h,description:b,services:f,image:N,link:g}=d[t];return e.createElement("div",{className:"whatwedo-section"},e.createElement("div",{className:"whatwedo-top"},e.createElement("h2",{className:"whatwedo-top-title"},"What We Do"),e.createElement("h1",{className:"whatwedo-top-heading"},"Comprehensive Solutions for Every Business Need"),e.createElement("p",{className:"whatwedo-top-content"},"At SRIM Works, we offer a wide range of technology solutions and services to empower businesses on their digital transformation journey. Our expertise spans across:")),e.createElement("div",{className:"what-we-do-middle"},e.createElement("hr",{id:"wwd-hr"}),e.createElement("div",{className:"practices-list-container"},e.createElement("button",{onClick:n,className:"practices-chevron-button"},e.createElement("img",{src:m.CHEVRON_DOWN,className:"practices-chevron-left",alt:"Scroll Left"})),e.createElement("div",{className:"practices-list",ref:a},Object.keys(d).map((r,i)=>e.createElement("div",{key:i,className:`practices-item ${t===r?"active":""}`,onClick:()=>c(r)},e.createElement("img",{src:m[`${r.replace(/\s+/g,"_").toUpperCase()}_ICON`],className:"practices-item-icon",alt:r}),e.createElement("h3",{className:`practices-item-name ${t===r?"active":""}`},r)))),e.createElement("button",{onClick:u,className:"practices-chevron-button"},e.createElement("img",{src:m.CHEVRON_DOWN,className:"practices-chevron-right",alt:"Scroll Right"}))),e.createElement("hr",{id:"wwd-hr"})),e.createElement("div",{className:"what-we-do-bottom"},e.createElement("div",{className:"what-we-do-left"},e.createElement("div",{className:"wwd-l-content"},e.createElement("h1",{className:"wwd-heading"},h),e.createElement("p",{className:"wwd-body"},b),e.createElement("ul",{className:"wwd-list-container"},f.map((r,i)=>e.createElement("li",{key:i,className:"wwd-list"},r)))),e.createElement(I,{to:g,className:"link-fill"},e.createElement("button",{className:"secondary-button-black-filled"},"View More Details"))),e.createElement("img",{src:N,alt:t})))},B=()=>e.createElement("div",{className:"outlet-render"},e.createElement(R,null),e.createElement(C,null),e.createElement(p,{...w}),e.createElement(v,null),e.createElement(S,{...y}),e.createElement(k,null),e.createElement(O,null),e.createElement(p,{...x}));export{B as default};
