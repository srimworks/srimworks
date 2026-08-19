import { IMAGES } from "./images";

export const HOME_SLIDE = [
  {
    header: "SRIM WORKS",
    image: IMAGES.HOME_HERO_1,
    title: "Driving Global Innovation with Cutting-Edge Technology",
    description:
      "At SRIM Works, we are more than just a technology company—we are innovators, problem solvers, and global partners. Headquartered in Hyderabad, India’s bustling tech hub, we deliver transformative solutions that empower businesses to thrive in an ever-evolving digital landscape. Our expertise in advanced technologies, coupled with a passion for innovation, enables us to create impactful, future-ready solutions that drive growth and success.",
    button1: { text: "Schedule Consultation", link: "/contact-us" },
    button2: { text: "Explore Capabilities", link: "/digital-engineering" },
  },
  {
    header: "SRIM WORKS",
    image: IMAGES.HOME_HERO_2,
    title: "Empowering Businesses with Tailored Solutions",
    description:
      "At SRIM Works, we specialize in creating customized technology solutions that address unique business challenges. From AI-driven innovations to scalable cloud strategies, our expertise empowers companies to stay ahead in a fast-paced digital world. With a global reach and a focus on excellence, we turn visions into results.",
    button1: { text: "Explore AI Practice", link: "/AI&ML" },
    button2: { text: "Data Annotation Suite", link: "/data-annotation" },
  },
  {
    header: "SRIM WORKS",
    image: IMAGES.HOME_HERO_3,
    title: "Bridging Talent and Technology Across Borders",
    description:
      "SRIM Works connects businesses with top-tier talent and the latest technological advancements. With a presence across continents and a commitment to continuous innovation, we build strategic partnerships that transform industries. Together, let’s shape a smarter and more connected future.",
    button1: { text: "Careers at SRIM", link: "/careers" },
    button2: { text: "About SRIM WORKS", link: "/about-us" },
  },
];

//Home
export const INTRO_SRIMWORKS = {
  heading: "INTRODUCING SRIM WORKS",
  title: "Your Global Partner for Technology Innovation",
  image: IMAGES.INTRO_SRIMWORKS,
  desc: `SRIM Works is a multinational technology solutions and enterprise engineering firm headquartered in Hyderabad, India. With a talented team of over 300 professionals, we cater to businesses worldwide, delivering customized solutions that meet the unique challenges of every client. 

From cloud infrastructure and modern DevOps to AI-powered analytics, precision data annotations, and product engineering, our global reach and diverse expertise help businesses navigate digital transformation. Partner with us for a future-ready, innovative approach to success.`,
  dataList: [],
  btnText: "Schedule Meeting",
};

export const HOME_WEWORK = {
  heading: "We Work With",
  title: "Trusted by Leading Organizations Worldwide",
  image: IMAGES.HOME_WEWORK,
  desc: `We partner with organizations across various industries, including healthcare, retail, finance, logistics, manufacturing, and more. Our clients range from growing startups to large enterprises, all benefiting from our tailored solutions that help them navigate digital transformation and thrive in their industries.`,
  dataList: [],
  btnText: "Schedule Meeting",
};

export const WHO_WE_ARE = {
  header: "WHO WE ARE",
  title: "Innovative, Passionate, and Global",
  desc: `At SRIM Works, we are more than just a technology services provider – we are your strategic partner in business transformation. Headquartered in Hyderabad, India, our team of over 300 experts works across diverse sectors, delivering end-to-end solutions that drive growth, efficiency, and competitive advantage. 
With a focus on innovation, collaboration, and integrity, we leverage cutting-edge technologies like AI, blockchain, and cloud computing to help businesses unlock their full potential and embrace the future with confidence.`,
  btnText: "Know More",
  image: IMAGES.HOME_WHOWEARE,
  btnClass: "secondary-button-white-filled",
  cards: [
    {
      title: "Global Reach",
      content:
        "SRIM Works connects businesses worldwide with top-tier technology solutions and talent, driving innovation across borders.",
    },
    {
      title: "Expert Team",
      content:
        "With over 300 skilled professionals, we deliver tailored solutions that drive real business impact for clients worldwide.",
    },
    {
      title: "Innovation Focus",
      content:
        "We lead in technology trends, investing in R&D to provide cutting-edge solutions that keep our clients ahead.",
    },
    {
      title: "Collaboration",
      content:
        "We believe in the power of teamwork, both within our organization and with our clients, to achieve shared success.",
    },
  ],
};

// navbar
export const NavItems = [
  {
    title: "Who We Are",
    links: [
      { to: "/about-us", label: "About Us" },
      { to: "/about-us#leader-ship", label: "Leadership Team" },
      { to: "/pressroom", label: "Press Room" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Practices",
    links: [
      { to: "/design", label: "Design & UX Strategy" },
      { to: "/digital-engineering", label: "Digital Engineering" },
      { to: "/big-data", label: "Big Data Analytics" },
      { to: "/AI&ML", label: "AI & Machine Learning" },
      { to: "/open-source", label: "Open Source Technologies" },
      { to: "/data-annotation", label: "Data Annotation Services" },
      { to: "/microsoft-technologies", label: "Microsoft Technologies" },
      { to: "/cloud-computing", label: "Cloud Computing & DevOps" },
      { to: "/erp-crm", label: "ERP & CRM Solutions" },
    ],
  },
  {
    title: "Offerings",
    links: [
      { to: "/innovation-research", label: "Innovation & Research Lab" },
      { to: "/prod-dev-lifecycle", label: "Product Dev Lifecycle" },
      { to: "/lean-product-engineering", label: "Lean Product Engineering" },
      { to: "/professional-services", label: "Professional Services" },
      { to: "/channel-partners", label: "Channel Partners" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/bfsi", label: "BFSI & Banking" },
      { to: "/fintech", label: "FinTech" },
      { to: "/health-care", label: "Healthcare & Life Sciences" },
      { to: "/retail", label: "Retail & Consumer" },
      { to: "/e-commerce", label: "E-Commerce" },
      { to: "/logistics", label: "Logistics & Supply Chain" },
      { to: "/real-estate", label: "Real Estate & PropTech" },
      { to: "/media-entertainment", label: "Media & Entertainment" },
      { to: "/fmcg", label: "FMCG" },
      { to: "/marine", label: "Marine & Maritime" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blogs", label: "Insights & Blogs" },
      { to: "/pressroom", label: "Press Room" },
      { to: "/reviews", label: "Client Testimonials" },
    ],
  },
];

export const ASIDE_HUMANITY = [
  {
    image: IMAGES.OFFER_1,
    heading: "",
    title: "Our Commitment to Diversity and Inclusion",
    content:
      "We are honored to provide Discounted digital marketing services to:",
    list: [
      "Companies owned by the LGBTQ+ community",
      "Companies owned by Specially-abled individuals and Veterans ",
      "Companies owned by Women",
    ],
  },
  {
    image: IMAGES.HERO_1,
    heading: "Our Vision",
    title: " A Better Society for All",
    list: [],
    content:
      "This initiative is driven by our belief that a diverse and inclusive society isn’t just a dream—it’s a responsibility we all share. At SRIM Media, we treat each organization with the utmost respect and care, because we know that every story, every mission, and every goal deserves to be heard.  By working together, we can build stronger communities, drive positive change, and make a meaningful contribution to society. This is how we define success—not just by the results we deliver, but by the impact we leave behind. ",
  },
  {
    image: IMAGES.HERO_1,
    heading: "",
    title: "Pioneering a New Approach ",
    list: [],
    content:
      "SRIM Media is proud to be the trailblazer in this unique approach to digital marketing. We are the first and only company to offer this level of support to such a diverse range of communities. We recognize that every business and organization has a story to tell, a mission to fulfill, and a vision to achieve. Our role is to amplify those stories, empower those missions, and help bring those visions to life.\nThis initiative is built on the principles of respect, care, and inclusivity. We take great pride in treating each client, regardless of their size or background, with the same level of dedication and professionalism. We are not just service providers; we are partners in the journey toward a more equitable society. ",
  },
  {
    image: IMAGES.HERO_1,
    heading: "",
    title: "Join Us in Making a Difference",
    list: [],
    content: `We invite you to be part of this transformative journey. If you belong to any of the communities we aim to support or know of organizations that could benefit from our initiative, we would love to hear from you. Together, we can build stronger communities, drive meaningful change, and ensure that no one is left behind.\nReach out to us today, and let's create a better tomorrow—one that is defined by unity, compassion, and shared progress.`,
    btnText: "Join Now",
  },
];

export const REACH_OUT = {
  title: "SRIM WORKS",
  heading: `Have questions or want to
          collaborate? Reach out to us`,
  image: "",
  btnText: "Schedule Meeting",
  path: "",
};

//contact us

export const CONTACT_HERO = {
  header: "",
  title: "Contact Us",
  desc: "",
  btnText: "",
  image: IMAGES.SCHEDULE_MEETING_HERO,
};

// about
export const ABOUT_HERO = {
  header: "SRIM WORKS",
  title: "Driving Global Innovation with Cutting-Edge Technology",
  desc: "At SRIM Works, we are more than just a technology company—we are innovators, problem solvers, and global partners. Headquartered in Hyderabad, India’s bustling tech hub, we deliver transformative solutions that empower businesses to thrive in an ever-evolving digital landscape. Our expertise in advanced technologies, coupled with a passion for innovation, enables us to create impactful, future-ready solutions that drive growth and success.",
  btnText: "Get Started",
  image: IMAGES.WHO_WE_ABOUTUS_HERO,
};

export const ABOUT_MARKET_TRENDS = {
  heading: "Our Philosophy",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Design Thinking: Understand and Innovate",
  content:
    "We begin every project by deeply understanding the problem, empathizing with stakeholders, and exploring innovative possibilities to ensure we solve the right challenges.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordians_contents: [
    {
      id: 0,
      subHead: "Design Thinking: Understand and Innovate",
      content: `We begin every project by deeply understanding the problem, empathizing with stakeholders, and exploring innovative possibilities to ensure we solve the right challenges.`,
    },
    {
      id: 1,
      subHead: "Lean Startup: Build Smart, Build Right",
      content: `The adoption of digital technologies is streamlining marine operations and improving decision-making. Real-time data, IoT-enabled sensors, and advanced analytics enable precise tracking, enhanced performance, and predictive maintenance for vessels and equipment.`,
    },
    {
      id: 2,
      subHead: "Agile & DevOps: Continuous Value Creation",
      content: `Automation is revolutionizing maritime logistics, from cargo handling to port operations. The rise of autonomous vessels promises safer, more efficient maritime transport by reducing human error and improving navigational precision.`,
    },
  ],
  image: IMAGES.WHO_WE_ABOUTUS_SECTION_2,
  dataList: [],
};

// press room
export const PRESS_HERO = {
  header: "Press Room",
  title: "Explore SRIM Works’ news, achievements, and updates.",
  desc: "Welcome to the SRIM Works Press Room, your gateway to the latest news, insights, and achievements from our global journey in technology innovation. Explore our milestones, industry recognitions, and the transformative solutions that are making headlines worldwide.",
  btnText: "",
  image: IMAGES.WHO_WE_PRESS_HERO,
};
export const PRESS_CARDS = [
  {
    date: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    content:
      "A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    image: IMAGES.ALML_OFFER_1,
    btnText_btn: "Read More",
  },
  {
    date: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    content:
      " A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    image: IMAGES.ALML_OFFER_1,
    btnText_btn: "Read More",
  },
  {
    date: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    content:
      " A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    image: IMAGES.ALML_OFFER_1,
    btnText_btn: "Read More",
  },
  {
    date: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    content:
      "Text: A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    image: IMAGES.ALML_OFFER_1,
    btnText_btn: "Read More",
  },
];

// industries

//marine
export const MARINE_HERO = {
  header: "Marine",
  title: "Empowering the Marine Industry with Digital Transformation",
  desc: "Transform marine operations with data-driven insights, automation, and next-gen technologies to enhance efficiency, safety, and sustainability.",
  btnText: "Get Started",
  image: IMAGES.MARINE_HERO,
};
export const MARINE_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.MARINE_OVERVIEW,
  desc: `The marine industry faces unique challenges such as operational efficiency, regulatory compliance, and environmental sustainability. At SRIM Works, we deliver tailored digital solutions to address these challenges and drive innovation.

Our expertise in data analytics, IoT, AI, and automation ensures optimal fleet management, seamless logistics, and enhanced safety measures. From port operations to vessel monitoring, we empower marine businesses to navigate complexities and achieve operational excellence.`,
  dataList: [],
};

export const MARINE_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: `The marine industry is undergoing significant transformation driven by emerging technologies, regulatory pressures, and environmental sustainability goals. Here are key trends shaping the future of the maritime sector:`,

  accordians_contents: [
    {
      id: 0,
      subHead: "Digitalization of Marine Operations",
      content: `The adoption of digital technologies is streamlining marine operations and improving decision-making. Real-time data, IoT-enabled sensors, and advanced analytics enable precise tracking, enhanced performance, and predictive maintenance for vessels and equipment.`,
    },
    {
      id: 1,
      subHead: "Automation and Autonomous Vessels",
      content: `Automation is revolutionizing maritime logistics, from cargo handling to port operations. The rise of autonomous vessels promises safer, more efficient maritime transport by reducing human error and improving navigational precision.`,
    },
    {
      id: 2,
      subHead: "Sustainability and Green Shipping",
      content: `The global push for sustainability is driving the adoption of green technologies. Fuel-efficient engines, alternative energy sources, and carbon capture solutions are helping reduce emissions and meet IMO (International Maritime Organization) regulations.`,
    },
  ],
  image: IMAGES.MARINE_MARKET_TRENDS,
  dataList: [],
};

export const MARINE_OPERATIONS = {
  heading: "",
  title: "Digital Innovations in Marine Operations",
  image: IMAGES.MARINE_ASIDE_1,
  desc: `We leverage cutting-edge technologies to revolutionize marine operations. By integrating IoT sensors, AI-driven analytics, and real-time data visualization, we enable smarter decisions and proactive maintenance.`,
  dataList: [
    "Predictive maintenance for vessels and equipment",
    "Enhanced fleet performance tracking and fuel optimization",
    "Automation for port and cargo operations",
  ],
};

export const MARINE_SUSTAINABILITY = {
  heading: "",
  title: "Sustainability and Regulatory Compliance",
  image: IMAGES.MARINE_ASIDE_2,
  desc: `Meeting environmental regulations and achieving sustainability goals are critical for the marine industry. SRIM Works provides solutions to ensure compliance while minimizing environmental impact.`,
  dataList: [
    "Carbon footprint monitoring and reduction strategies",
    "Advanced emissions tracking systems",
    "Compliance with IMO regulations and global standards",
  ],
};

// BFSI

export const BFSI_HERO = {
  header: "BFSI",
  title:
    "Enable Smart Banking, Innovate Financial Services, and Digitize Insurance",
  desc: "Leverage technology to embrace data and AI-powered banking operations, adopt agility and speed across financial transactions, and implement digital insurance trends for superior outcomes.",
  btnText: "Get Started",
  image: IMAGES.BFSI_HERO,
};

export const BFSI_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.BFSI_OVERVIEW,
  desc: "At SRIM Works, we empower banks, financial service providers, and insurers through technology modernization. Our solutions deliver personalized, embedded digital customer experiences, improve process efficiencies with value-added interactions, and create new revenue opportunities by enabling market and competitor differentiation.",
  dataList: [],
};

