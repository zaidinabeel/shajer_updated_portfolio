/**
 * SHAJER DIGITAL — AGENCY DATABASE
 * Inspired by OrangeMantra's enterprise agency structure
 */

export const AGENCY_INFO = {
  name: "Shajer Digital",
  shortName: "SD",
  tagline: "Enterprise Performance Marketing & Short-Form Creative Agency",
  subheading: "We engineer revenue growth for high-growth brands through data-backed Meta & Google PPC campaigns, viral 9:16 reels, and conversion funnels.",
  founder: "Shajer Zaidi",
  founderRole: "Founder & Lead Performance Strategist",
  phone: "+91 7860704583",
  displayPhone: "+91 78607 04583",
  email: "shajerzaidi6@gmail.com",
  location: "Lucknow, India • Serving Clients Worldwide",
  whatsappUrl: "https://wa.me/917860704583?text=Hi%20Shajer,%20I'd%20like%20to%20discuss%20a%20growth%20campaign%20with%20Shajer%20Digital.",
  calendlyUrl: "https://wa.me/917860704583",
  deckUrl: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view",
  videoVaultUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
  creativesVaultUrl: "https://drive.google.com/drive/folders/1r2iFH3voXZsdttXtB-fvNkUdz-lQ7E0r",
  linkedin: "https://linkedin.com/in/shajer-zaidi",
};

export const AGENCY_METRICS = [
  { value: "4.2x", label: "Average Client ROAS", highlight: "E-Commerce & DTC" },
  { value: "-32%", label: "Reduction in CPL", highlight: "Lead Generation" },
  { value: "+35%", label: "Lead Growth Rate", highlight: "B2B & High-Ticket" },
  { value: "10M+", label: "Organic Reel Views", highlight: "Short-Form Video" },
  { value: "-18%", label: "Lower Cost Per Click", highlight: "Google PPC" },
  { value: "98%", label: "Client Retention", highlight: "Enterprise Support" }
];

export const CLIENT_LOGOS = [
  { name: "Zaari IT Solutions", tag: "Enterprise IT & SaaS" },
  { name: "Click Retina", tag: "Digital & PPC Agency" },
  { name: "Bioinus Clinic", tag: "Healthcare & Aesthetics" },
  { name: "Imperial Villas", tag: "Luxury Real Estate" },
  { name: "Aura Apparel", tag: "E-Commerce Fashion" },
  { name: "Pulse Fitness", tag: "Health & Lifestyle" },
];

