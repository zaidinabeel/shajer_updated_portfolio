/**
 * ==============================================================================
 * 📁 SHAJER'S WORK & PROJECTS DATABASE
 * ==============================================================================
 * 
 * 💡 HOW TO ADD / EDIT SHAJER'S PROJECTS & VIDEO REELS:
 * ------------------------------------------------------------------------------
 * Simply copy one of the objects below and add it to the `projectsData` array!
 * 
 * Fields you can customize:
 * - `id`: Unique identifier (e.g. "reel-4", "meta-3", "google-2")
 * - `title`: Name of the project / campaign / reel
 * - `category`: One of -> "reels" (Video Reels) | "meta" (Meta Ads) | "google" (Google PPC)
 * - `platform`: Display badge (e.g. "Instagram Reels", "YouTube Shorts", "Meta Ads", "Google Ads")
 * - `tools`: Array of tools used (e.g. ["CapCut", "Canva", "Filmora", "Meta Ads Manager"])
 * - `metrics`: Key performance stat (e.g. "+28% Engagement • 45K+ Views", "-32% CPL • 350+ Leads")
 * - `tag`: Category pill tag (e.g. "High Engagement", "Lead Generation", "Search PPC", "Viral Creative")
 * - `isNew`: (Optional boolean) Set to `true` to show a glowing "🔥 NEW / LATEST" badge!
 * - `summary`: Short 1-2 sentence description of the project
 * - `videoUrl`: Embeddable video URL (e.g. Google Drive link, YouTube embed link, or MP4)
 * - `highlights`: Bullet points explaining what was achieved
 * - `clientNiche`: Client or industry name (e.g. "Real Estate", "E-Commerce", "Zaari IT Solutions")
 * ==============================================================================
 */

// 🔗 Main Google Drive Folder link for all raw creatives/videos
export const googleDriveVaultUrl = "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "reels", label: "🎬 Video Reels & Creatives" },
  { id: "meta", label: "📱 Meta Ads & Growth" },
  { id: "google", label: "🔍 Google PPC & Search" },
  { id: "drive", label: "📁 Google Drive Vault" },
];