export const BFSI_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "AI-Powered Chatbots and Robo-Advisors: Transforming Customer Engagement",
  title: "Open Banking",
  content:
    "Open Banking enables seamless integration between banks, third-party services, and customers, offering agility and portability in transactions.",
  subHead1: "Chatbots and Robo-Advisors",
  subHead2: "Digitization and Automation",
  image: IMAGES.BFSI_MARKET_TRENDS,
  accordians_contents: [
    {
      id: 0,
      subHead: "Open Banking",
      content: `Open Banking enables seamless integration between banks, third-party services, and customers, offering agility and portability in transactions.`,
    },
    {
      id: 1,
      subHead: "Chatbots and Robo-Advisors",
      content: `Intelligent chatbots and BFSI-specific robo-advisors simplify tasks like insurance purchase, investment advice, and customer service.`,
    },
    {
      id: 2,
      subHead: "Digitization and Automation",
      content: `Digitization improves efficiency, customer experiences, and productivity while reducing costs. Automation enhances the accuracy and speed of digitized processes.`,
    },
  ],
  dataList: [],
};

export const BFSI_ORG = {
  title: "BFSI organizations",
  heading: "A Platform for Collaboration",
  image: IMAGES.BFSI_ASIDE_1,
  desc: "",
  dataList: [
    "B2B Payments: Complexities in managing secure and seamless transactions.",
    "Trade Financing Fraud: Combating fraudulent practices across global trade.",
    "Legacy Core Banking Systems: Modernizing outdated infrastructure.",
    "Post-Trade Processing: Enhancing efficiency in back-office operations.",
    "Regulatory Hurdles: Navigating stringent compliance requirements.",
    "Underwriting Accuracy: Ensuring precise risk assessments in underwriting processes.",
  ],
};

export const BFSI_HELP = {
  heading: "",
  title: "How We Help",
  image: IMAGES.BFSI_ASIDE_2,
  desc: "",
  dataList: [
    "Data Engineering: Building automated data pipelines, cloud-based data lakes, and data warehouses for diverse datasets like KYC and trading.",
    "Big Data: Providing forecasting for financial trends and risk modeling for credit scoring and claims processing.",
    "Data Science: Enabling customer segmentation, personalized offerings, and fraud detection during claims processing.",
    "Business Intelligence: Offering actionable insights for customer intelligence, process automation, and investment analysis.",
  ],
};

//logistics

export const LOGISTICS_HERO = {
  header: "Logistics",
  title: "Empowering Logistics for a Connected World",
  desc: "Transform your logistics operations with cutting-edge technology, real-time data insights, and process automation to achieve efficiency, accuracy, and scalability.",
  btnText: "Get Started",
  image: IMAGES.LOGISTICS_HERO,
};

export const LOGISTICS_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.LOGISTICS_OVERVIEW,
  desc: "In today’s fast-paced world, logistics is the backbone of global commerce. We empower logistics organizations to overcome operational challenges, streamline supply chains, and enhance customer experiences through innovative technologies. From smart warehouses to predictive analytics, we deliver solutions that drive agility and precision across the logistics ecosystem.",
  dataList: [],
};

export const LOGISTICS_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "AI-Powered Chatbots and Robo-Advisors: Transforming Customer Engagement",
  title: "Automation in Logistics",
  content:
    "Automation is transforming logistics, from warehouse robotics to self-driving delivery vehicles, ensuring faster and more accurate operations.",
  subHead1: "Predictive Analytics",
  subHead2: "Sustainability Initiatives",
  accordians_contents: [
    {
      id: 0,
      subHead: "Automation in Logistics",
      content: `Automation is transforming logistics, from warehouse robotics to self-driving delivery vehicles, ensuring faster and more accurate operations.`,
    },
    {
      id: 1,
      subHead: "Predictive Analytics",
      content: `AI and machine learning enable accurate demand forecasting, route optimization, and inventory management for enhanced operational efficiency.`,
    },
    {
      id: 2,
      subHead: "Sustainability Initiatives",
      content: `Green logistics solutions, including electric vehicles, alternative fuels, and eco-friendly packaging, are helping organizations reduce their environmental impact.`,
    },
  ],
  image: IMAGES.LOGISTICS_MARKET_TRENDS,
  dataList: [],
};

export const LOGISTICS_DIGITAL = {
  heading: "",
  title: "Digital Transformation in Logistics",
  image: IMAGES.LOGISTICS_ASIDE_1,
  desc: "Leverage digital tools to revolutionize logistics operations. We enable real-time tracking, automated workflows, and IoT integration, ensuring seamless coordination between all supply chain stakeholders. From warehouse management to last-mile delivery, our solutions ensure end-to-end optimization.",
  dataList: [],
};

export const LOGISTICS_DATA_DRIVEN = {
  heading: "",
  title: "Data-Driven Insights for Smarter Logistics",
  image: IMAGES.LOGISTICS_ASIDE_2,
  desc: "Turn data into actionable insights with our advanced analytics solutions. Predict demand, optimize routes, and improve inventory management with AI-driven analytics and forecasting tools. Empower your logistics operations with data intelligence to make informed decisions faster.",
  dataList: [],
};

// realestate

export const REAL_ESTATE_HERO = {
  header: "Real Estate",
  title: "Revolutionizing Real Estate with Technology",
  desc: "Empowering real estate businesses to innovate and thrive with data-driven insights, digital platforms, and automation tools",
  btnText: "Get Started",
  image: IMAGES.REAL_ESTATE_HERO,
};

export const REAL_ESTATE_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.REAL_ESTATE_OVERVIEW,
  desc: "The real estate industry is evolving rapidly, driven by digital transformation and changing customer expectations. At SRIM, we empower real estate organizations with technology solutions that enhance operational efficiency, deliver personalized experiences, and unlock new growth opportunities. From property management to virtual tours and AI-powered analytics, we help you stay ahead in a competitive market.",
  dataList: [],
};

export const REAL_ESTATE_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "AI-Powered Chatbots and Robo-Advisors: Transforming Customer Engagement",
  title: "Virtual Reality (VR) in Real Estate",
  content:
    "VR is revolutionizing property viewing, offering immersive virtual tours that save time and enhance customer experiences.",
  subHead1: "Smart Buildings",
  subHead2: "Real Estate Analytics",
  accordians_contents: [
    {
      id: 0,
      subHead: "Virtual Reality (VR) in Real Estate",
      content: `VR is revolutionizing property viewing, offering immersive virtual tours that save time and enhance customer experiences.`,
    },
    {
      id: 1,
      subHead: "Smart Buildings",
      content: `IoT-enabled smart buildings are becoming the norm, with features like energy optimization, automated security, and predictive maintenance.`,
    },
    {
      id: 2,
      subHead: "Real Estate Analytics",
      content: `Advanced analytics tools help predict market trends, optimize pricing strategies, and identify profitable investment opportunities.`,
    },
  ],
  image: IMAGES.REAL_ESTATE_MARKET_TRENDS,
  dataList: [],
};

export const REAL_ESTATE_DIGITAL = {
  heading: "",
  title: "Digital Transformation in Real Estate",
  image: IMAGES.REAL_ESTATE_ASIDE_1,
  desc: "Embrace digital platforms to streamline property listing, buying, selling, and rental processes. Our solutions include virtual tours, CRM systems, and online booking platforms to create seamless customer journeys and efficient operations.",
  dataList: [],
};

export const REAL_ESTATE_AI = {
  heading: "",
  title: "AI-Powered Insights for Smarter Decisions",
  image: IMAGES.REAL_ESTATE_ASIDE_2,
  desc: "Leverage AI and data analytics to understand market trends, predict property valuations, and identify investment opportunities. With real-time insights, we help you make informed decisions and maximize returns on investments.",
  dataList: [],
};

//  reatail

export const RETAIL_HERO = {
  header: "Retail",
  title: "Transforming Retail with Digital Excellence",
  desc: "Redefine customer experiences, streamline operations, and drive growth with technology-powered retail solutions.",
  btnText: "Get Started",
  image: IMAGES.RETAIL_HERO,
};

export const RETAIL_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.RETAIL_OVERVIEW,
  desc: "The retail industry is rapidly evolving, with technology reshaping how businesses engage with customers and operate efficiently. At SRIM, we empower retailers to embrace innovation and stay competitive. From omnichannel experiences to data-driven insights, we enable retail transformation with digital solutions tailored to meet modern consumer demands.",
  dataList: [],
};

export const RETAIL_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "AI-Powered Chatbots and Robo-Advisors: Transforming Customer Engagement",
  title: "Omnichannel Commerce",
  content:
    "Retailers are merging physical and digital channels to offer consistent shopping experiences, from curbside pickups to same-day deliveries.",
  subHead1: "Personalization with AI",
  subHead2: "Sustainable Retail Practices",
  accordians_contents: [
    {
      id: 0,
      subHead: "Omnichannel Commerce",
      content: `Retailers are merging physical and digital channels to offer consistent shopping experiences, from curbside pickups to same-day deliveries.`,
    },
    {
      id: 1,
      subHead: "Personalization with AI",
      content: `AI-driven personalization is transforming customer experiences, offering tailored recommendations and promotions based on individual preferences.`,
    },
    {
      id: 2,
      subHead: "Sustainable Retail Practices",
      content: `Consumers increasingly prefer eco-conscious brands. Sustainable sourcing, packaging, and operations are reshaping the retail landscape.`,
    },
  ],
  image: IMAGES.RETAIL_MARKET_TRENDS,
  dataList: [],
};

export const RETAIL_OPERATIONAL = {
  heading: "",
  title: "Operational Excellence through Automation",
  image: IMAGES.RETAIL_ASIDE_1,
  desc: "Streamline retail operations with automation tools for inventory management, supply chain optimization, and customer service. By integrating cutting-edge technologies, we help you save costs and enhance productivity.",
  dataList: [],
};

export const RETAIL_DATA_DRIVEN = {
  heading: "",
  title: "Data-Driven Decision Making",
  image: IMAGES.RETAIL_ASIDE_2,
  desc: "Leverage advanced analytics to understand customer preferences, optimize inventory, and predict market trends. Our solutions turn raw data into actionable insights, enabling smarter decisions that drive growth.",
  dataList: [],
};

// E-Commerce
export const E_COMMERCE_HERO = {
  header: "Ecommerce",
  title: "Revolutionizing eCommerce for the Digital Era",
  desc: "Empower your online store with advanced technologies, seamless customer experiences, and data-driven insights to drive growth and engagement.",
  btnText: "Get Started",
  image: IMAGES.ECOMMERCE_HERO,
};

export const E_COMMERCE_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.ECOMMERCE_OVERVIEW,
  desc: "Ecommerce is at the forefront of digital transformation, reshaping how businesses interact with customers. At SRIM, we provide end-to-end eCommerce solutions tailored to your needs. From creating scalable online platforms to optimizing customer journeys with data and AI, we enable businesses to thrive in the competitive online marketplace.",
  dataList: [],
};

export const E_COMMERCE_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "AI-Powered Chatbots and Robo-Advisors: Transforming Customer Engagement",
  title: "Mobile Commerce Growth",
  content:
    "Mobile shopping continues to dominate, with more consumers preferring to browse and buy on their smartphones.",
  subHead1: "Social Commerce",
  subHead2: "AI-Driven Personalization",
  accordians_contents: [
    {
      id: 0,
      subHead: "Mobile Commerce Growth",
      content: `Mobile shopping continues to dominate, with more consumers preferring to browse and buy on their smartphones.`,
    },
    {
      id: 1,
      subHead: "Social Commerce",
      content: `Social media platforms are transforming into powerful eCommerce hubs, offering direct purchasing options and influencer-driven campaigns.`,
    },
    {
      id: 2,
      subHead: "AI-Driven Personalization",
      content: `AI is reshaping the eCommerce landscape by delivering hyper-personalized shopping experiences, from product recommendations to dynamic pricing.`,
    },
  ],
  image: IMAGES.ECOMMERCE_MARKET_TRENDS,
  dataList: [],
};

export const E_COMMERCE_SEAMLESS = {
  heading: "",
  title: "Seamless Online Shopping Experiences",
  image: IMAGES.ECOMMERCE_ASIDE_1,
  desc: "We focus on creating customer-centric eCommerce platforms designed to engage and convert. With intuitive interfaces, advanced search capabilities, and user-friendly navigation, we ensure your customers enjoy a seamless and rewarding shopping experience. From product discovery to checkout, every touchpoint is optimized for simplicity and speed.",
  dataList: [],
};

export const E_COMMERCE_SMART_SUPPLY = {
  heading: "",
  title: "Smart Supply Chain & Inventory Management",
  image: IMAGES.ECOMMERCE_ASIDE_2,
  desc: "Streamline your operations with intelligent supply chain and inventory solutions. Our systems provide real-time tracking, automated stock updates, and predictive analytics to help you forecast demand and prevent overstocking or shortages. With improved efficiency, you can reduce operational costs while ensuring timely deliveries that keep your customers satisfied.",
  dataList: [],
};

// Media & Entertainment
export const MEDIA_HERO = {
  header: "Media and Entertainment",
  title: "Transforming Media & Entertainment with Innovation",
  desc: "Revolutionize your media and entertainment offerings with cutting-edge digital solutions. From content creation to distribution and audience engagement, we empower businesses to stay ahead in the fast-evolving digital landscape. Let us help you create immersive, personalized experiences that captivate and retain your audience.",
  btnText: "Get Started",
  image: IMAGES.MEDIA_HERO,
};

export const MEDIA_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.MEDIA_OVERVIEW,
  desc: "We provide end-to-end solutions for the media and entertainment industry, helping organizations to innovate, enhance user experiences, and maximize revenue streams. Our expertise spans content management, audience engagement, data analytics, and monetization strategies. With our forward-thinking approach, we help you embrace digital transformation and stay competitive in an industry that’s continuously evolving.",
  dataList: [],
};