export const AGENCY_SERVICES = [
  {
    id: "meta-ads",
    icon: "FaBolt",
    category: "Paid Acquisition",
    title: "Performance Meta Ads Scaling",
    tagline: "Advantage+ Shopping, Custom Audiences & Retargeting Funnels",
    description: "High-yield Facebook and Instagram advertising that lowers customer acquisition costs while scaling spend profitably.",
    deliverables: [
      "Dynamic Advantage+ catalog & shopping campaigns",
      "Lookalike & custom audience segmentation",
      "Conversion API (CAPI) and pixel tracking setup",
      "Rapid creative A/B testing matrix (hooks & angles)"
    ],
    metric: "3.8x - 4.2x ROAS",
    metricLabel: "DTC Benchmark"
  },
  {
    id: "reels-studio",
    icon: "FaVideo",
    category: "Creative Production",
    title: "High-Retention Video Reels & Shorts",
    tagline: "9:16 Vertical Video Engineered for Watch Time & Shares",
    description: "Viral-ready short-form content designed to capture viewer attention within the first 2.5 seconds and convert viewers into followers and buyers.",
    deliverables: [
      "Psychology-based hook scriptwriting & storyboards",
      "Dynamic beat-synced motion graphics & typography",
      "Color grading, sound design & trending audio pairing",
      "Exports optimized for Reels, Shorts & TikTok"
    ],
    metric: "70%+ Hook Rate",
    metricLabel: "0-3s Retention"
  },
  {
    id: "google-ppc",
    icon: "FaChartLine",
    category: "Search & Intent",
    title: "Google Search & Performance Max PPC",
    tagline: "High-Intent Keyword Sculpting & Conversion Search",
    description: "Capture buyers actively searching for your solutions with granular negative keyword filtering and automated bid management.",
    deliverables: [
      "High-intent keyword taxonomy & negative sculpting",
      "Responsive Search Ads (RSA) copy optimization",
      "Quality score diagnostics to cut CPC",
      "Google Tag Manager & GA4 custom conversion goals"
    ],
    metric: "-18% CPC",
    metricLabel: "Average Reduction"
  },
  {
    id: "cro-funnels",
    icon: "FaFilter",
    category: "Conversion Funnels",
    title: "Landing Page CRO & Funnel Architecture",
    tagline: "Turning Cold Ad Clicks into High-Converting Pipeline",
    description: "Optimizing the entire post-click journey with high-converting mobile-first landing pages, instant lead forms, and CRM automation.",
    deliverables: [
      "Mobile-first responsive landing page wireframes",
      "Frictionless Instant Lead Forms with auto-sync to CRM",
      "Heatmap & user scroll depth analytics",
      "Direct WhatsApp lead routing triggers"
    ],
    metric: "+35% Leads",
    metricLabel: "Conversion Lift"
  },
  {
    id: "creative-strategy",
    icon: "FaPalette",
    category: "Ad Design",
    title: "High-CTR Ad Creatives & Static Posters",
    tagline: "Direct-Response Visuals Designed to Stop the Scroll",
    description: "Eye-catching banner ads, comparison carousels, and high-res promotional creatives crafted for maximum click-through rates.",
    deliverables: [
      "Multi-format 1:1, 4:5, and 9:16 creative suites",
      "Direct-response visual hierarchy & typography",
      "Competitor ad swipe file research & adaptation",
      "Promotional sale posters and discount collateral"
    ],
    metric: "+22% CTR",
    metricLabel: "Click Improvement"
  },
  {
    id: "growth-audits",
    icon: "FaSearchDollar",
    category: "Strategy & Diagnostics",
    title: "Account Diagnostics & 360° Growth Audit",
    tagline: "Uncover Wasted Budget & Growth Bottlenecks in 48 Hours",
    description: "Comprehensive review of your existing ad accounts, tracking health, audience overlaps, and creative fatigue with an actionable roadmap.",
    deliverables: [
      "Complete spend waste & cannibalization report",
      "Attribution & tracking discrepancy audit",
      "Actionable 90-day scaling roadmap",
      "1-on-1 strategy briefing with Founder"
    ],
    metric: "48 Hours",
    metricLabel: "Rapid Turnaround"
  }
];

