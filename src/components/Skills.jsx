import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaCheck, 
  FaCircleCheck,
  FaVideo
} from "react-icons/fa6";
import { 
  SiMeta, 
  SiGoogleads, 
  SiGoogleanalytics, 
  SiCanva, 
  SiWondersharefilmora, 
  SiInstagram, 
  SiNotion, 
  SiLooker, 
  SiGoogletagmanager 
} from "react-icons/si";

// Crisp SVG for CapCut official logo
function CapCutIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`${className} shrink-0`}
      aria-label="CapCut"
    >
      <path d="M4 4h16c.55 0 1 .45 1 1v1.2c0 .35-.18.67-.48.85L13.6 11.2a1.8 1.8 0 0 1-1.2.45c-.44 0-.85-.16-1.2-.45L4.48 7.05A1 1 0 0 1 4 6.2V5c0-.55.45-1 1-1zm0 16h16c.55 0 1-.45 1-1v-1.2a1 1 0 0 0-.48-.85l-6.92-4.15a1.8 1.8 0 0 0-2.4 0l-6.92 4.15A1 1 0 0 0 4 17.8V19c0 .55.45 1 1 1z" />
    </svg>
  );
}

const skillCategories = [
  {
    id: "paid-ads",
    title: "Paid Ads & PPC",
    badge: "Performance Ads",
    tagline: "High-ROI Funnels",
    icon: <SiMeta className="text-[#0081FB] text-2xl shrink-0" />,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    iconBg: "bg-blue-50 border-blue-200/80",
    checkBg: "bg-blue-100 text-blue-700",
    skills: [
      { name: "Meta Ads (FB & Instagram)", highlight: true },
      { name: "Google Search & Display PPC", highlight: false },
      { name: "Lead Generation Funnels", highlight: false },
      { name: "Remarketing & Lookalikes", highlight: false },
      { name: "A/B Creative & Copy Testing", highlight: false }
    ],
    tools: [
      { name: "Meta Ads", icon: <SiMeta className="text-[#0081FB] text-sm shrink-0" /> },
      { name: "Google Ads", icon: <SiGoogleads className="text-[#FBBC04] text-sm shrink-0" /> },
      { name: "Pixel & CAPI", icon: <SiMeta className="text-[#0081FB] text-sm shrink-0" /> }
    ]
  },
  {
    id: "video-reels",
    title: "Video Reels & Motion",
    badge: "Viral Content",
    tagline: "9:16 Short-Form",
    icon: <FaVideo className="text-[#E11D48] text-2xl shrink-0" />,
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    iconBg: "bg-pink-50 border-pink-200/80",
    checkBg: "bg-pink-100 text-pink-700",
    skills: [
      { name: "CapCut Reel Video Editing", highlight: true },
      { name: "Canva Ad Graphic Creatives", highlight: false },
      { name: "Filmora Dynamic Video Edits", highlight: false },
      { name: "Direct-Response Ad Copy", highlight: false },
      { name: "Viral Hook & Retention Scripting", highlight: false }
    ],
    tools: [
      { name: "CapCut Pro", icon: <CapCutIcon className="text-slate-900 w-3.5 h-3.5 shrink-0" /> },
      { name: "Canva Pro", icon: <SiCanva className="text-[#00C4CC] text-sm shrink-0" /> },
      { name: "Filmora", icon: <SiWondersharefilmora className="text-[#00D0B4] text-sm shrink-0" /> }
    ]
  },
  {
    id: "social-growth",
    title: "Social Growth & Strategy",
    badge: "Organic Reach",
    tagline: "Audience Scaling",
    icon: <SiInstagram className="text-[#E4405F] text-2xl shrink-0" />,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    iconBg: "bg-purple-50 border-purple-200/80",
    checkBg: "bg-purple-100 text-purple-700",
    skills: [
      { name: "Instagram Algorithm Growth", highlight: true },
      { name: "Content Calendar & Scheduling", highlight: false },
      { name: "Audience Persona Targeting", highlight: false },
      { name: "Community Engagement & DMs", highlight: false },
      { name: "Competitor Creative Research", highlight: false }
    ],
    tools: [
      { name: "Instagram", icon: <SiInstagram className="text-[#E4405F] text-sm shrink-0" /> },
      { name: "Meta Suite", icon: <SiMeta className="text-[#0081FB] text-sm shrink-0" /> },
      { name: "Notion", icon: <SiNotion className="text-slate-900 text-sm shrink-0" /> }
    ]
  },
  {
    id: "analytics-roi",
    title: "Analytics & Optimization",
    badge: "Data-Driven ROI",
    tagline: "Conversion Boost",
    icon: <SiGoogleanalytics className="text-[#E37400] text-2xl shrink-0" />,
    gradient: "from-amber-500/10 via-emerald-500/5 to-transparent",
    iconBg: "bg-amber-50 border-amber-200/80",
    checkBg: "bg-amber-100 text-amber-700",
    skills: [
      { name: "Google Analytics 4 (GA4)", highlight: true },
      { name: "Cost-Per-Lead (CPL) Opt.", highlight: false },
      { name: "CTR & CPC Efficiency Boost", highlight: false },
      { name: "KPI Dashboards & Reports", highlight: false },
      { name: "Conversion Event Tracking", highlight: false }
    ],
    tools: [
      { name: "GA4", icon: <SiGoogleanalytics className="text-[#E37400] text-sm shrink-0" /> },
      { name: "Looker Studio", icon: <SiLooker className="text-[#4285F4] text-sm shrink-0" /> },
      { name: "Tag Manager", icon: <SiGoogletagmanager className="text-[#246FDB] text-sm shrink-0" /> }
    ]
  },
];