export const MEDIA_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "The media and entertainment industry is rapidly evolving with the advancement of new technologies and shifting consumer behaviors. Staying ahead of these trends is crucial to remain competitive.",
  title: "Rise of OTT Platforms",
  content:
    "OTT platforms are reshaping content consumption, offering viewers more flexibility and access to exclusive content. AI-driven recommendations and subscription models are key to maintaining competitiveness in the growing market.",
  subHead1: "Immersive AR/VR Experiences",
  subHead2: "AI and Data-Driven Personalization",
  accordians_contents: [
    {
      id: 0,
      subHead: "Rise of OTT Platforms",
      content: `OTT platforms are reshaping content consumption, offering viewers more flexibility and access to exclusive content. AI-driven recommendations and subscription models are key to maintaining competitiveness in the growing market.`,
    },
    {
      id: 1,
      subHead: "Immersive AR/VR Experiences",
      content: `AR and VR are revolutionizing the entertainment industry by delivering interactive, immersive experiences. These technologies engage audiences in new ways, particularly in gaming, live events, and branded campaigns.`,
    },
    {
      id: 2,
      subHead: "AI and Data-Driven Personalization",
      content: `AI is enhancing content personalization by analyzing user data to predict preferences and deliver tailored recommendations. This boosts user engagement and helps media companies deliver more relevant content to their audiences.`,
    },
  ],
  image: IMAGES.MEDIA_MARKET_TRENDS,
  dataList: [],
};

export const MEDIA_CONTENT = {
  heading: "",
  title: "Content Creation & Management",
  image: IMAGES.MEDIA_ASIDE_1,
  desc: "We assist media companies in streamlining the entire content creation and management process, from ideation to production. Our solutions enable efficient workflows, collaboration, and content distribution across multiple platforms. With the latest technologies, we ensure your content is optimized for every device and screen size, enhancing the audience experience.",
  dataList: [],
};

export const MEDIA_PERSONALIZED = {
  heading: "",
  title: "Personalized Audience Engagement",
  image: IMAGES.MEDIA_ASIDE_2,
  desc: "Leverage data-driven insights to deliver tailored experiences to your audience. Through advanced analytics, we help you understand user preferences, behaviors, and trends, enabling you to create more engaging and relevant content. With personalized recommendations and dynamic content, we enhance user retention and drive greater engagement.",
  dataList: [],
};

// FMCG
export const FMCG_HERO = {
  header: "FMCG",
  title: "Empowering FMCG with Innovation and Efficiency",
  desc: "Leverage cutting-edge technology and data analytics to drive growth, streamline operations, and deliver personalized experiences to customers in the fast-paced FMCG sector.",
  btnText: "Get Started",
  image: IMAGES.FMCG_HERO,
};

export const FMCG_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.FMCG_OVERVIEW,
  desc: "In the fast-moving consumer goods (FMCG) industry, speed, efficiency, and customer engagement are crucial. We empower FMCG companies to modernize their processes, enhance product delivery, and create seamless, data-driven experiences across all channels. From supply chain optimization to personalized marketing strategies, our solutions help businesses stay ahead of trends and market demands.",
  dataList: [],
};

export const FMCG_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "The media and entertainment industry is rapidly evolving with the advancement of new technologies and shifting consumer behaviors. Staying ahead of these trends is crucial to remain competitive.",
  title: "Personalized Customer Experiences",
  content:
    "The FMCG industry is increasingly focusing on hyper-personalization through data-driven insights, delivering tailored products and services that resonate with individual consumer preferences.",
  subHead1: "Sustainability and Eco-friendly Products",
  subHead2: "AI-Driven Supply Chain Optimization",
  accordians_contents: [
    {
      id: 0,
      subHead: "Personalized Customer Experiences",
      content: `The FMCG industry is increasingly focusing on hyper-personalization through data-driven insights, delivering tailored products and services that resonate with individual consumer preferences.`,
    },
    {
      id: 1,
      subHead: "Sustainability and Eco-friendly Products",
      content: `Consumers are becoming more environmentally conscious, demanding sustainable, eco-friendly packaging and ethically produced products. FMCG companies are integrating sustainable practices into their product lines and supply chains.`,
    },
    {
      id: 2,
      subHead: "AI-Driven Supply Chain Optimization",
      content: `AI and machine learning are revolutionizing supply chain management, enabling FMCG companies to predict demand more accurately, optimize routes, reduce costs, and enhance overall operational efficiency.`,
    },
  ],
  image: IMAGES.FMCG_MARKET_TRENDS,
  dataList: [],
};

export const FMCG_DIGITAL = {
  heading: "",
  title: "Digital Transformation",
  image: IMAGES.FMCG_ASIDE_1,
  desc: "We help FMCG businesses embrace digital transformation by modernizing their infrastructure, enhancing operational efficiencies, and utilizing advanced technologies like AI and IoT. Through a robust digital ecosystem, companies can improve product tracking, streamline distribution, and gain valuable customer insights to drive decision-making.",
  dataList: [],
};

export const FMCG_DATA = {
  heading: "",
  title: "Data and Analytics",
  image: IMAGES.FMCG_ASIDE_2,
  desc: "Data is the backbone of successful FMCG strategies. We offer end-to-end data solutions, from data collection and warehousing to advanced analytics and reporting. This enables businesses to monitor product performance, forecast demand, optimize inventory management, and personalize marketing to meet consumer needs.",
  dataList: [],
};

// Health care
export const HEALTH_CARE_HERO = {
  header: "Health Care",
  title: "Transforming Healthcare with Innovation and Technology",
  desc: "Revolutionizing patient care, enhancing operational efficiency, and empowering healthcare organizations with data-driven solutions to improve outcomes and deliver personalized experiences.",
  btnText: "Get Started",
  image: IMAGES.HEALTH_HERO,
};

export const HEALTH_CARE_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.HEALTH_OVERVIEW,
  desc: "In the healthcare industry, technology is crucial to improving patient care and optimizing operational workflows. We help healthcare organizations leverage advanced technologies like AI, machine learning, and cloud computing to enhance decision-making, streamline processes, and provide better care for patients. From patient management to data-driven insights, we offer end-to-end solutions to drive innovation and efficiency in healthcare.",
  dataList: [],
};

export const HEALTH_CARE_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "The media and entertainment industry is rapidly evolving with the advancement of new technologies and shifting consumer behaviors. Staying ahead of these trends is crucial to remain competitive.",
  title: "Telemedicine and Virtual Healthcare",
  content:
    "Telemedicine is rapidly growing, allowing healthcare providers to offer remote consultations and treatments. This trend is improving accessibility and convenience, especially in underserved regions, and enabling faster care delivery.",
  subHead1: "AI and Machine Learning in Diagnostics",
  subHead2: "Wearables and Remote Monitoring",
  accordians_contents: [
    {
      id: 0,
      subHead: "Telemedicine and Virtual Healthcare",
      content: `Telemedicine is rapidly growing, allowing healthcare providers to offer remote consultations and treatments. This trend is improving accessibility and convenience, especially in underserved regions, and enabling faster care delivery.`,
    },
    {
      id: 1,
      subHead: "AI and Machine Learning in Diagnostics",
      content: `AI and machine learning are revolutionizing the diagnostic process, improving the accuracy and speed of detecting diseases such as cancer, heart conditions, and neurological disorders. These technologies help healthcare providers make better-informed decisions and improve patient outcomes.`,
    },
    {
      id: 2,
      subHead: "Wearables and Remote Monitoring",
      content: `Wearable devices are becoming essential in monitoring patients’ health in real-time. These devices track vital signs, chronic conditions, and fitness levels, providing valuable data that can be shared with healthcare providers for proactive care management.`,
    },
  ],
  image: IMAGES.HEALTH_MARKET_TRENDS,
  dataList: [],
};

export const HEALTH_CARE_PATIENT = {
  heading: "",
  title: "Patient-Centered Care",
  image: IMAGES.HEALTH_ASIDE_1,
  desc: "We enable healthcare providers to deliver personalized care by harnessing data and AI technologies. Our solutions allow for better diagnosis, tailored treatment plans, and proactive patient management. With an integrated healthcare ecosystem, providers can track patient progress, manage appointments, and predict health risks, ensuring the best possible outcomes.",
  dataList: [],
};

export const HEALTH_CARE_OPERATIONAL = {
  heading: "",
  title: "Operational Efficiency",
  image: IMAGES.HEALTH_ASIDE_2,
  desc: "Healthcare organizations face mounting pressure to deliver better outcomes with fewer resources. Our solutions optimize administrative tasks, improve scheduling, and streamline communication. By automating repetitive processes and enhancing resource management, we help organizations reduce operational costs while maintaining high-quality care.",
  dataList: [],
};

// carrers

export const CARRERS_HERO = {
  btnText: "",
  image: IMAGES.CAREERS_HERO,
  heading: "Carrers",
  title: "Join Our Team, Shape the Future",
  desc: `Become a part of an innovative and dynamic workplace where your skills and passion drive impactful solutions. At SRIM Works, we foster growth, collaboration, and opportunities to make a difference. Your journey starts here!`,
};

export const CARRERS_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.CAREERS_OVERVIEW,
  desc: `At SRIM Works, we believe in empowering individuals to achieve their fullest potential. Our workplace thrives on innovation, collaboration, and inclusivity, creating an environment where talent is nurtured, ideas are celebrated, and careers are built.

We are more than just a company; we are a community of forward-thinkers, problem-solvers, and trailblazers united by a shared vision to create impactful solutions. Whether you're a seasoned professional or a fresh graduate, SRIM Works offers opportunities that challenge you, inspire you, and support your career aspirations.

Join us in shaping the future while advancing your career in an environment that values your growth and success.`,
  dataList: [],
};

export const SKILLS_TEXT = "Skills";
export const REQUIRMENTS = "Requirements";
export const CARRER_OPENINGS = [
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },
  {
    onsite: "Hyderabad   |   Onsite",
    postedon: "Posted on 01/01/24",
    role: "Sr. IT Engineer",
    location: "Hyderabad -India",
    skills: [
      "Ticketing Tools",
      "Intune, O365",
      "MAC Support",
      "PowerShell Scripting Knowledge",
    ],
    requirements: "7 - 9 Years",
    btnText: "Apply Now",
  },

  // {
  //   onsite:"",
  //   postedon:"",
  //   role:"",
  //   location:"",
  //   skills:[],
  //   requirements:"",
  //   btnText:""
  // },
  // {
  //   onsite:"",
  //   postedon:"",
  //   role:"",
  //   location:"",
  //   skills:[],
  //   requirements:"",
  //   btnText:""
  // },
  // {
  //   onsite:"",
  //   postedon:"",
  //   role:"",
  //   location:"",
  //   skills:[],
  //   requirements:"",
  //   btnText:""
  // },
  // {
  //   onsite:"",
  //   postedon:"",
  //   role:"",
  //   location:"",
  //   skills:[],
  //   requirements:"",
  //   btnText:""
  // }
];

export const RESOURCES_BLOGS_HERO = {
  btnText: "",
  image: IMAGES.RESOURCES_BLOGS_HERO,
  header: "Insights, Trends, and Expertise",
  title: "Blogs & Case Studies",
  desc: "Explore our blog to stay updated on the latest industry trends, technological innovations, and expert insights driving transformation across various sectors. Empower your knowledge and spark ideas for a brighter future.",
};

export const RESOURCES_TEXT = "Resources";

export const ARTICLE_HEADING = "Articles From SRIM Works";

export const LIST_HEADINGS = [
  {
    name: "All",
  },
  {
    name: "Blogs",
  },
  {
    name: "Case Studies",
  },
];

export const BLOGS_CARDS = [
  {
    postedon: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    desc: "A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    btnText: "Read More",
    img: "",
  },
  {
    postedon: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    desc: "A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    btnText: "Read More",
    img: "",
  },
  {
    postedon: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    desc: "A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    btnText: "Read More",
    img: "",
  },
  {
    postedon: "Posted on : 25/08/2024",
    title: "PESTEL Analysis for Business Expansion",
    desc: "A customer first approach and a proper UX practice ensure that user needs are addressed with the right solutions, in which expectations are met through a defined road map for efficient, intuitive, and effective customer experience.",
    btnText: "Read More",
    img: "",
  },
];

// Abou us

export const ABOUT_PHILOSOPY = {
  heading: "Market Trends",
  desc: "The media and entertainment industry is rapidly evolving with the advancement of new technologies and shifting consumer behaviors. Staying ahead of these trends is crucial to remain competitive.",
  title: "Rise of OTT Platforms",
  content:
    "OTT platforms are reshaping content consumption, offering viewers more flexibility and access to exclusive content. AI-driven recommendations and subscription models are key to maintaining competitiveness in the growing market.",
  subHead1: "Immersive AR/VR Experiences",
  subHead2: "AI and Data-Driven Personalization",
  image: "",
  dataList: [],
};

// our core values

export const CARDS_DATA = [
  {
    id: 1,
    icon: IMAGES.IDEA,
    heading: "Innovation ",
    content: `We continuously push boundaries, exploring new technologies to create future-ready solutions.`,
  },
  {
    id: 2,
    icon: IMAGES.QUALITY,
    heading: "Excellence",
    content: `We commit to delivering high-quality, efficient solutions that meet and exceed our clients’ expectations.`,
  },
  {
    id: 3,
    icon: IMAGES.SYS_INTEGRATION,
    heading: "Integrity",
    content: `  We build trust through transparency, honesty, and ethical business practices.`,
  },
];

// practises

export const SRIM_OFFER_TEXT = "SRIM Works Offer";

export const WHAT_OFFER_TEXT = "What We Offers";

// design

export const DESIGN_HERO = {
  header: "Design Engineering",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.DESIGN_HERO,
};