export const projectsData = [
  {
    id: "drive-vault",
    title: "Shajer's Raw Video & Creative Vault",
    category: "drive",
    platform: "Google Drive Vault",
    tools: ["CapCut", "Filmora", "Canva", "Raw 4K/1080p"],
    metrics: "Direct Drive Access • Live Updates",
    tag: "Creative Vault",
    isNew: true,
    gradient: "from-blue-600/20 via-purple-600/20 to-emerald-600/20",
    summary: "Complete cloud repository containing all raw video reels, promotional creatives, campaign drafts, and high-resolution exports.",
    videoUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    highlights: [
      "Real-time access to raw MP4 reels and video campaigns",
      "Automatically updates whenever new videos are uploaded to Google Drive",
      "High-resolution exports for Instagram, Facebook, and YouTube Shorts"
    ],
    clientNiche: "Multi-Client Creative Archive"
  },
  {
    id: "reel-1",
    title: "Viral Real Estate Promo Reel",
    category: "reels",
    platform: "Instagram Reels",
    tools: ["CapCut", "Canva", "Filmora"],
    metrics: "+28% Engagement • 45K+ Views",
    tag: "High Engagement",
    isNew: false,
    gradient: "from-pink-500/20 via-purple-500/20 to-blue-500/20",
    summary: "Dynamic property showcase video with snappy hook, custom captions, upbeat pacing, and aesthetic transitions crafted for luxury real estate buyers.",
    videoUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    highlights: [
      "Hook tested in first 2.5 seconds to retain 70%+ viewers",
      "Dynamic beat-synced text overlays & subtitle design",
      "Resulted in 45K+ organic views and +28% profile visits"
    ],
    clientNiche: "Real Estate & Architecture"
  },
  {
    id: "meta-1",
    title: "Meta Lead Gen & CPL Optimization",
    category: "meta",
    platform: "Meta Ads (FB & IG)",
    tools: ["Meta Ads Manager", "Canva", "CapCut"],
    metrics: "-32% CPL • 350+ Leads",
    tag: "Lead Generation",
    gradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
    summary: "Scalable lead generation funnel targeting qualified B2B & local audiences with custom instant forms, A/B creative testing, and lookalike modeling.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Cost Per Lead (CPL) reduced by 32% within 4 weeks",
      "Tested 6 creative variations (video vs carousel vs single image)",
      "Automated lead sync directly to sales CRM"
    ],
    clientNiche: "IT Solutions (Zaari IT Solutions)"
  },
  {
    id: "google-1",
    title: "Google Search PPC & High-Intent Funnel",
    category: "google",
    platform: "Google Ads",
    tools: ["Google Ads Manager", "Keyword Planner", "GA4"],
    metrics: "+30% Search CTR • -18% CPC",
    tag: "Search PPC",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    summary: "High-intent search campaign restructure with negative keyword sculpting, responsive search ads (RSA), and optimized conversion landing pages.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    highlights: [
      "30% increase in Click-Through Rate (CTR) for buyer keywords",
      "Reduced Cost-Per-Click (CPC) by 18% via Quality Score optimization",
      "Managed remarketing conversion funnels for warm visitors"
    ],
    clientNiche: "Performance PPC (Click Retina)"
  },
  {
    id: "reel-2",
    title: "Fitness & Lifestyle Brand Reel",
    category: "reels",
    platform: "Instagram Reels & Shorts",
    tools: ["Filmora", "CapCut", "AI Audio"],
    metrics: "3.2x Share Rate • +40% Reach",
    tag: "Viral Creative",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    summary: "Fast-paced workout motivational reel featuring sound design, visual pacing, color grading, and call-to-action for fitness memberships.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    highlights: [
      "Visual hook designed with split-screen before/after pacing",
      "Achieved 3.2x higher share count than account average",
      "Generated direct DM inquiries for personal coaching"
    ],
    clientNiche: "Health & Fitness"
  },
  {
    id: "meta-2",
    title: "E-Commerce ROAS Scaling & Creative Testing",
    category: "meta",
    platform: "Meta Ads (Advantage+)",
    tools: ["Meta Business Suite", "Canva", "CapCut"],
    metrics: "3.8x ROAS • +22% CTR",
    tag: "ROAS Scaling",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    summary: "Advantage+ shopping campaign leveraging short UGC video hooks, carousel carousels, and dynamic catalog ads to maximize return on ad spend.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    highlights: [
      "Scaled return on ad spend from 2.1x to 3.8x ROAS",
      "22% CTR improvement through creative angle testing",
      "Structured retargeting funnel with cart-abandonment offers"
    ],
    clientNiche: "Fashion & Lifestyle E-commerce"
  },
  {
    id: "meta-bioinus",
    title: "Bioinus Clinic Meta Lead Gen & Traffic Campaign",
    category: "meta",
    platform: "Meta Ads (FB & IG)",
    tools: ["Meta Ads Manager", "Advantage+", "Canva Pro", "Pixel/CAPI"],
    metrics: "14K–41K Daily Reach • 27–78 Leads/Day",
    tag: "Healthcare Lead Gen",
    isNew: true,
    gradient: "from-blue-600/20 via-purple-600/20 to-pink-600/20",
    summary: "Advantage+ multi-placement campaign targeting aesthetics & dermatology seekers across Lucknow & NCR with direct-response hooks and instant inquiry funnels.",
    videoUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    highlights: [
      "Optimized ₹600–₹800/day daily budget delivering estimated 14K–41K daily reach",
      "Demographic & interest targeting in Esthetics, Skincare, and Haircare",
      "19 active multi-placements configured across Instagram Reels and Feeds"
    ],
    clientNiche: "Bioinus Hair & Skin Clinic"
  },
  {
    id: "creative-big-bite",
    title: "The Big Bite Restaurant Social & Offer Promo Suite",
    category: "reels",
    platform: "Instagram & Meta Ads",
    tools: ["Canva Pro", "CapCut", "Meta Suite"],
    metrics: "50%–60% Promo Hook • High Footfall",
    tag: "Restaurant Branding",
    isNew: false,
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    summary: "Full commercial design suite including 50%–60% discount offer creatives, Asian cuisine menu launches, and festive brand campaigns.",
    videoUrl: "https://drive.google.com/drive/folders/1r2iFH3voXZsdttXtB-fvNkUdz-lQ7E0r",
    highlights: [
      "Designed high-contrast food banners for fast food & family dining",
      "Created festive marketing creatives ('Love & Light for Lohri')",
      "Hyper-local targeting in Sarfarazganj & Era Medical College hub, Lucknow"
    ],
    clientNiche: "The Big Bite (BB Restaurant)"
  },
  {
    id: "reel-3",
    title: "AI Product Explainer & Story Reel",
    category: "reels",
    platform: "YouTube Shorts / Reels",
    tools: ["Runway ML", "CapCut AI", "ElevenLabs"],
    metrics: "18K+ Organic Views • 92% Likes",
    tag: "AI Video",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    summary: "AI-generated storytelling video highlighting product benefits through futuristic visuals, synthetic voice narration, and cinematic B-rolls.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    highlights: [
      "Created with cutting-edge AI video generation workflows",
      "Zero camera shoot required — 100% digital & AI pipeline",
      "Reduced production turnaround time from 4 days to 4 hours"
    ],
    clientNiche: "Tech & SaaS Products"
  }
];