export const CASE_STUDIES = [
  {
    id: "case-bioinus",
    title: "Bioinus Clinic: Scaled Patient Inquiries by 35% with Localized Meta Lead Ads",
    client: "Bioinus Aesthetic Clinic",
    industry: "Healthcare & Aesthetics",
    service: "Meta Ads & Lead Gen",
    heroMetric: "+35%",
    heroMetricLabel: "Qualified Inquiries",
    tags: ["Meta Ads", "Instant Forms", "Local Targeting"],
    challenge: "High cost-per-lead and unqualified form submissions from previous broad agency campaigns.",
    solution: "Implemented targeted geographical radius fencing, pre-qualifying questionnaire fields, and video testimonial creatives with instant WhatsApp follow-up.",
    results: [
      "Reduced Cost Per Lead (CPL) by 24%",
      "Generated 120+ qualified patient bookings within 45 days",
      "Achieved a 94% lead contact rate through automated CRM sync"
    ],
    deckLink: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
  },
  {
    id: "case-zaari",
    title: "Zaari IT Solutions: 32% Lower CPL for Enterprise Cloud & SaaS Services",
    client: "Zaari IT Solutions",
    industry: "B2B Tech & IT Consulting",
    service: "Performance Marketing",
    heroMetric: "-32%",
    heroMetricLabel: "Cost Per Lead",
    tags: ["B2B Acquisition", "Lookalike Audiences", "A/B Testing"],
    challenge: "B2B IT services struggled with long conversion cycles and rising acquisition costs on traditional display channels.",
    solution: "Built a multi-tier conversion funnel combining high-intent search ads with retargeting video case studies on LinkedIn and Meta.",
    results: [
      "Acquired 350+ enterprise decision-maker leads",
      "Reduced customer acquisition cost by 32%",
      "Increased pipeline deal size by matching ad copy to enterprise pain points"
    ],
    deckLink: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
  },
  {
    id: "case-clickretina",
    title: "Click Retina: 30% Higher CTR & 18% Lower CPC on Google Search",
    client: "Click Retina Agency",
    industry: "Digital Services & PPC",
    service: "Google Search PPC",
    heroMetric: "+30%",
    heroMetricLabel: "Search CTR",
    tags: ["Google Search", "Quality Score", "Negative Keywords"],
    challenge: "Wasted ad budget on irrelevant search terms and sub-optimal Ad Quality Scores.",
    solution: "Restructured campaign taxonomy with single-theme ad groups (STAGs), strict negative keyword lists, and customized Responsive Search Ads (RSAs).",
    results: [
      "Boosted Click-Through Rate from 3.2% to 4.2% (+30%)",
      "Lowered Cost Per Click by 18% across core service keywords",
      "Doubled conversion volume without increasing total ad spend"
    ],
    deckLink: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
  },
  {
    id: "case-realestate",
    title: "Imperial Villas: 45K+ Organic Reel Views & High-Ticket Inquiries",
    client: "Luxury Real Estate Developer",
    industry: "Real Estate & Architecture",
    service: "Short-Form Video Production",
    heroMetric: "45K+",
    heroMetricLabel: "Organic Views",
    tags: ["Instagram Reels", "Viral Hooks", "Luxury Buyers"],
    challenge: "Static property photos failed to convey the architectural grandeur and luxury experience of villas.",
    solution: "Produced cinematic 9:16 walkthrough reels with beat-synced transitions, aesthetic color grading, and a 2.5-second retention hook.",
    results: [
      "45K+ organic views on Instagram Reels",
      "+28% surge in direct DM inquiries from high-net-worth buyers",
      "3.2x higher share count compared to previous visual campaigns"
    ],
    deckLink: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
  },
  {
    id: "case-ecommerce",
    title: "Aura Apparel: Scaled E-Commerce Spend to 4.2x ROAS with Advantage+",
    client: "Aura Fashion DTC",
    industry: "E-Commerce & DTC",
    service: "Meta Advantage+ Scaling",
    heroMetric: "4.2x",
    heroMetricLabel: "Sustained ROAS",
    tags: ["Advantage+ Shopping", "Creative Testing", "UGC Video"],
    challenge: "High cart abandonment and ROAS plateauing below 2.0x during peak seasons.",
    solution: "Implemented Advantage+ Shopping campaigns paired with weekly creative sprints (UGC unboxings, comparison hooks, discount urgency banners).",
    results: [
      "Scaled blended ROAS from 2.1x to 4.2x",
      "+22% higher Click-Through Rate on product catalog ads",
      "Substantial increase in Customer Lifetime Value (LTV) through retargeting"
    ],
    deckLink: "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
  }
];

export const VIDEO_SHOWCASE = [
  {
    id: "v1",
    title: "Luxury Real Estate Walkthrough Reel",
    niche: "Real Estate & Architecture",
    stats: "+28% Engagement • 45K+ Views",
    tag: "High Engagement",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    description: "Cinematic vertical video reel featuring dynamic transitions, custom typography subtitles, and rapid 0-3s hook retention."
  },
  {
    id: "v2",
    title: "Brand Promotional Short-Form Ad",
    niche: "Lifestyle & Apparel",
    stats: "3.2x Share Rate • +40% Reach",
    tag: "Viral Creative",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    driveUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    description: "High-octane promotional video ad with sound design, color grading, and direct-response call to action."
  },
  {
    id: "v3",
    title: "Direct-Response Meta Lead Gen Video",
    niche: "B2B & Tech Services",
    stats: "-32% CPL • 350+ Leads",
    tag: "Paid Acquisition",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    description: "Direct-response problem-solution ad structure tailored for high-converting social feeds and lower cost-per-lead."
  },
  {
    id: "v4",
    title: "Product Feature & Breakdown Reel",
    niche: "Consumer Goods & Gadgets",
    stats: "18K+ Organic Views • 92% Likes",
    tag: "Product Showcase",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    description: "Snappy unboxing & benefit walkthrough highlighting product advantages with high visual clarity."
  }
];