export const DESIGN_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.DESIGN_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const DESIGN_CARDS = [
  {
    title: "Digital Product Design",
    content: `Transform groundbreaking ideas into software solutions tailored to user needs, business goals, and technological possibilities.
We focus on creating future-proof, scalable products that drive innovation and enhance operational efficiency.
From discovery to deployment, our designs align with your vision to deliver tangible results.
Empower your business with innovative solutions that solve problems and create new opportunities.`,
    image: IMAGES.DESIGN_OFFER_1,
  },
  {
    title: "UI/UX Design",
    content: `Elevate your brand with intuitive interfaces and engaging user experiences that prioritize customer satisfaction.
Our designs bridge the gap between functionality and aesthetics, enhancing usability and trust.
By understanding user behavior, we create interfaces that maximize engagement and simplify interactions.
Experience improved customer retention and acquisition with designs that truly resonate.`,
    image: IMAGES.DESIGN_OFFER_2,
  },
  {
    title: "Industrial & Mechanical Design",
    content: `Design innovative products that align with end-user needs, market demands, and manufacturing excellence.
We provide full-cycle solutions, from opportunity identification to prototyping and manufacturing designs.
Our expertise ensures cost-effective, efficient, and reliable products that strengthen your business.
Turn your ideas into impactful products that enhance user experience and brand value.`,
    image: IMAGES.DESIGN_OFFER_3,
  },
  {
    title: "Service Experience Design",
    content: `Deliver exceptional customer and employee experiences with human-centered service design strategies.
Our tailored solutions improve workflows, optimize processes, and enhance customer satisfaction.
We focus on creating seamless, viable designs that add value to every interaction.
Boost your business efficiency with services designed to maximize impact and drive growth.`,
    image: IMAGES.DESIGN_OFFER_4,
  },
  {
    title: "Visual Design",
    content: `Strengthen your brand identity with visually compelling designs that capture audience attention.
Our creative expertise ensures that every visual communicates your message effectively.
From logos to promotional materials, we design assets that build trust and drive engagement.
Achieve a lasting impact with visuals that resonate with your target audience.`,
    image: IMAGES.DESIGN_OFFER_5,
  },
  {
    title: "Mobile App Design",
    content: `Craft intuitive and visually stunning mobile applications that elevate user experience.
Our design-driven engineering ensures your apps align with brand goals and market needs.
By blending functionality with creativity, we deliver apps that stand out in competitive markets.
Launch high-quality, user-friendly mobile apps that deliver exceptional performance and value.`,
    image: IMAGES.DESIGN_OFFER_6,
  },
  {
    title: "Web Design",
    content: `Create websites that combine stunning design with exceptional functionality for a seamless user journey.
Our designs are optimized for conversions, ensuring your site delivers measurable results.
We adhere to global best practices, offering end-to-end solutions for design and backend integration.
Elevate your online presence with a website that represents your brand's vision and goals.`,
    image: IMAGES.DESIGN_OFFER_7,
  },
  {
    title: "Digital Design Services",
    content: `Revolutionize user experiences with cutting-edge digital design strategies tailored to your business.
We integrate innovative technologies to create impactful marketing assets and seamless designs.
From ideation to execution, our digital designs deliver ease, creativity, and value for end users.
Achieve hassle-free user experiences that enhance engagement and maximize ROI.`,
    image: IMAGES.DESIGN_OFFER_8,
  },
];

export const DESIGN_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Discovery: Laying the Foundation for Great Design",
      content: `Great design begins with thorough research and discovery. We delve into the problem space to identify high-value challenges, gather critical insights, and ensure our solutions align with user, customer, and business needs.`,
    },
    {
      id: 1,
      subHead: "Define: Charting a Clear Path Forward",
      content: `We create clear design objectives based on insights from the discovery phase, ensuring every step of our process aligns with delivering impactful and user-centric outcomes.`,
    },
    {
      id: 2,
      subHead: "Prototype: Turning Ideas into Reality",
      content: `Prototyping helps us validate ideas quickly. By turning concepts into tangible models, we test, refine, and perfect designs before full-scale development.`,
    },
    {
      id: 3,
      subHead: "Evaluate: Leveraging Feedback for Better Outcomes",
      content: `Through iterative evaluation, we integrate user feedback and analytics to continuously improve and enhance designs, ensuring they deliver value and satisfaction.`,
    },
    {
      id: 4,
      subHead: "Develop: Creating Exceptional Products",
      content: `The final step focuses on translating exceptional design into fully functional, innovative products that drive growth and exceed expectations.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Human-Centered Discovery",
      content: `We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.`,
    },
    {
      id: 1,
      subHead: "MVP Approach to Design",
      content: `Our MVP-focused methodology validates key assumptions, incorporates customer feedback, and iterates designs for maximum user and business value while reducing time-to-market.`,
    },
    {
      id: 2,
      subHead: "Data-Driven Iteration",
      content: `By leveraging both qualitative and quantitative data, we refine designs to enhance user experiences, improve engagement, and maximize conversions. This data-driven approach ensures a higher ROI for businesses.`,
    },
  ],
  image: IMAGES.DESIGN_DIFFERENT,
  dataList: [],
};

//Digital Engineering

export const DIGITAL_ENGINEERING_HERO = {
  header: "Digital Engineering",
  title: "Empowering Transformation Across the Product Lifecycle",
  desc: "Embrace digital technologies to craft insight-driven, human-centric experiences and achieve a resilient digital strategy for lasting success.",
  btnText: "Get Started",
  image: IMAGES.DIGITAL_HERO,
};

export const DIGITAL_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.DIGITAL_OVERVIEW,
  desc: `At SRIM Works, we provide comprehensive solutions combining engineering excellence, expertise in digital technologies, and advanced automation implementation.

Our digital engineering approach fosters business and technology transformation for organizations. We develop robust, reliable, and secure digital-ready products and services, while our automation strategies streamline processes through continuous delivery pipelines.`,
  dataList: [],
};

export const DIGITAL_CARDS = [
  {
    heading: "Software Development",
    content:
      "We offer end-to-end software development services tailored to meet the demands of your business and accelerate digital transformation.",
    cards: [
      {
        image: IMAGES.DIGITAL_SOFTWARE_1,
        heading: "Web Development",
        content:
          " We build responsive, scalable, and high-performance web applications tailored to your business needs. Our solutions are designed to enhance user engagement and provide a seamless browsing experience across all devices.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_2,
        heading: "Frontend Development",
        content:
          "Our frontend development focuses on creating engaging, intuitive, and interactive user interfaces. We ensure a seamless user experience by incorporating modern technologies and design trends that cater to user needs.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_3,
        heading: "Backend Development",
        content:
          "Text:  Our backend development services ensure that your applications are built with reliable and scalable architecture. We integrate security and high-performance standards, ensuring smooth operation and data management.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_4,
        heading: "Mobile App Development",
        content:
          "We specialize in designing and developing mobile applications for both Android and iOS. Our mobile apps are optimized for performance, usability, and seamless integration with device features.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_5,
        heading: "Android App Development",
        content:
          " Our Android app development services are aimed at delivering performance-driven applications with a focus on usability, scalability, and smooth user experience across all Android devices.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_6,
        heading: "iOS App Development",
        content:
          "We build high-quality, native iOS applications that provide a robust user experience. Our apps are designed to leverage the best features of Apple devices, ensuring top-tier performance.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_7,
        heading: "Hybrid App Development",
        content:
          "Our hybrid mobile apps are developed to work seamlessly across different platforms, providing a unified experience with faster time-to-market and lower development costs.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_8,
        heading: "SaaS Development",
        content:
          "We offer SaaS application development services that provide flexibility and scalability for your business. Our solutions are designed to improve efficiency, increase productivity, and provide seamless cloud-based access.",
      },
      {
        image: IMAGES.DIGITAL_SOFTWARE_9,
        heading: "CMS Development",
        content:
          " Our CMS development services empower businesses to manage and update content efficiently. We create customizable, scalable solutions to help you maintain an intuitive and functional content management system.",
      },
    ],
  },
  {
    heading: "Quality Assurance",
    content:
      "Ensuring the highest quality standards with comprehensive testing services. We focus on functionality, performance, security, and usability to enhance customer satisfaction. Our rigorous testing process ensures the reliability of your software.",
    cards: [
      {
        image: IMAGES.DIGITAL_QUALITY_1,
        heading: "Quality Assurance",
        content:
          " We offer comprehensive testing services to ensure the quality, performance, and security of your software. Our QA process includes functional, performance, and security testing to guarantee a flawless user experience.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_2,
        heading: "Functional Testing",
        content:
          "Text: We conduct functional testing to verify that your software operates according to the defined requirements. Our tests ensure that all features and functionalities meet expectations.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_3,
        heading: "Automation Testing",
        content:
          "Text: We automate testing processes to reduce manual intervention, enhance testing efficiency, and increase reliability across your software applications.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_4,
        heading: "Performance Testing",
        content:
          "Our performance testing services ensure that your application can handle expected traffic and perform efficiently under heavy load conditions. We test for speed, scalability, and responsiveness.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_5,
        heading: "API Testing",
        content:
          "We ensure your APIs are reliable, secure, and capable of integrating with external services. Our API testing focuses on functionality, performance, and security to ensure optimal operation.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_6,
        heading: "Mobile App Testing",
        content:
          "We conduct extensive testing across multiple platforms to ensure that your mobile app works flawlessly on various devices and operating systems.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_7,
        heading: "Database Testing",
        content:
          "Our database testing services verify the integrity, performance, and security of your database systems. We ensure that your data is stored and accessed efficiently without risk of corruption.",
      },
      {
        image: IMAGES.DIGITAL_QUALITY_8,
        heading: "Security Testing",
        content:
          "We identify potential vulnerabilities and mitigate risks to ensure your software is secure. Our security testing covers all aspects, including authentication, authorization, and data encryption.",
      },
    ],
  },
  {
    heading: "Enterprise Software Development",
    content:
      "We help businesses build reliable, scalable, and secure enterprise-level software solutions. Our services empower organizations to streamline operations and drive growth. We offer customized solutions to suit specific business needs.",
    cards: [
      {
        image: IMAGES.DIGITAL_ENTERPRISE_1,
        heading: "Enterprise Software Development",
        content:
          "We develop tailored enterprise software solutions that help businesses streamline operations and improve efficiency. Our solutions are scalable and designed to meet the specific needs of large organizations.",
      },
      {
        image: IMAGES.DIGITAL_ENTERPRISE_2,
        heading: "Digital Transformation",
        content:
          "We help organizations embrace digital transformation by leveraging technology to improve business operations, enhance customer experiences, and create new revenue opportunities.",
      },
      {
        image: IMAGES.DIGITAL_ENTERPRISE_3,
        heading: "Enterprise Mobility",
        content:
          "Our enterprise mobility solutions enable businesses to empower their workforce with mobile applications that improve productivity and flexibility, allowing employees to work from anywhere.",
      },
      {
        image: IMAGES.DIGITAL_ENTERPRISE_4,
        heading: "ERP Consulting",
        content:
          "We offer expert ERP consulting services to optimize and implement enterprise resource planning systems. Our team ensures smooth integration and alignment with business objectives to enhance operational efficiency.",
      },
    ],
  },
  {
    heading: "Salesforce Implementation & Customization",
    content:
      "Maximize your Salesforce investment with our implementation, integration, and customization services. We help businesses leverage Salesforce for improved productivity, collaboration, and customer engagement. Tailored solutions to meet unique business goals.",
    cards: [
      {
        image: IMAGES.DIGITAL_SALESFORCE_1,
        heading: "Salesforce Implementation",
        content:
          "We assist businesses in implementing Salesforce to streamline customer relationship management, improve data accessibility, and enhance customer experiences through automation and integrations.",
      },
      {
        image: IMAGES.DIGITAL_SALESFORCE_2,
        heading: "Salesforce Customization",
        content:
          "We customize Salesforce solutions to meet the unique needs of your business. Our team adapts Salesforce to fit your workflow, improving efficiency and business alignment.",
      },
      {
        image: IMAGES.DIGITAL_SALESFORCE_3,
        heading: "Salesforce Application Development",
        content:
          "We develop custom Salesforce applications to optimize your business processes and improve customer engagement. Our solutions enhance functionality and help your business run smoothly.",
      },
      {
        image: IMAGES.DIGITAL_SALESFORCE_4,
        heading: "Salesforce Integration",
        content:
          "We integrate Salesforce with other systems to create a seamless flow of information across your business. Our integration services ensure that all data is synchronized for improved decision-making.",
      },
      {
        image: IMAGES.DIGITAL_SALESFORCE_5,
        heading: "Salesforce Migration",
        content:
          "Our Salesforce migration services help businesses transition smoothly to the platform, ensuring data integrity and minimal disruption. We assist with data import, system configuration, and post-migration support.",
      },
      {
        image: IMAGES.DIGITAL_SALESFORCE_6,
        heading: "Salesforce Upgrade and Maintenance",
        content:
          "We provide continuous upgrades and maintenance to keep your Salesforce system running at peak performance. Our services ensure that your CRM remains aligned with business goals.",
      },
    ],
  },
  {
    heading: "Cloud Solutions",
    content:
      "We offer cloud services to enable businesses to scale efficiently, improve performance, and reduce costs. Our solutions empower businesses to thrive in the digital era by leveraging the power of cloud technologies.",
    cards: [
      {
        image: IMAGES.DIGITAL_SOLUTIONS_1,
        heading: "Cloud Native Platform",
        content:
          "We specialize in developing cloud-native applications that are scalable, reliable, and secure. Our cloud solutions help businesses enhance their digital capabilities and adapt to changing market demands.",
      },
      {
        image: IMAGES.DIGITAL_SOLUTIONS_2,
        heading: "Microservices",
        content:
          "We design microservices architectures that break down complex applications into smaller, manageable components. This approach enhances flexibility, scalability, and speeds up the development process.",
      },
      {
        image: IMAGES.DIGITAL_SOLUTIONS_3,
        heading: "Architecture Design & Consulting",
        content:
          "Our cloud architecture design and consulting services help businesses build efficient and scalable infrastructure. We provide expert guidance on system design, cloud adoption, and platform optimization.",
      },
    ],
  },
  {
    heading: "Cloud Transformation",
    content:
      "Our cloud transformation services enable seamless migration and modernization for enhanced operational efficiency. We assist businesses in adopting cloud technologies to stay competitive in a fast-evolving market.",
    cards: [
      {
        image: IMAGES.DIGITAL_TRANSFORMATION_1,
        heading: "Cloud Transformation",
        content:
          "We guide businesses through cloud transformation, ensuring they maximize the benefits of cloud technologies. Our approach focuses on improving operational efficiency, scalability, and reducing costs.",
      },
      {
        image: IMAGES.DIGITAL_TRANSFORMATION_2,
        heading: "Cloud Migration",
        content:
          "Text: We offer seamless cloud migration services to help organizations transition from on-premise systems to cloud-based platforms, minimizing risks and ensuring data integrity throughout the process.",
      },
      {
        image: IMAGES.DIGITAL_TRANSFORMATION_3,
        heading: "App Modernization",
        content:
          "We modernize legacy applications by upgrading them to cloud-native solutions, improving performance, scalability, and user experience to meet current business demands.",
      },
      {
        image: IMAGES.DIGITAL_TRANSFORMATION_4,
        heading: "Cloud Consulting",
        content:
          "Our cloud consulting services help organizations develop strategies for cloud adoption, optimize existing cloud infrastructure, and drive digital transformation for enhanced performance.",
      },
    ],
  },
  {
    heading: "DevOps Services",
    content:
      "We implement DevOps practices to streamline your software development lifecycle and improve collaboration. Our solutions help businesses increase development speed and reduce downtime through automation and continuous delivery.",
    cards: [
      {
        image: IMAGES.DIGITAL_DEVOPS_1,
        heading: "DevOps Assessment",
        content:
          "We evaluate your existing DevOps practices and identify areas for improvement to streamline development processes and enhance collaboration across teams.",
      },
      {
        image: IMAGES.DIGITAL_DEVOPS_2,
        heading: "Continuous Integration",
        content:
          "Our continuous integration services ensure that code is continuously tested and integrated into the main branch, enhancing collaboration and reducing the risk of errors.",
      },
      {
        image: IMAGES.DIGITAL_DEVOPS_3,
        heading: "DevOps Pipeline Deployment",
        content:
          "We deploy automated DevOps pipelines to streamline the development process, reduce time-to-market, and ensure high-quality software delivery.",
      },
      {
        image: IMAGES.DIGITAL_DEVOPS_4,
        heading: "Continuous Testing",
        content:
          "Text: We integrate continuous testing into the DevOps pipeline to catch issues early in the development lifecycle and ensure that the software is always in a deployable state.",
      },
      {
        image: IMAGES.DIGITAL_DEVOPS_5,
        heading: "Optimization, Monitoring, and Maintenance",
        content:
          "We provide ongoing optimization, monitoring, and maintenance services to ensure your DevOps pipeline remains efficient and performs at its best.",
      },
    ],
  },
];

export const DIGITAL_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Digital Strategy",
      content: `We craft tailored digital strategies that transform how businesses operate, ensuring they remain competitive in the digital era:
Reimagining products and services for the digital age.
Enhancing customer experiences through human-centric designs.
Accelerating operations with cutting-edge automation.
`,
    },
    {
      id: 1,
      subHead: "Digital Transformation",
      content: `From technology transformation to business evolution, we ensure organizations thrive in all dimensions:
Assessment: Analyze infrastructure and tech stack to evaluate current capabilities.
Define Outcomes: Set clear short-term and long-term transformation goals.
New Operating Models: Implement agile methods to transform business operations.
Technology and Data: Leverage digital platforms and data for scalable, tech-driven solutions.
`,
    },
    {
      id: 2,
      subHead: "Digital Maturity",
      content: `We help businesses achieve digital maturity to navigate today’s challenges and tomorrow’s opportunities:
Maximize innovation and productivity through advanced technologies.
Improve operational performance to drive sustained growth.
Build resilience against disruptions in evolving digital landscapes.
`,
    },
    {
      id: 3,
      subHead: "Digital Acceleration",
      content: `For future readiness, we emphasize rapid adoption and evolution of new technologies:
Develop strategies for swift technology upgrades.
Foster innovation to maintain a competitive edge in a fast-evolving market.
`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Expertise in Emerging Technologies",
      content: `Our team of experts is at the forefront of digital innovation, with deep knowledge in emerging technologies and diverse industries. We analyze your existing tech stack to set both short-term and long-term goals, ensuring impactful, future-ready transformations.`,
    },
    {
      id: 1,
      subHead: "Tailored Technology Solutions for Business Growth",
      content: `We provide customized digital strategies that align with your business needs. By leveraging the latest technologies, we ensure that your business stays competitive, drives operational efficiency, and accelerates growth in an ever-evolving market.`,
    },
    {
      id: 2,
      subHead: "Continuous Innovation and Optimization",
      content: `We foster a culture of continuous innovation and optimization. Through agile practices and data-driven insights, we consistently refine and enhance solutions to keep your business agile and adaptable to changing technological landscapes.`,
    },
  ],
  image: IMAGES.DIGITAL_DIFFERENT,
  dataList: [],
};

// BIG data

export const BIGDATA_ENGINEERING_HERO = {
  header: "Big Data Analytics",
  title: "Empowering Transformation Across the Product Lifecycle",
  desc: "Embrace digital technologies to craft insight-driven, human-centric experiences and achieve a resilient digital strategy for lasting success.",
  btnText: "Get Started",
  image: IMAGES.BIG_DATA_HERO,
};

export const BIGDATA_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.BIG_DATA_OVERVIEW,
  desc: `At SRIM Works, we provide comprehensive solutions combining engineering excellence, expertise in digital technologies, and advanced automation implementation.

Our digital engineering approach fosters business and technology transformation for organizations. We develop robust, reliable, and secure digital-ready products and services, while our automation strategies streamline processes through continuous delivery pipelines.`,
  dataList: [],
};

export const BIGDATA_CARDS = [
  // {
  //   heading: "Software Development",
  //   content:
  //     "We offer end-to-end software development services tailored to meet the demands of your business and accelerate digital transformation.",
  //   cards: [
  {
    image: IMAGES.BIG_DATA_OFFER_1,
    title: "Data Engineering",
    content:
      "We lay the groundwork for effective data analytics, data science, and business intelligence by handling everything from data strategy and architecture to DataOps implementation. Our data engineering capabilities ensure that your data is organized, accurate, and ready for analysis to drive business transformation.",
  },
  {
    image: IMAGES.BIG_DATA_OFFER_2,
    title: " Data Science",
    content:
      "We provide robust Data Science services, including predictive modeling, sentiment analysis, recommendation engines, and fraud detection. By leveraging advanced statistical techniques and machine learning, we empower organizations with the tools they need to make smarter, data-driven decisions.",
  },
  {
    image: IMAGES.BIG_DATA_OFFER_3,
    title: "Business Intelligence",
    content:
      "Through advanced BI tools like Power BI, Tableau, and Qlik, we help organizations uncover insights to guide business strategies. From financial performance to risk management, we enable data-informed decision-making and enhance operational efficiency.",
  },
];
// },
// ];

export const BIGDATA_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Assessment",
      content: `We conduct a thorough assessment of your existing data infrastructure and processes, identifying areas for improvement and growth.`,
    },
    {
      id: 1,
      subHead: "Transformation: Establishing a Data Culture",
      content: `We work with organizations to establish a data-driven culture, ensuring that data is used to inform and drive business decisions at all levels.`,
    },
    {
      id: 2,
      subHead: "Data Governance: Data as the Foundation",
      content: `We set up robust governance models to ensure that data is managed, organized, and processed effectively, establishing data as the foundation of business operations.`,
    },
    {
      id: 3,
      subHead: "Architecture and Integrations",
      content: `We design scalable data architectures and integration systems to seamlessly connect disparate data sources, enabling seamless access to actionable insights across your organization.`,
    },
    {
      id: 4,
      subHead: "Become Data-Powered with Intelligence and Insights",
      content: `Our goal is to empower organizations to become data-driven, enabling them to use data and analytics to drive decisions, fuel innovation, and gain a competitive edge in the market.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Technical and Architectural Expertise",
      content: `We combine deep technical expertise with vast industry experience to create robust, scalable data architectures that ensure data integrity and consistency. Our comprehensive understanding of data flows, governance, and management empowers organizations to extract maximum value from their data.`,
    },
    {
      id: 1,
      subHead: "Unlocking Data’s Value",
      content: `We help organizations maximize the potential of their data by creating comprehensive data strategies. Our approach to big data, data mining, and integration ensures that businesses unlock valuable insights that drive innovation, enhance customer experiences, and create competitive advantages.`,
    },
    {
      id: 2,
      subHead: "Ensuring Data Consistency",
      content: `In an era where real-time data flow is essential, we establish data governance frameworks to ensure consistency and accuracy across business operations. From inventory management to predictive modeling, we ensure data consistency throughout an organization to support decision-making and long-term strategy.`,
    },
  ],
  image: IMAGES.BIG_DATA_DIFFERENT,
  dataList: [],
};