const masteredPlatforms = [
  { name: "Meta Ads", icon: <SiMeta className="text-[#0081FB] text-xl" />, badge: "FB & IG" },
  { name: "Google Ads", icon: <SiGoogleads className="text-[#FBBC04] text-xl" />, badge: "Search/PPC" },
  { name: "GA4 Analytics", icon: <SiGoogleanalytics className="text-[#E37400] text-xl" />, badge: "GA4" },
  { name: "CapCut Pro", icon: <CapCutIcon className="text-slate-900 w-5 h-5 mx-auto" />, badge: "Video Editing" },
  { name: "Canva Pro", icon: <SiCanva className="text-[#00C4CC] text-xl" />, badge: "Graphics" },
  { name: "Filmora", icon: <SiWondersharefilmora className="text-[#00D0B4] text-xl" />, badge: "Motion Edits" },
  { name: "Instagram", icon: <SiInstagram className="text-[#E4405F] text-xl" />, badge: "Creator" },
  { name: "Looker Studio", icon: <SiLooker className="text-[#4285F4] text-xl" />, badge: "BI Dashboards" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/80 to-purple-50/20 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background ambient lighting mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/30 via-pink-100/20 to-blue-200/30 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white border border-purple-200/90 text-purple-700 shadow-xs mb-3.5 backdrop-blur-xs"
          >
            <FaBolt className="text-purple-600 text-xs" />
            <span>Expertise & Toolset</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Core Skills & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Power Tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-slate-600 text-xs sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            A high-performance stack combining paid ad management, viral video editing, and data-driven conversion tracking.
          </motion.p>
        </div>

        {/* 4 Core Pillars Grid with Equal Leveling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 items-stretch">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 relative flex flex-col justify-between h-full overflow-hidden bg-gradient-to-b ${cat.gradient}`}
            >
              {/* Top Content Area */}
              <div className="flex-1 flex flex-col">
                
                {/* Top Badge & Icon */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${cat.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                    {cat.icon}
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 shadow-2xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5 mb-4">
                  {cat.tagline}
                </span>

                {/* Skills Bullet List */}
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 mb-6 flex-1">
                  {cat.skills.map((skill, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-2 group/item p-1 -mx-1 rounded-lg hover:bg-white/80 transition-colors"
                    >
                      <div className={`w-4 h-4 rounded-full ${cat.checkBg} flex items-center justify-center shrink-0`}>
                        <FaCheck className="text-[8px]" />
                      </div>
                      <span className={`leading-tight ${skill.highlight ? "font-bold text-slate-900" : "font-medium text-slate-700"}`}>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Level-Aligned Tool Shelf (Fully Visible & Legible) */}
              <div className="pt-4 border-t border-slate-100/90 mt-auto flex flex-col justify-end">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Core Stack</span>
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">3 Tools</span>
                </div>

                <div className="flex flex-wrap gap-1.5 min-h-[64px] items-start content-start">
                  {cat.tools.map((tool, ti) => (
                    <div
                      key={ti}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/85 hover:border-purple-300 hover:shadow-xs transition-all duration-200"
                    >
                      <span className="flex items-center justify-center">
                        {tool.icon}
                      </span>
                      <span className="text-xs font-bold text-slate-800 whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Mastered Platforms & Software Banner with Official Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-lg shadow-slate-200/40"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Platforms & Software Ecosystem
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Official platforms & tools actively leveraged to build, optimize, and scale campaigns.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                <FaCircleCheck className="text-[10px] text-purple-600" /> 100% Production Certified
              </span>
            </div>
          </div>

          {/* Software Chips with Original Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {masteredPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-xs transition-all duration-200 group text-center cursor-default"
              >
                <div className="mb-1.5 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center h-6">
                  {platform.icon}
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight truncate w-full">
                  {platform.name}
                </div>
                <div className="text-[10px] font-semibold text-slate-600 mt-0.5 truncate w-full">
                  {platform.badge}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
