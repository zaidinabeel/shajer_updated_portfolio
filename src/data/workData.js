/**
 * ==============================================================================
 * 📁 SHAJER ZAIDI — WORK & PORTFOLIO DATABASE (VIDEOS & CREATIVES)
 * ==============================================================================
 */

export const PHOTOS_DRIVE_URL = "https://drive.google.com/drive/folders/1r2iFH3voXZsdttXtB-fvNkUdz-lQ7E0r";
export const VIDEOS_DRIVE_URL = "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-";

// 🎬 1. VIDEO REELS & MOTION ADS (Playable Videos)
export const videoProjects = [
  {
    id: "vid-1",
    title: "Viral Real Estate Promo Reel",
    format: "9:16 Vertical Reel",
    platform: "Instagram & Meta Ads",
    tools: ["CapCut", "Filmora", "Canva"],
    metrics: "+28% Engagement • 45K+ Views",
    tag: "High Engagement",
    gradient: "from-purple-500/20 to-pink-500/20",
    description: "High-retention property tour reel with dynamic hook in the first 2.5s, synchronized beat pacing, and clean subtitle typography.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: VIDEOS_DRIVE_URL,
    highlights: ["Tested hook retention in 0-3 sec window", "Optimized with trending sound and custom subtitles", "Drove direct DM inquiries"]
  },
  {
    id: "vid-2",
    title: "Brand Promotional Ad Reel",
    format: "9:16 Vertical Reel",
    platform: "Instagram Reels & Shorts",
    tools: ["CapCut", "Canva", "AI Voice"],
    metrics: "3.2x Share Rate • +40% Reach",
    tag: "Brand Awareness",
    gradient: "from-blue-500/20 to-indigo-500/20",
    description: "Fast-paced lifestyle promotional reel with color grading, smooth sound transitions, and compelling call-to-action.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    driveUrl: VIDEOS_DRIVE_URL,
    highlights: ["Split-screen pacing and motion hooks", "Direct response CTA", "High engagement and share rates"]
  },
  {
    id: "vid-3",
    title: "Meta Lead Gen Video Creative",
    format: "9:16 Video Ad",
    platform: "Meta Ads (FB & IG)",
    tools: ["CapCut", "Meta Ads Manager"],
    metrics: "-32% CPL • 350+ Leads",
    tag: "Paid Acquisition",
    gradient: "from-emerald-500/20 to-teal-500/20",
    description: "Direct-response video ad crafted for paid social campaigns to capture qualified B2B and consumer leads at a lower cost per lead.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: VIDEOS_DRIVE_URL,
    highlights: ["Problem-solution direct response structure", "High click-through-rate (CTR) creative hook", "A/B tested with 3 hook variations"]
  },
  {
    id: "vid-4",
    title: "Product Explainer & Story Reel",
    format: "9:16 Vertical Story",
    platform: "Instagram Reels / Shorts",
    tools: ["Filmora", "CapCut", "Canva"],
    metrics: "18K+ Organic Views • 92% Likes",
    tag: "Product Showcase",
    gradient: "from-pink-500/20 to-rose-500/20",
    description: "Engaging product breakdown highlighting benefits, features, and social proof with crisp visual b-rolls.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    driveUrl: VIDEOS_DRIVE_URL,
    highlights: ["Visual benefit callouts", "Smooth zoom and pan transitions", "High watch-time retention"]
  }
];

// 🎨 2. GRAPHIC CREATIVES & AD DESIGNS (Real Visual Graphic Cards)
export const creativeProjects = [
  {
    id: "crt-1",
    title: "E-Commerce Meta Ad Banner (4.2x ROAS)",
    format: "1:1 Square Ad",
    type: "Paid Ad Creative",
    image: "/creatives/creative_1.svg",
    tools: ["Canva", "Photoshop", "Ad Copy"],
    metrics: "+22% CTR • 4.2x ROAS",
    tag: "Performance Ad",
    gradient: "from-purple-500/20 to-pink-500/20",
    description: "Click-worthy feed and story ad banner with bold headlines, clear benefit hierarchy, and prominent offer CTA.",
    driveUrl: PHOTOS_DRIVE_URL,
    highlights: ["Visual hierarchy optimized for mobile feeds", "High contrast color palette and bold typography", "Tested discount & offer callouts"]
  },
  {
    id: "crt-2",
    title: "Luxury Real Estate Campaign Ad",
    format: "4:5 High-Res Poster",
    type: "High-Ticket Lead Gen",
    image: "/creatives/creative_2.svg",
    tools: ["Canva", "Content Strategy"],
    metrics: "450+ Leads • -34% CPL",
    tag: "Real Estate",
    gradient: "from-amber-500/20 to-orange-500/20",
    description: "Premium property ad design for exclusive gated villas with high-converting Meta Instant Form integration.",
    driveUrl: PHOTOS_DRIVE_URL,
    highlights: ["Exclusive luxury color scheme", "Trust indicators & key property highlights", "High conversion on Instagram & FB"]
  },
  {
    id: "crt-3",
    title: "Google PPC & Search Funnel Ad",
    format: "Display Ad Banner",
    type: "Search & Display",
    image: "/creatives/creative_3.svg",
    tools: ["Google Ads", "Canva", "GA4"],
    metrics: "+30% CTR • -18% CPC",
    tag: "PPC Funnel",
    gradient: "from-blue-500/20 to-cyan-500/20",
    description: "High-intent display creative for remarketing and search discovery campaigns.",
    driveUrl: PHOTOS_DRIVE_URL,
    highlights: ["Clear metric proof and value proposition", "Remarketing to warm bounce traffic", "Direct lead capture alignment"]
  },
  {
    id: "crt-4",
    title: "Organic Instagram Reel Growth Post",
    format: "1080x1350 Carousel & Story",
    type: "Organic Growth",
    image: "/creatives/creative_4.svg",
    tools: ["Canva", "CapCut", "Copywriting"],
    metrics: "+28% Engagement",
    tag: "Social Growth",
    gradient: "from-pink-500/20 to-purple-500/20",
    description: "Creative layout highlighting short-form reel hooks, subtitle pacing, and engagement growth strategies.",
    driveUrl: PHOTOS_DRIVE_URL,
    highlights: ["Proven hook framework", "Engagement trigger on final slide", "Organic viral distribution"]
  }
];