// AI & ML
export const AL_ML_HERO = {
  header: "Artificial Intelligence and Machine Learning",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.ALML_HERO,
};

export const AL_ML_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.ALML_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const AL_ML_CARDS = [
  {
    title: "Machine Learning Solutions",
    content:
      "Unlock the power of ML with advanced data interpretation, optimization techniques, and pattern recognition. Our solutions enable predictive analytics, trend analysis, and actionable insights to help businesses stay ahead.",
    image: IMAGES.ALML_OFFER_1,
  },
  {
    title: "Deep Learning Capabilities",
    content:
      "With expertise in neural networks, we empower organizations to implement advanced deep learning models for object detection, image classification, and video analytics.",
    image: IMAGES.ALML_OFFER_2,
  },
  {
    title: " Natural Language Processing (NLP)",
    content:
      "Our NLP solutions process and analyze human language to deliver sentiment analysis, intelligent chat systems, and document processing, enabling smarter decision-making.",
    image: IMAGES.ALML_OFFER_3,
  },
  {
    title: "AI-Powered Computer Vision",
    content:
      "We enable organizations to harness Computer Vision for automated systems that extract insights from images and videos, enhancing operational efficiency and real-time decision-making.",
    image: IMAGES.ALML_OFFER_4,
  },
  {
    title: "Predictive and Prescriptive Analytics",
    content:
      " Our AI and ML models offer predictive capabilities to forecast trends and prescriptive analytics to recommend optimal actions, driving innovation and competitive edge.",
    image: IMAGES.ALML_OFFER_5,
  },
  {
    title: "AI Chatbots and Virtual Assistants",
    content:
      "Enhance customer engagement with conversational AI solutions, including self-learning chatbots designed to deliver personalized, context-aware user experiences.",
    image: IMAGES.ALML_OFFER_6,
  },
];

export const AL_ML_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "AI/ML Strategy Development",
      content: `We create a comprehensive roadmap tailored to business needs, ensuring seamless AI and ML integration.`,
    },
    {
      id: 1,
      subHead: "Data Preparation for AI and ML",
      content: `From data cleaning to structuring, we ensure datasets are optimized for accurate and effective model development.`,
    },
    {
      id: 2,
      subHead: "Model Design and Deployment",
      content: `We build custom and pre-trained AI/ML models tailored to specific business challenges, ensuring scalability and precision.`,
    },
    {
      id: 3,
      subHead: "Continuous Optimization",
      content: `Our models are continuously refined through feedback loops, ensuring adaptability and long-term value.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Advanced AI and ML Governance",
      content: `We help organizations create governance frameworks to ensure AI and ML systems deliver consistent value, manage risks, and optimize operational efficiency.`,
    },
    {
      id: 1,
      subHead: "Real-World Application Expertise",
      content: `Our AI and ML implementations are grounded in real-world use cases, delivering tangible business results through innovative technologies and statistical methodologies.`,
    },
    {
      id: 2,
      subHead: "Scalable Solutions for All Businesses",
      content: `We cater to startups, SMBs, and enterprises with tailored AI and ML strategies that align with unique business goals, ensuring measurable outcomes at every stage.`,
    },
  ],
  image: IMAGES.ALML_DIFFERENT,
  dataList: [],
};

// Open Source

export const OPENSOURCE_HERO = {
  header: "Open Source Technologies",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.OPEN_SOURCE_HERO,
};

export const OPENSOURCE_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.OPEN_SOURCE_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const OPENSOURCE_CARDS = [
  {
    title: "Custom Open Source Development",
    content:
      " We deliver tailored open source solutions to meet specific business requirements. From CMS platforms to enterprise applications, we build scalable, secure, and cost-effective systems that align with your goals.",
    image: IMAGES.OPEN_SOURCE_OFFER_1,
  },
  {
    title: "Open Source Integration",
    content:
      " Our team ensures seamless integration of open source technologies with your existing infrastructure. We specialize in combining multiple open source solutions to create cohesive, high-performing systems.",
    image: IMAGES.OPEN_SOURCE_OFFER_2,
  },
  {
    title: "Cloud-Native Solutions with Open Source",
    content:
      " We leverage open source tools to build and deploy cloud-native applications. Our expertise ensures scalability, flexibility, and robust performance in a cloud environment.",
    image: IMAGES.OPEN_SOURCE_OFFER_3,
  },
  {
    title: "Open Source Migration",
    content:
      " We help businesses transition to open source platforms without disruption. Our migration services ensure data integrity, system reliability, and enhanced capabilities.",
    image: IMAGES.OPEN_SOURCE_OFFER_4,
  },
  {
    title: "Open Source Maintenance and Support",
    content:
      " Our dedicated support services keep your open source systems running smoothly. From performance optimization to security updates, we’ve got you covered.",
    image: IMAGES.OPEN_SOURCE_OFFER_5,
  },
];

export const OPENSOURCE_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Assessment and Strategy",
      content: `We start by assessing your business needs and creating a tailored open source strategy that aligns with your goals and technical landscape.`,
    },
    {
      id: 1,
      subHead: "Design and Development",
      content: `Our development process focuses on customizing and building open source solutions that meet your unique requirements while ensuring scalability and security.`,
    },
    {
      id: 2,
      subHead: "Integration and Deployment",
      content: `We seamlessly integrate open source technologies into your ecosystem, ensuring optimal performance and minimal disruption.`,
    },
    {
      id: 3,
      subHead: "Continuous Monitoring and Support",
      content: `Post-deployment, we provide ongoing monitoring, updates, and support to ensure your systems remain efficient, secure, and future-ready.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Expertise Across Diverse Open Source Ecosystems",
      content: `Our team brings deep expertise in a wide range of open source technologies, including Linux, Kubernetes, Docker, Apache, and more. We craft solutions tailored to your business, ensuring they are both innovative and reliable.`,
    },
    {
      id: 1,
      subHead: "Cost-Efficient and Scalable Solutions",
      content: `With open source, we help businesses reduce operational costs while ensuring scalability and flexibility. Our solutions are built to adapt to your growing needs without increasing overheads`,
    },
    {
      id: 2,
      subHead: "Secure and Reliable Open Source Adoption",
      content: `We ensure that your open source adoption journey is secure and compliant. From risk assessment to implementation, we address security challenges to deliver robust and dependable solutions.

`,
    },
  ],
  image: IMAGES.OPEN_SOURCE_DIFFERENT,
  dataList: [],
};
// Coud Computing

export const CLOUD_HERO = {
  header: "Cloud Computing",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.CLOUD_HERO,
};