export const CREATIVE_ADS = [
  {
    id: "c1",
    title: "E-Commerce Meta Ad (4.2x ROAS)",
    image: "/creatives/creative_1.svg",
    format: "1:1 Square Feed",
    metrics: "+22% CTR • 4.2x ROAS",
    tag: "Performance Ad"
  },
  {
    id: "c2",
    title: "Luxury Real Estate Campaign Ad",
    image: "/creatives/creative_2.svg",
    format: "4:5 High-Res Poster",
    metrics: "450+ Leads • -34% CPL",
    tag: "High-Ticket"
  },
  {
    id: "c3",
    title: "Google PPC Search Display Ad",
    image: "/creatives/creative_3.svg",
    format: "Display Banner",
    metrics: "+30% CTR • -18% CPC",
    tag: "PPC Funnel"
  },
  {
    id: "c4",
    title: "Instagram Reel Growth Graphic",
    image: "/creatives/creative_4.svg",
    format: "Carousel / Story",
    metrics: "+28% Engagement",
    tag: "Organic Reach"
  }
];

export const GROWTH_PROCESS = [
  {
    step: "01",
    phase: "Diagnostics & Audit",
    title: "Deep Funnel & Account Audit",
    description: "We dismantle your past campaign history, tracking setup (Pixel/CAPI/GA4), audience overlaps, and spend waste to establish baseline benchmarks.",
    timeline: "Days 1 - 3"
  },
  {
    step: "02",
    phase: "Creative Sprint",
    title: "Hook & Visual Angle Development",
    description: "We design and edit high-impact 9:16 reels, static banners, and direct-response ad copy targeting 3-5 psychological buyer angles.",
    timeline: "Days 4 - 7"
  },
  {
    step: "03",
    phase: "Algorithmic Scale",
    title: "Advantage+ & Bid Optimization",
    description: "We launch structured testing and scaling budgets. Winning creatives are promoted into scaling campaigns with automated dayparting and bid caps.",
    timeline: "Week 2 - 4"
  },
  {
    step: "04",
    phase: "CRO & Retention",
    title: "Funnel CRO & LTV Maximization",
    description: "We continuously optimize the landing page experience, lead capture forms, remarketing loops, and email/WhatsApp sync to expand margin.",
    timeline: "Ongoing"
  }
];

export const CERTIFICATIONS = [
  { name: "Meta Certified", title: "Digital Marketing Associate", year: "2024", badge: "Meta" },
  { name: "Google Ads", title: "Search & Display Certified", year: "2024", badge: "Google" },
  { name: "Google Analytics", title: "GA4 Measurement Certified", year: "2024", badge: "GA4" },
  { name: "HubSpot Academy", title: "Inbound Marketing Certified", year: "2023", badge: "HubSpot" }
];

export const TESTIMONIALS = [
  {
    quote: "Shajer transformed our Meta Ads from break-even into a consistent 4.2x ROAS machine. His video reel concepts hook viewers immediately and drive real purchase volume.",
    clientName: "Aura Apparel Team",
    role: "Founder & Marketing Director",
    results: "4.2x ROAS Scaling"
  },
  {
    quote: "Working with Shajer slashed our enterprise lead generation cost by 32%. His attention to detail in tracking, negative keywords, and landing page messaging is top-notch.",
    clientName: "Zaari IT Leadership",
    role: "Head of Growth Operations",
    results: "-32% CPL • 350+ Leads"
  },
  {
    quote: "The reel production quality is unmatched. The first luxury villa video generated over 45,000 views and direct inquiries within 72 hours. Highly recommended for any serious brand.",
    clientName: "Imperial Villas Team",
    role: "Sales & Acquisition Lead",
    results: "45K+ Views • +28% DMs"
  }
];