export const CLOUD_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.CLOUD_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const CLOUD_CARDS = [
  {
    title: " Cloud Migration",
    content:
      "Seamlessly transition your business operations to the cloud with our end-to-end cloud migration services. We minimize disruptions and ensure secure and efficient data transfer to enhance agility and scalability.",
    image: IMAGES.CLOUD_OFFER_1,
  },
  {
    title: "Cloud Infrastructure Setup and Management",
    content:
      "Build and manage robust cloud infrastructure tailored to your business needs. Our services ensure optimized performance, security, and scalability while reducing operational complexity.",
    image: IMAGES.CLOUD_OFFER_2,
  },
  {
    title: "Cloud-Native Application Development",
    content:
      "Develop and deploy applications designed specifically for the cloud. Our cloud-native development approach leverages microservices and containers to enable flexibility and faster time-to-market.",
    image: IMAGES.CLOUD_OFFER_3,
  },
  {
    title: "Hybrid and Multi-Cloud Solutions",
    content:
      " Maximize the benefits of hybrid and multi-cloud architectures by integrating public and private cloud platforms. We create solutions that provide flexibility, cost-efficiency, and enhanced control over your cloud resources.",
    image: IMAGES.CLOUD_OFFER_4,
  },
  {
    title: "Cloud Security and Compliance",
    content:
      " Protect your digital assets with advanced cloud security measures and compliance frameworks. We ensure your cloud environment is secure, meeting industry standards and safeguarding sensitive data.",
    image: IMAGES.CLOUD_OFFER_5,
  },
  {
    title: "Cloud Cost Optimization",
    content:
      " Reduce cloud spend while maximizing efficiency. Our cost optimization services identify unused resources and implement best practices for managing your cloud investments effectively.",
    image: IMAGES.CLOUD_OFFER_6,
  },
];

export const CLOUD_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Discovery and Assessment",
      content: `We begin by evaluating your current IT infrastructure and business needs to identify the best cloud solutions for your organization.`,
    },
    {
      id: 1,
      subHead: "Planning and Strategy",
      content: `We create a detailed roadmap for cloud adoption, focusing on scalability, security, and cost-efficiency.`,
    },
    {
      id: 2,
      subHead: "Implementation",
      content: `From migration to new application deployment, we execute the plan with minimal disruption to your operations.`,
    },
    {
      id: 3,
      subHead: "Optimization and Monitoring",
      content: `We continuously monitor your cloud environment, optimizing performance and ensuring adherence to industry standards.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Tailored Cloud Strategies",
      content: `We understand that every business is unique. Our cloud strategies are customized to align with your goals, helping you achieve agility, resilience, and innovation through cloud adoption.`,
    },
    {
      id: 1,
      subHead: "Expertise Across Leading Cloud Platforms",
      content: `Our team has extensive experience with major cloud platforms like AWS, Microsoft Azure, Google Cloud, and more. We leverage the best of these platforms to deliver scalable and secure solutions.`,
    },
    {
      id: 2,
      subHead: "Focus on Business Continuity",
      content: `Our cloud solutions are designed to minimize downtime and disruptions. We help businesses stay operational even during system upgrades, migrations, or unexpected incidents.`,
    },
  ],
  image: IMAGES.CLOUD_DIFFERENT,
  dataList: [],
};

// ERP & CRM

export const ERP_HERO = {
  header: "ERP and CRM Solutions",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.ERP_HERO,
};

export const ERP_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.ERP_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const ERP_CARDS = [
  {
    title: "Enterprise Resource Planning (ERP)",
    content:
      "We provide fully integrated ERP systems tailored to your business needs. Our ERP solutions help businesses automate core processes, improve data accuracy, and make informed decisions across functions like finance, inventory, procurement, and human resources.",
    image: IMAGES.ERP_OFFER_1,
  },
  {
    title: "Customer Relationship Management (CRM)",
    content:
      "Our CRM solutions enable businesses to build stronger, more personalized relationships with customers. With streamlined workflows for sales, marketing, and customer service teams, our CRM platforms help improve customer satisfaction, drive sales growth, and enhance customer retention.",
    image: IMAGES.ERP_OFFER_2,
  },
  {
    title: "Custom ERP and CRM Solutions",
    content:
      " SRIM Works specializes in creating customized ERP and CRM systems that align with your unique business processes. We integrate advanced features like AI, data analytics, and automation to provide solutions that deliver efficiency, scalability, and real-time insights.",
    image: IMAGES.ERP_OFFER_3,
  },
];

export const ERP_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Consultation and Needs Assessment",
      content: `We begin by understanding your business requirements through a comprehensive consultation. This helps us assess your goals and challenges, ensuring we recommend the best ERP and CRM solution that fits your needs.`,
    },
    {
      id: 1,
      subHead: "Customization and Development",
      content: `After understanding your needs, we customize ERP and CRM solutions that align with your business processes. Our development team works closely with you to build systems that are intuitive and feature-rich.`,
    },
    {
      id: 2,
      subHead: "Implementation and Training",
      content: `We handle the end-to-end implementation of your ERP and CRM systems, ensuring a smooth deployment. We also provide training to your team members, ensuring they can leverage the system’s full potential.`,
    },
    {
      id: 3,
      subHead: "Ongoing Support and Maintenance",
      content: `We handle the end-to-end implementation of your ERP and CRM systems, ensuring a smooth deployment. We also provide training to your team members, ensuring they can leverage the system’s full potential.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Tailored Solutions for Every Business",
      content: `We understand that no two businesses are the same. Our ERP and CRM solutions are customized to fit your specific needs, ensuring that you have the right tools to optimize your operations and engage with your customers effectively.`,
    },
    {
      id: 1,
      subHead: "Seamless Integration",
      content: `Our ERP and CRM systems integrate seamlessly with existing business infrastructure, providing a smooth transition and minimal disruption. This ensures that your teams can start leveraging the new system quickly and effectively.`,
    },
    {
      id: 2,
      subHead: "Advanced Analytics and Insights",
      content: `Our solutions come with powerful data analytics capabilities, enabling businesses to make data-driven decisions. Whether it's sales forecasting, customer behavior analysis, or operational performance monitoring, our systems provide the insights needed to stay ahead.`,
    },
  ],
  image: IMAGES.ERP_DIFFERENT,
  dataList: [],
};

// microsoft

export const MICROSOFT_HERO = {
  header: "Microsoft Technologies",
  title: "Future-Ready Solutions for a Better Tomorrow",
  desc: "At SRIM Works, we are dedicated to transforming innovative ideas into future-proof, human-centered products. Our approach combines cutting-edge design thinking with MVP-focused, iterative strategies to deliver solutions that drive business success and enhance user experiences.",
  btnText: "Get Started",
  image: IMAGES.MICROSOFT_HERO,
};

export const MICROSOFT_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.MICROSOFT_OVERVIEW,
  desc: `Our mission is clear – to bring ideas to life through exceptional design engineering. By leveraging a human-centered approach and embracing design thinking principles, we tackle challenges that hinder business growth and affect customer satisfaction.

Our leadership in design engineering delivers tangible results through cost-efficient strategies and forward-thinking solutions that empower businesses to stay ahead.`,
  dataList: [],
};

export const MICROSOFT_CARDS = [
  {
    title: "Enterprise Solutions with Microsoft",
    content:
      "Text: Our expertise in Microsoft Dynamics 365, Power Platform, and Azure ensures that your enterprise systems are optimized for seamless performance and scalability. We help organizations implement robust enterprise solutions that streamline operations and enhance decision-making.",
    image: IMAGES.MICROSOFT_OFFER_1,
  },
  {
    title: " Cloud Computing with Azure",
    content:
      " Leverage the power of Microsoft Azure to scale your operations, enhance agility, and optimize costs. We offer end-to-end cloud services, including migration, integration, and architecture design, to help businesses transition seamlessly to the cloud.",
    image: IMAGES.MICROSOFT_OFFER_2,
  },
  {
    title: "Application Development",
    content:
      "From building enterprise-grade applications with .NET to creating dynamic, responsive web apps with Microsoft frameworks, we ensure that your business applications are secure, efficient, and future-ready.",
    image: IMAGES.MICROSOFT_OFFER_3,
  },
  {
    title: "Data and AI with Microsoft",
    content:
      " Transform raw data into actionable insights with Microsoft’s data platforms and AI capabilities. Using Power BI, Azure AI, and Cognitive Services, we empower businesses to make informed decisions and drive innovation.",
    image: IMAGES.MICROSOFT_OFFER_4,
  },
];

export const MICROSOFT_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "Assessment and Strategy",
      content: `We start by assessing your existing systems and defining a clear roadmap for integrating Microsoft technologies into your operations.`,
    },
    {
      id: 1,
      subHead: "Custom Development and Integration",
      content: `Our team customizes and integrates Microsoft solutions to align with your business goals, ensuring seamless functionality and high performance.`,
    },
    {
      id: 2,
      subHead: "Deployment and Support",
      content: `From deployment to ongoing support, we ensure that your Microsoft-powered systems run smoothly, allowing your business to thrive.`,
    },
    {
      id: 3,
      subHead: "Continuous Optimization",
      content: `We regularly evaluate your systems to identify opportunities for enhancement, ensuring your business stays ahead in the digital landscape.`,
    },
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "Unmatched Expertise in Microsoft Ecosystem",
      content: `With years of experience and in-depth knowledge of Microsoft technologies, our team delivers solutions that are tailored to your business needs. From development to deployment, we ensure a seamless integration of Microsoft tools into your operations.`,
    },
    {
      id: 1,
      subHead: "End-to-End Services",
      content: `We offer comprehensive support, from consulting and strategy development to implementation and post-deployment support. Our solutions are designed to maximize ROI and deliver measurable business value.`,
    },
    {
      id: 2,
      subHead: "Focus on Security and Compliance",
      content: `Microsoft technologies are known for their robust security and compliance features. At SRIM Works, we ensure that your systems are configured to meet the highest standards of data protection and regulatory compliance.`,
    },
  ],
  image: IMAGES.MICROSOFT_DIFFERENT,
  dataList: [],
};


// Data Annotations

export const DATAAN_HERO = {
  header: "Data Annotation services",
  title: "Transforming the World with Data Annotation",
  desc: "Unleash the power of AI with precise annotation services across LiDAR, image, text, and audio data. Empower innovations in autonomous vehicles, smart cities, robotics, and more with accurate, high-quality data tailored for cutting-edge AI applications.",
  btnText: "Get Started",
  image: IMAGES.DATA_ANN_1,
};

export const DATAAN_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.DATA_ANN_2,
  desc: `At SRIM Works, we deliver top-tier data annotation services across LiDAR, image, text, audio, and video domains. By combining AI-assisted tools and human expertise, we ensure the highest levels of accuracy and efficiency for your AI models. Our commitment to quality and innovation enables our clients to lead in autonomous driving, precision farming, fintech, and more`,
  dataList: [],
};

export const DATAAN_CARDS = [
  {
    title: "Image Annotation  ",
    content:
      "Image annotation is the process of labeling objects, regions, or specific features in an image to train machine learning models for computer vision tasks. It is widely used in applications such as object detection, facial recognition, autonomous driving, and medical imaging diagnostics. Common methods include drawing bounding boxes around objects, semantic segmentation (labeling each pixel in an image), polygon annotation for irregular shapes, keypoint annotation for specific points like facial landmarks, and 3D cuboids to understand the dimensions of objects in 3D space.",
    image: IMAGES.DATA_ANN_3,
    link:'/image-annotation'
  },
  {
    title: " Text Annotation ",
    content:`Text annotation involves identifying and labeling key parts of a text document to support natural language processing (NLP) tasks. It is crucial for applications like sentiment analysis, chatbot training, language translation, and text summarization. Techniques include recognizing entities like names and dates (entity recognition), categorizing text based on emotional tone (sentiment annotation), identifying user intent in commands or queries (intent annotation), and classifying documents or sentences into predefined categories. Linguistic annotation further involves adding grammatical, syntactical, or semantic labels to enrich textual data for advanced NLP models`,
    image: IMAGES.DATA_ANN_4,
    link:"/text-annotation"
  },
  {
    title: "Audio Annotation  ",
    content:`Audio annotation is the process of labeling sound files for various tasks such as speech recognition, emotion detection, and sound event analysis. It finds applications in virtual assistants, speech-to-text transcription, and audio-based fraud detection systems. Key techniques include transcribing speech to text, identifying and segmenting different speakers (speaker diarization), labeling emotions in speech (emotion annotation), detecting specific sound events like sirens or claps, and annotating phonemes (the smallest sound units) for linguistic research and AI models.`,
    image: IMAGES.DATA_ANN_5,
    link:"/audio-annotation"
  },
  {
    title: "LiDAR Annotation  ",
    content:`LiDAR annotation is used to label 3D point cloud data captured by LiDAR sensors, commonly employed in autonomous vehicles, robotics, and urban planning. It enables AI models to understand spatial data and detect objects in 3D environments. Annotation techniques include creating 3D bounding boxes to define object dimensions, semantic segmentation to label every point in the dataset, instance segmentation to differentiate overlapping objects, trajectory annotation for tracking movement in 3D space, and lane detection for self-driving vehicles.
`,
    image: IMAGES.DATA_ANN_6,
    link:"/lidar-annotation"
  },
  {
    title: " Video Annotation",
    content:`Video annotation focuses on labeling objects, actions, or events in video frames to train AI models for applications like object tracking, action recognition, and autonomous driving. It involves frame-by-frame annotation to ensure precision, object tracking to follow the movement of labeled items across frames, and event annotation to identify specific activities (e.g., a soccer goal). Additional techniques include scene annotation to label the environment and context, and keyframe annotation to reduce redundancy by annotating only critical frames.`,
    image: IMAGES.DATA_ANN_7,
    link:"/video-annotation"
  },
  {
    title: "Natural Language Benchmark Annotation ",
    content:`Natural language benchmark annotation involves creating and labeling datasets to evaluate and test the performance of NLP models. This type of annotation supports tasks such as question answering, text generation, language translation, and dialogue system training. It ensures models are tested against high-quality benchmarks to measure their accuracy, reliability, and contextual understanding. Specific tasks include annotating question-answer pairs, evaluating paraphrase detection, assessing model-generated text responses, and measuring reading comprehension capabilities.`,
    image: IMAGES.DATA_ANN_8,
    link:"/nlp-annotation"
  },
];

export const DATAAN_MARKET_TRENDS = {
  heading: "What Makes SRIM Works Different",
  desc: "At SRIM Works, we believe in blending agility, creativity, and cutting-edge practices to deliver exceptional results. Our philosophy is rooted in solving problems efficiently and creating value-driven solutions that empower businesses to thrive.",
  title: "Human-Centered Discovery",
  content:
    "We identify and solve high-value problems using a human-centered discovery approach. This method focuses on transforming challenges into opportunities, boosting customer satisfaction, and driving business growth.",
  subHead1: "MVP Approach to Design",
  subHead2: "Data-Driven Iteration",
  accordian_content: [
    {
      id: 0,
      subHead: "How We Do It",
      content: `We follow a structured process, starting with in-depth discovery to identify key problems, defining clear objectives, and prototyping innovative solutions. Through evaluation and iterative refinement, we develop exceptional products that deliver value and meet business goals.`,
    },
    {
      id: 1,
      subHead: "Understanding Your Requirements",
      content: `We start by collaborating with you to understand your unique project needs, objectives, and use cases. Our team tailors the annotation process to align with your specific goals.`,
    },
    {
      id: 2,
      subHead: "Designing Custom Workflows",
      content: `Leveraging advanced tools and domain expertise, we design bespoke workflows to ensure seamless data processing and annotation. Whether it's LiDAR data, text, images, or video, we create solutions that maximize accuracy and efficiency.
`,
    },
    {
      id: 3,
      subHead: "AI-Assisted Annotation",
      content: `Our platform integrates AI-assisted tools to enhance annotation speed and precision. These tools automate repetitive tasks while our skilled annotators focus on nuanced and complex labeling`,
    },
    {
      id: 4,
      subHead: "Multi-Layered Quality Checks",
      content: `To ensure high-quality output, we implement rigorous quality control measures at multiple stages. Our processes are designed to minimize errors and deliver datasets with unmatched accuracy.
`,
    },
    {
      id: 5,
      subHead: "Seamless Integration and Delivery",
      content: `We deliver annotated datasets in formats compatible with your existing systems, ensuring seamless integration and usability. Our team also provides ongoing support to address your evolving needs.`,
    }
  ],
  accordians_contents: [
    {
      id: 0,
      subHead: "AI-assisted Labeling",
      content: `Our annotation platform leverages AI-assisted labeling for improved speed and accuracy, automating repetitive tasks and enhancing efficiency.`,
    },
    {
      id: 1,
      subHead: "Real-time Quality Control",
      content: `Built-in quality control measures minimize errors during the annotation process, ensuring high-quality datasets for your AI models.`,
    },
    {
      id: 2,
      subHead: "Flexible Integration",
      content: `Our platform seamlessly integrates with your existing data management systems, streamlining data workflows and facilitating seamless data transfer.`,
    },
  ],
  image: IMAGES.DATA_ANN_9,
  dataList: [],
};
// accrodian data

export const ACCORDIAN_LIST = [
  {
    id: 1,
    title: "Discovery: Laying the Foundation for Great Design",
    content:
      "Great design begins with thorough research and discovery. We delve into the problem space to identify high-value challenges, gather critical insights, and ensure our solutions align with user, customer, and business needs.",
  },
  {
    id: 2,
    title: "Define: Charting a Clear Path Forward",
    content:
      "We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.",
  },
  {
    id: 3,
    title: "Why do i have to sign in with Google?",
    content:
      "This allows us access to your Google Search Console account which allows us to find more errors and issues with your site that need to be fixed.",
  },
  {
    id: 4,
    title: "Are there any contracts, setup fees, or hidden fees?",
    content:
      "There are no setup fees or hidden fees. If you choose the monthly option, there are no contracts. If you pick a lifetime plan, it is a one-time payment for lifetime access to Ubersuggest.",
  },
  {
    id: 5,
    title: "What is your refund policy?",
    content:
      "We offer a one-time 7-day free trial for monthly subscriptions. Lifetime plan purchases are final and non-refundable. We recommend using the free trial to explore Ubersuggest before opting for a lifetime plan.",
  },
  {
    id: 6,
    title: "Can i get API access?",
    content: "We don’t have any API access plans available at the moment.",
  },
];

// pratise

export const practicesContent = {
  Design: {
    title: "Creating Impactful Experiences with Human-Centered Design",
    description:
      "Develop future-ready products and solutions that generate exceptional business value using design thinking principles, focusing on user needs, rapid prototyping, and iterative development.",
    services: [
      "Digital Product Design",
      "UI/UX Design",
      "Industrial & Mechanical Design",
      "Service Experience Design",
      "Branding & Visual Identity",
    ],
    link:"/design",
    image: IMAGES.DESIGN_IMG,
   
  },
  Digital: {
    title: "Revolutionizing Businesses with Digital Engineering",
    description: `Empower innovation and efficiency by leveraging cutting-edge digital technologies and agile solutions to transform your business operations and customer experiences.
Services we offer:`,
    services: [
      "Product Lifecycle Management",
      "Software Development",
      "Web Development",
      "App Development",
      "Cloud Integration",
      "IoT Solutions",
      "AI & Automation",
      "Software Testing",
    ],
    link:"/digital-engineering",
    image: IMAGES.DIGITAL_IMG,
  },
  BigData: {
    title: "Unlocking Insights with Big Data",
    description: `Harness the power of big data to generate actionable insights, enabling data-driven decisions that propel your business forward.
Services we offer:`,
    services: [
      "Predictive Analytics",
      "Data Visualization",
      "Data Integration",
      "Business Intelligence",
      "Advanced Analytics",
    ],
    link:"/big-data",
    image: IMAGES.BIGDATA_IMG,
  },
  DataAnnotation: {
    title: "Empowering AI with Precise Data Annotation",
    description: `Enhance AI models with precise and reliable data annotation services, enabling better accuracy, insights, and decision-making.
Services we offer:`,
    services: [
      "Image Annotation",
      "Text Annotation",
      "Audio Annotation",
      "Video Annotation",
      "LiDAR Annotation",
      "NLP Annotation",
    ],
    link:"/data-annotation",
    image: IMAGES.DATAANNOTATION_IMG,
  },
  Aiml: {
    title: "Empowering Innovation with Artificial Intelligence",
    description: `Implement cutting-edge AI and ML solutions to automate processes, enhance decision-making, and create intelligent systems that drive business success.
Services we offer:`,
    services: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI-Driven Automation",
    ],
    link:"/AI&ML",
    image: IMAGES.AIML_IMG,
  },
  OpenSource: {
    title: "Building Scalable Solutions with Open-Source Tools",
    description: `Develop flexible, cost-efficient, and scalable solutions using open-source technologies that foster innovation, collaboration, and future growth.
Services we offer:`,
    services: [
      "Custom Open Source Development",
      "DevOps Solutions",
      "Cloud-Native Applications",
      "Open Source Integration",
      "Performance Optimization",
    ],
    link:"/open-source",
    image: IMAGES.OPENSOURCE_IMG,
  },
  Microsoft: {
    title: "Innovating with Microsoft’s Robust Tech Ecosystem",
    description: `Leverage Microsoft’s cutting-edge tools and platforms to streamline business operations, boost productivity, and foster digital transformation.
Services we offer:`,
    services: [
      "Microsoft Azure",
      "Power BI & Power Apps",
      "Dynamics 365 Solutions",
      "SharePoint & Office 365",
      "Cloud Integration",
    ],
    link:"/cloud-computing",
    image: IMAGES.CLOUD_IMG,
  },
  Cloud: {
    title: "Enabling Seamless Digital Transformation with Cloud",
    description: `Build scalable, secure, and cost-efficient cloud solutions that drive operational efficiency and business growth, ensuring a flexible future for your organization.
Services we offer:`,
    services: [
      "Cloud Migration",
      "Cloud Infrastructure Management",
      "Multi-Cloud Solutions",
      "Cloud Security",
      "SaaS/PaaS Solutions",
    ],
    link:"/microsoft-technologies",
    image: IMAGES.MICROSOFT_IMG,
  },
  ERP: {
    title: "Optimizing Business Operations with Integrated Solutions",
    description: `Streamline and automate core business functions with customized ERP and CRM solutions, improving efficiency, data accuracy, and customer satisfaction.
Services we offer:`,
    services: [
      "ERP Implementation",
      "CRM Solutions",
      "Business Process Automation",
      "System Integration",
      "Data Analytics and Reporting",
    ],
    link:"/erp-crm",
    image: IMAGES.ERP_IMG,
  },
};


export const terms={
  title:"Support",
  heading:"SRIM Works terms of use",
  content:`By accessing and using this site, you accept the following terms and conditions, without limitation or qualification.

Unless otherwise stated, the contents of this site including, but not limited to, the text and images contained herein and their arrangement are the property of SRIM Works. All trademarks used or referred to in this website are the property of their respective owners.

Nothing contained in this site shall be construed as conferring by implication, estoppel, or otherwise, any license or right to any copyright, patent, trademark or other proprietary interest of SRIM Works or any third party. This site and the content provided in this site, including, but not limited to, graphic images, audio, video, html code, buttons, and text, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way, without the prior written consent of SRIM Works, except that you may download, display, and print one copy of the materials on any single computer solely for your personal, non-commercial use, provided that you do not modify the material in any way and you keep intact all copyright, trademark, and other proprietary notices.

The information provided on this site is free of charge and for informational purposes only and does not create a business or professional services relationship between you and SRIM Works. Links on this site may lead to services or sites not operated by SRIM Works. No judgment or warranty is made with respect to such other services or sites and SRIM Works takes no responsibility for such other sites or services. A link to another site or service is not an endorsement of that site or service. Any use you make of the information provided on this site, or any site or service linked to by this site, is at your own risk.

This site and its contents are provided "as is" and SRIM Works makes no representation or warranty of any kind with respect to this site or any site or service accessible through this site. SRIM Works expressly disclaims all express and implied warranties including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In no event will either SRIM Works or its third-party service providers be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) without regard to the form of action and whether in contract, tort, negligence, strict liability, or otherwise, arising out of or in connection with this site, any content on or accessed through this site or any site service linked to, or any copying, displaying, or use thereof.

SRIM Works maintains this site in Illinois, U.S.A. and you agree that these terms of use and any legal action or proceeding relating to this site shall be governed by the laws of the State of Illinois without reference to its choice of law rules. If you attempt to bring any legal proceedings against SRIM Works you specifically acknowledge that SRIM Works is free to choose the jurisdiction of our preference as to where such action against us may be held. As you have agreed by using this site to choose the laws of the State of Illinois to govern any such proceedings, we will probably choose to defend any such action in Illinois and we can make this decision entirely as it suits us, without regard to where in the world you are located, or from where in the world you visited this site.

You are responsible for complying with the laws of the jurisdiction from which you are accessing this site and you agree that you will not access or use the information on this site in violation of such laws. Unless expressly stated otherwise herein, any information submitted by you through this site shall be deemed non-confidential and non-proprietary. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so. Because of the open nature of the Internet, we recommend that you not submit information you consider confidential.

SRIM Works does not accept unauthorized idea submissions outside of established business relationships. To protect the interests of our current clients and ourselves, we must treat the issue of such submissions with great care. Importantly, without a clear business relationship, SRIM Works cannot and does not treat any such submissions in confidence. Accordingly, please do not communicate unauthorized idea submissions to SRIM Works through this website. Any ideas disclosed to SRIM Works outside a pre-existing and documented confidential business relationship are not confidential and SRIM Works may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you. SRIM Works will make every reasonable effort to return or destroy any unauthorized idea submissions without detailed review of them. However, if a review is necessary in SRIM Works' sole discretion, it will be with the understanding that SRIM Works assumes no obligation to protect the confidentiality of your idea or compensate you for its disclosure or use. By submitting an idea or other detailed submission to SRIM Works through this website, you agree to be bound by the terms of this stated policy.`
}

export const cookiesData=[
  {
    id:0,
    title:"Your Privacy",
    content:"Any website that you visit may store or retrieve personal information, mostly through the use of cookies. The stored or retrieved information might be about you, your preferences, or your device and is used for the purposes specified per cookies category below. The data controller of your data processed through our cookies is SRIM Works. In addition, some cookies we use are from (and controlled by) third-party companies, such as Facebook, Microsoft, Marketo Munchkin Tracking, Twitter, Knotch, YouTube, Instagram, Yoptima, and LinkedIn Analytics to provide us with web analytics and intelligence about our sites. You can accept the cookies as per your preferences by activating the sliders per cookies category. By accepting cookies, the functionalities described per cookies category will be activated, and by not accepting cookies, such functionalities will not be activated. Because we respect your right to privacy, you can choose not to allow some types of cookies, and you have the right to withdraw your consent by adapting your preferences in our cookie consent manager. Click on the different category headings to find out more and change our default settings. Please read our Cookies Policy for more information.",
  },
  {
    id:1,
    title:"Strictly Necessary Cookies",
    content:"These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.",
    button:"Always Active"
  },
  {
    id:2,
    title:"First Party Analytics Cookies",
    content:"These cookies allow us to employ data analytics so we can measure and improve the performance of our site and provide more relevant content to you. These cookies don't collect information that identifies a visitor down to an individual level that is available to us. These cookies are not passing personally identifiable information to any external third party other than in limited cases when we engage a service provider to act on our behalf but who is then unable to use the data for their own purposes.",
    button:"switch"
  }
  ,{
    id:3,
    title:"Performance Cookies and Functional Cookies",
    content:"These cookies allow us to employ data analytics so we can measure and improve the performance of our site and provide more relevant content to you. These cookies don't collect information that identifies a visitor down to an individual level that is available to us. These cookies are not passing personally identifiable information to any external third party other than in limited cases when we engage a service provider to act on our behalf but who is then unable to use the data for their own purposes.",
    button:"switch"
  },
  {
    id:4,
    title:"Advertising and Social Media Cookies",
    content:"Third-party advertising and social media cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people’s behavior after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator’s permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools or play certain videos on our site.",
    button:"switch",
  }
]


// annotation sub pages

//1 iamge
export const ANNO_SUB1_HERO={
//1 iamge
  header: "",
  title: "Image Annotation",
  desc: "Image annotation is the process of labeling objects, regions, or specific features in an image to train machine learning models for computer vision tasks. It is widely used in applications such as object detection, facial recognition, autonomous driving, and medical imaging diagnostics. Common methods include drawing bounding boxes around objects, semantic segmentation (labeling each pixel in an image), polygon annotation for irregular shapes, keypoint annotation for specific points like facial landmarks, and 3D cuboids to understand the dimensions of objects in 3D space.",
  btnText: "Get Started",
  image: IMAGES.IMGANNO_HERO_IMG,

  
}
export const ANNO_SUB1_RIGHT={
  title: "Comprehensive Image Annotation Services",
  heading: "",
  image: IMAGES.IMGANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Object Detection",
      content:" Identify and label objects within images, such as vehicles, faces, or products, providing essential data for computer vision models."
    },
    {
      title:"Semantic Segmentation",
      content:"Go beyond object identification by classifying each pixel in an image to generate detailed object and region maps, providing richer insights for analysis and understanding."
    },{
      title:"Image Classification",
      content:"Categorize entire images for identification tasks, leveraging machine learning to classify images based on their content."
    }
  ]
}
export const ANNO_SUB1_LEFT={
  title: "Precise Image Annotation: Polygon & Landmark",
  heading: "",
  image: IMAGES.IMGANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[
    {title:"Polygon Annotation",
      content:"Precisely outline irregular shapes in images for fine-grained object detection, enabling accurate identification of intricate objects."
    },
    {
      title:"Landmark Annotation",
      content:"Identify key points, such as facial landmarks or anatomical structures, for specialized tasks, providing essential data for biometrics, medical imaging, and other applications.Identify key points, such as facial landmarks or anatomical structures, for specialized tasks, providing essential data for biometrics, medical imaging, and other applications."
    }
  ]
}
//2 text
export const ANNO_SUB2_HERO={
  header: "",
  title: "Text Annotation",
  desc: "Text annotation involves identifying and labeling key parts of a text document to support natural language processing (NLP) tasks. It is crucial for applications like sentiment analysis, chatbot training, language translation, and text summarization. Techniques include recognizing entities like names and dates (entity recognition), categorizing text based on emotional tone (sentiment annotation), identifying user intent in commands or queries (intent annotation), and classifying documents or sentences into predefined categories. Linguistic annotation further involves adding grammatical, syntactical, or semantic labels to enrich textual data for advanced NLP models.",
  btnText: "Get Started",
  image: IMAGES.TEXTANNO_HERO_IMG,

}
export const ANNO_SUB2_RIGHT={
  title: "Unveiling the Power of Text Annotation",
  heading: "",
  image: IMAGES.TEXTANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Named Entity Recognition (NER)",
    content:"Identify and classify entities like names, dates, and locations in text, extracting key information for machine learning models."
  },
  {
    title:"Sentiment Analysis",
    content:"Annotate text to capture sentiment, tone, or intent, enabling machines to understand the emotional context of language."
  },
  {
    title:"Text Categorization",
    content:"Organize text into predefined categories for efficient data sorting, streamlining data management and analysis."
  }

]

}
export const ANNO_SUB2_LEFT={
  title: "Advanced Text Annotation: Entity Linking & Document Structuring",
  heading: "",
  image: IMAGES.TEXTANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Entity Linking",
    content:"Connect text entities to knowledge bases for enhanced understanding, linking names, places, and concepts to relevant information."
  },
  {
    title:"Document Structuring",
    content:"Segment documents into logical sections for better organization and processing, enabling AI models to understand the structure of documents."
  },
]
  
}
//3 audio
export const ANNO_SUB3_HERO={
  header: "",
  title: "Audio Annotation",
  desc: "Audio annotation is the process of labeling sound files for various tasks such as speech recognition, emotion detection, and sound event analysis. It finds applications in virtual assistants, speech-to-text transcription, and audio-based fraud detection systems. Key techniques include transcribing speech to text, identifying and segmenting different speakers (speaker diarization), labeling emotions in speech (emotion annotation), detecting specific sound events like sirens or claps, and annotating phonemes (the smallest sound units) for linguistic research and AI models.",
  btnText: "Get Started",
  image: IMAGES.AUDIOANNO_HERO_IMG,

}
export const ANNO_SUB3_RIGHT={
  title: "Unlocking the Secrets of Audio Annotation",
  heading: "",
  image: IMAGES.AUDIOANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Speech-to-Text Transcription",
    content:"Convert audio recordings into text with time-stamped accuracy, providing valuable data for speech recognition systems and transcription services."
  },
  {
    title:"Speaker Identification",
    content:"Label different speakers in a multi-speaker environment, enabling AI to identify and separate voices for voice recognition and other applications."
  },
  {
    title:"Sound Classification",
    content:"Annotate sounds for machine learning models in fields like security or entertainment, enabling AI to recognize and categorize sounds."
  }
]

}
export const ANNO_SUB3_LEFT={
  title: "Advanced Audio Annotation: Segmentation & Phoneme Labeling",
  heading: "",
  image: IMAGES.AUDIOANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Audio Segmentation",
    content:"Divide audio into meaningful segments for analysis, enabling AI models to focus on specific parts of audio for detailed analysis."
  },
  {
    title:"Phoneme Annotation",
    content:"Label phonetic components in speech for advanced linguistic studies, providing valuable insights for speech recognition and language processing research."
  }
]
  
}
//4 LIDAR
export const ANNO_SUB4_HERO={
  header: "",
  title: "LiDAR Annotation",
  desc: "LiDAR annotation is used to label 3D point cloud data captured by LiDAR sensors, commonly employed in autonomous vehicles, robotics, and urban planning. It enables AI models to understand spatial data and detect objects in 3D environments. Annotation techniques include creating 3D bounding boxes to define object dimensions, semantic segmentation to label every point in the dataset, instance segmentation to differentiate overlapping objects, trajectory annotation for tracking movement in 3D space, and lane detection for self-driving vehicles.",
  btnText: "Get Started",
  image: IMAGES.LIDARANNO_HERO_IMG,

}
export const ANNO_SUB4_RIGHT1={
  title: "LiDAR Annotation: The Heart of 3D Perception",
  heading: "",
  image: IMAGES.LIDARANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Point Cloud Labeling",
    content:"Annotate millions of points in 3D space to identify objects, boundaries, and features with unmatched precision, enabling accurate 3D scene understanding."
  },
{
  title:"Semantic Segmentation",
  content:"Classify each point in a LiDAR dataset into meaningful categories, such as roads, vehicles, pedestrians, or vegetation, providing detailed spatial information for analysis and decision-making."
},
{
  title:"3D Bounding Boxes",
  content:"Draw tight, accurate bounding boxes around objects in a 3D space for object tracking and detection, enabling AI models to recognize and track objects in 3D environments."
}]

}
export const ANNO_SUB4_LEFT2={
  title: "Advanced LiDAR Annotation: Trajectory & Customized Solutions",
  heading: "",
  image: IMAGES.LIDARANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Trajectory Analysis",
      content:"Annotate and track object movement across sequential LiDAR frames to understand behavior and predict future motion, enabling AI models to anticipate object movement and make informed decisions."
    },
    {
      title:"Customized Solutions",
      content:"Tailored annotation workflows to meet your unique project requirements and objectives, ensuring our services align with your specific needs and goals."
    }
  ]
  
}
export const ANNO_SUB4_RIGHT3={
  title: "Empowering Autonomous Vehicles with LiDAR Annotation",
  heading: "",
  image: IMAGES.LIDARANNO_ASIDE_IMG3,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Safe Navigation",
    content:"Accurate 3D mapping and object recognition enable safe and efficient navigation in complex environments."
  },
{
  title:"Enhanced Situational Awareness",
  content:"LiDAR data provides detailed 3D information for improved situational awareness, enabling vehicles to make informed decisions."
},
{
  title:"Advanced Object Detection",
  content:"Precise LiDAR annotation supports object detection for pedestrians, vehicles, and other obstacles, ensuring safety and efficient navigation."
}]

}
export const ANNO_SUB4_LEFT4={
  title: "LiDAR Annotation: Revolutionizing Robotics & Urban Planning",
  heading: "",
  image: IMAGES.LIDARANNO_ASIDE_IMG4,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Enhanced Robotics",
      content:"LiDAR data provides detailed 3D information for improved situational awareness, enabling robots to operate safely and efficiently in complex environments."
    },
    {
      title:"Urban Planning",
      content:"Precise modeling of cities for planning and infrastructure development, enabling informed decisions for urban design and development."
    },
    {
      title:"Smart City Applications",
      content:"LiDAR data is crucial for developing smart city solutions, such as traffic management, environmental monitoring, and infrastructure planning."
    }
  ]
  
}
export const ANNO_SUB4_RIGHT5={
  title: "LiDAR in Agriculture: Precision Farming for Enhanced Yields",
  heading: "",
  image: IMAGES.LIDARANNO_ASIDE_IMG5,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Terrain Mapping",
    content:"LiDAR data provides detailed 3D terrain information for precise mapping and analysis, enabling optimized planting and resource management."
  },
{
  title:"Yield Optimization",
  content:"By analyzing LiDAR data, farmers can identify areas with varying soil conditions and optimize planting strategies for higher yields."
},
{
  title:"Sustainable Practices",
  content:"Precision farming enabled by LiDAR reduces the use of fertilizers and pesticides, promoting sustainable agricultural practices."
}]

}
//5 video
export const ANNO_SUB5_HERO={
  header: "",
  title: "Video Annotation",
  desc: "Video annotation focuses on labeling objects, actions, or events in video frames to train AI models for applications like object tracking, action recognition, and autonomous driving. It involves frame-by-frame annotation to ensure precision, object tracking to follow the movement of labeled items across frames, and event annotation to identify specific activities (e.g., a soccer goal). Additional techniques include scene annotation to label the environment and context, and keyframe annotation to reduce redundancy by annotating only critical frames.",
  btnText: "Get Started",
  image: IMAGES.VIDEOANNO_HERO_IMG,

}
export const ANNO_SUB5_RIGHT1={
  title: "Unveiling the Action: Video Annotation Services",
  heading: "",
  image: IMAGES.VIDEOANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[{
    title:"Frame-by-Frame Labeling",
    content:"Identify and track objects or actions across video frames, providing detailed information for video understanding and analysis."
  },
{
  title:"Object Tracking",
  content:"Annotate the movement of objects through video sequences, enabling AI models to track objects over time and understand their trajectories."
},
{
  title:"Action Recognition",
  content:"Label specific actions in videos for behavioral analysis, providing insights into human behavior and activity recognition."
}
]
}
export const ANNO_SUB5_LEFT2={
  title: "Advanced Video Annotation: Keyframe & Event Tagging",
  heading: "",
  image: IMAGES.VIDEOANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Keyframe Annotation",
      content:"Highlight critical moments in a video for detailed analysis, enabling AI models to focus on specific frames for understanding and decision-making"
    },
    {
      title:"Event Tagging",
      content:"Annotate significant events or transitions within video content, providing context and meaning to video data for analysis and understanding."
    }
  ]
}


//6 NLP
export const ANNO_SUB6_HERO={
  header: "",
  title: "NLP Annotation",
  desc: "Natural language benchmark annotation involves creating and labeling datasets to evaluate and test the performance of NLP models. This type of annotation supports tasks such as question answering, text generation, language translation, and dialogue system training. It ensures models are tested against high-quality benchmarks to measure their accuracy, reliability, and contextual understanding. Specific tasks include annotating question-answer pairs, evaluating paraphrase detection, assessing model-generated text responses, and measuring reading comprehension capabilities.",
  btnText: "Get Started",
  image: IMAGES.NLPANNO_HERO_IMG,

}
export const ANNO_SUB6_RIGHT={
  title: "Boosting NLP: Natural Language Processing Annotation",
  heading: "",
  image: IMAGES.NLPANNO_ASIDE_IMG1,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Part-of-Speech Tagging",
      content:"Annotate text with grammatical tags to enhance linguistic understanding, providing essential data for language models and grammatical analysis."
    },
    {
      title:"Intent and Entity Annotation",
      content:"Identify user intents and relevant entities for conversational AI systems, enabling machines to understand and respond to user queries effectively."
    },
    {
      title:"Coreference Resolution",
      content:"Link pronouns to their respective entities in text for contextual understanding, enabling AI models to understand the relationships between words and entities."
    }
  ]
}
export const ANNO_SUB6_LEFT={
  title: "Advanced NLP Annotation: Dependency Parsing & Topic Modeling",
  heading: "",
  image: IMAGES.NLPANNO_ASIDE_IMG2,
  desc: "",
  dataList: [],
  asideList:[
    {
      title:"Dependency Parsing",
      content:"Map syntactic relationships between words for advanced linguistic models, providing insights into sentence structure and grammatical relationships."
    },
    {
      title:"Topic Modeling",
      content:"Annotate and group text by overarching themes or topics, enabling AI models to identify and understand the main topics discussed in a collection of documents."
    }
  ]
}

// fintech code

export const FINTECH_HERO = {
  header: "Fintech",
  title: "Transforming FinTech with Innovation and Technology",
  desc: "Empowering financial institutions with advanced solutions to enhance customer experiences, streamline operations, and drive growth through data-driven strategies and seamless digital platforms.",
  btnText: "Get Started",
  image: IMAGES.FINTECH_HERO,
};

export const FINTECH_OVERVIEW = {
  heading: "",
  title: "Overview",
  image: IMAGES.FINTECH_OVERVIEW,
  desc: "The financial industry is at the forefront of technological innovation, transforming how services are delivered and accessed. We help banks, fintech firms, and financial institutions harness the power of AI, blockchain, and data analytics to streamline processes, mitigate risks, and provide personalized experiences. From payment processing to fraud detection, our end-to-end solutions enable organizations to stay ahead in an ever-evolving financial landscape.",
  dataList: [],
};

export const FINTECH_MARKET_TRENDS = {
  heading: "Market Trends",
  desc: "The media and entertainment industry is rapidly evolving with the advancement of new technologies and shifting consumer behaviors. Staying ahead of these trends is crucial to remain competitive.",
  title: "Mobile Commerce Growth",
  content:
    "Mobile shopping continues to dominate, with more consumers preferring to browse and buy on their smartphones.",
  subHead1: "Social Commerce",
  subHead2: "AI-Driven Personalization",
  accordians_contents: [
    {
      id: 0,
      subHead: "Blockchain and Cryptocurrency Adoption",
      content: `Financial institutions are increasingly integrating blockchain for secure, transparent transactions and exploring cryptocurrency as an alternative payment method to meet evolving customer demands.`,
    },
    {
      id: 1,
      subHead: "AI in Financial Decision-Making",
      content: `AI and machine learning are revolutionizing credit scoring, investment management, and risk assessment by delivering faster, more accurate data interpretations.`,
    },
    {
      id: 2,
      subHead: "Personalized Banking Experiences",
      content: `Hyper-personalization driven by big data and AI enables financial institutions to offer tailored services, enhancing customer satisfaction and fostering loyalty.`,
    },
  ],
  image: IMAGES.FINTECH_MARKET,
  dataList: [],
};

export const FINTECH_SEAMLESS = {
  heading: "",
  title: "Digital Financial Solutions",
  image: IMAGES.FINTECH_ASIDE1,
  desc: "We offer cutting-edge digital payment systems, blockchain integration, and online banking platforms that simplify transactions and improve accessibility. These solutions enhance customer satisfaction and support financial institutions in staying relevant in a competitive market.",
  dataList: [],
};

export const FINTECH_SMART_SUPPLY = {
  heading: "",
  title: "Risk Mitigation with AI",
  image: IMAGES.FINTECH_ASIDE2,
  desc: "Our AI-powered fraud detection and risk assessment tools ensure secure financial operations. By identifying potential threats in real-time and automating compliance, we help organizations protect their assets and maintain customer trust.",
  dataList: [],
};