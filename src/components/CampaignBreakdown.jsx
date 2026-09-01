import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMeta, 
  FaBullseye, 
  FaChartLine, 
  FaLocationDot, 
  FaUsers, 
  FaSliders, 
  FaCheck, 
  FaArrowTrendUp, 
  FaCircleCheck,
  FaShieldHalved,
  FaUtensils,
  FaWandMagicSparkles,
  FaMobileScreen,
  FaArrowRight,
  FaGoogleDrive,
  FaArrowUpRightFromSquare,
  FaFilePdf
} from "react-icons/fa6";
import { SiMeta, SiGoogleads, SiInstagram } from "react-icons/si";

const PDF_DECK_URL = "https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view";

const campaigns = [
  {
    id: "bioinus-clinic",
    client: "Bioinus Hair & Skin Clinic",
    industry: "Dermatology & Aesthetic Healthcare",
    objective: "Multi-Placement Traffic & Lead Generation Funnel",
    badge: "Meta Ads Manager Verified",
    tagline: "Scalable healthcare lead generation in Lucknow & NCR",
    dailyBudget: "₹600 – ₹800 / day",
    dailyReach: "14,000 – 41,000",
    dailyClicks: "166 – 481 clicks",
    dailyLeads: "27 – 78 leads / day",
    audiencePool: "17.1M – 21.0M",
    locations: [
      { name: "Lucknow, Uttar Pradesh", radius: "+40 km radius" },
      { name: "Ghaziabad / NCR, UP", radius: "+40 km radius" }
    ],
    targeting: [
      { category: "Demographics > Education", detail: "Esthetics / Skin Care Specialists" },
      { category: "Interests > Beauty", detail: "Hair products, Hair care, Salon treatments" },
      { category: "Age & Demographics", detail: "18 – 45 years • All Genders" },
      { category: "AI Optimization", detail: "Advantage+ Audience Machine Learning" }
    ],
    adCopy: {
      primary: "Unlock Radiant Skin with Bioinus. Try It Today.",
      headline: "Revitalize Your Hair with Our Premium Haircare Products",
      description: "Bioinus is an integrated skincare and hair-care centre providing skin, hair, and body treatments using cutting-edge medical technologies...",
      cta: "Book Now / Learn More",
      placements: "19 Placements (Instagram Reels, Facebook Feeds, Stories, In-Stream Ads)"
    },
    keyTakeaways: [
      "Targeted high-intent beauty & aesthetic seekers across UP using Advantage+ audience suggestions.",
      "Achieved estimated 27–78 daily inbound patient consultation leads on an optimal ₹800/day ad spend.",
      "Custom multi-placement creative adaptations optimized specifically for 9:16 Reels and mobile feeds."
    ]
  },
  {
    id: "the-big-bite",
    client: "The Big Bite (BB)",
    industry: "Restaurant & Food Beverage",
    objective: "Local Store Footfall & Food Delivery Offer Campaigns",
    badge: "Social & Creative Suite",
    tagline: "High-converting promo banners & discount offer ads",
    dailyBudget: "Promotional & Festive",
    dailyReach: "Local Lucknow Reach",
    dailyClicks: "35%–60% Promo CTR",
    dailyLeads: "Direct WhatsApp / Table Inquiries",
    audiencePool: "Hyper-Local Foodies",
    locations: [
      { name: "Sarfarazganj, Lucknow", radius: "Core delivery zone" },
      { name: "Near Era Medical College", radius: "Student & resident hub" }
    ],
    targeting: [
      { category: "Interests > Food & Dining", detail: "Fast Food, Asian Cuisine, Non-Veg Specials" },
      { category: "Behavior > Food Delivery", detail: "Online food ordering & dine-in seekers" },
      { category: "Demographics > Age", detail: "18 – 35 College Students & Families" },
      { category: "Creative Angles", detail: "50%–60% Off Flash Hooks & Festival Creatives" }
    ],
    adCopy: {
      primary: "Hot & Spicy Food — Special Offer Up to 60% Off Today!",
      headline: "Delicious Asian & North Indian Delicacies at The Big Bite",
      description: "Family food restaurant offering signature dishes, fresh preparations, and fast home delivery in Lucknow.",
      cta: "Order Now / Call Direct",
      placements: "Instagram Post Banners, Stories, and WhatsApp Direct Funnel"
    },
    keyTakeaways: [
      "Engineered high-contrast food banners with hunger-inducing visual hooks and clear offer callouts.",
      "Created special seasonal & festive marketing creatives (e.g., 'Love and Light for Lohri').",
      "Drove direct dine-in table bookings and home delivery calls through localized ad targeting."
    ]
  }
];

export default function CampaignBreakdown() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCampaign = campaigns[activeTab];

  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-white px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-pink-100/30 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 shadow-xs mb-3.5 backdrop-blur-xs">
            <SiMeta className="text-[#0081FB] text-sm" />
            <span>Verified Campaign Proof of Work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Live Meta Ads <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Campaign Breakdown</span>
          </h2>

          <p className="mt-3 text-slate-600 text-xs sm:text-base max-w-lg mx-auto leading-relaxed">
            Real campaign architectures, Advantage+ audience configurations, and verified daily performance estimates.
          </p>

          {/* Direct Credibility Link to PDF Deck */}
          <div className="mt-4 flex justify-center">
            <a
              href={PDF_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200/90 text-xs font-bold shadow-xs hover:shadow-sm transition group"
            >
              <FaGoogleDrive className="text-purple-600 text-sm" />
              <span>Inspect Original 20-Page Campaign Deck (PDF)</span>
              <FaArrowUpRightFromSquare className="text-[10px] text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Campaign Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 flex flex-wrap gap-1.5 items-center justify-center max-w-lg w-full">
            {campaigns.map((camp, idx) => (
              <button
                key={camp.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-white text-slate-900 shadow-md shadow-slate-200/80 border border-slate-200/80 scale-[1.02]"
                    : "text-slate-600 hover:text-purple-600 hover:bg-white/60"
                }`}
              >
                {idx === 0 ? (
                  <SiMeta className="text-[#0081FB] text-sm" />
                ) : (
                  <FaUtensils className="text-amber-600 text-xs" />
                )}
                <span className="truncate">{camp.client}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CAMPAIGN SHOWCASE CONTAINER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCampaign.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden"
          >
            {/* Top Bar: Campaign Client + Status Badge & PDF Proof */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-100/80 px-2.5 py-0.5 rounded-full border border-purple-200/70">
                    {activeCampaign.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">•</span>
                  <span className="text-xs font-bold text-slate-500">
                    {activeCampaign.objective}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeCampaign.client}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                  <FaCircleCheck className="text-[11px] text-emerald-600" />
                  <span>{activeCampaign.badge}</span>
                </span>

                <a
                  href={PDF_DECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-purple-700 bg-white hover:bg-purple-50 border border-purple-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs transition"
                >
                  <FaFilePdf className="text-red-500 text-xs" />
                  <span>View PDF Deck</span>
                  <FaArrowUpRightFromSquare className="text-[9px] text-slate-400" />
                </a>
              </div>
            </div>

            {/* KEY ESTIMATED METRICS TILES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Daily Ad Budget
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeCampaign.dailyBudget}
                </div>
                <div className="text-[10px] font-semibold text-purple-600 mt-0.5">
                  Optimized Allocation
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Est. Daily Reach
                </div>
                <div className="text-xl sm:text-2xl font-black text-blue-700">
                  {activeCampaign.dailyReach}
                </div>
                <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  High-intent Audience Pool
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Est. Daily Results
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">
                  {activeCampaign.dailyClicks}
                </div>
                <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  {activeCampaign.dailyLeads}
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Addressable Market
                </div>
                <div className="text-xl sm:text-2xl font-black text-purple-700">
                  {activeCampaign.audiencePool}
                </div>
                <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  Lucknow & NCR Regional Reach
                </div>
              </div>
            </div>

            {/* 2-COLUMN DEEP DIVE: TARGETING + AD CREATIVE & COPY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              
              {/* LEFT: Geographic & Advantage+ Targeting (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0081FB] flex items-center justify-center text-xs">
                      <FaLocationDot />
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Geographic Delivery & Radius Controls
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {activeCampaign.locations.map((loc, li) => (
                      <div key={li} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">{loc.name}</span>
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                          {loc.radius}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Advantage+ & Detailed Targeting breakdown */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-xs font-extrabold text-slate-900 mb-2.5 flex items-center gap-1.5">
                      <FaBullseye className="text-purple-600 text-xs" />
                      <span>Advantage+ Audience Definition</span>
                    </div>

                    <div className="space-y-2">
                      {activeCampaign.targeting.map((t, ti) => (
                        <div key={ti} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-2 rounded-lg bg-slate-50 border border-slate-100 gap-1">
                          <span className="font-bold text-slate-700">{t.category}</span>
                          <span className="text-purple-700 font-bold bg-white px-2 py-0.5 rounded-md border border-slate-200/80 text-[11px]">
                            {t.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Strategic Learnings */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="text-xs font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                    <FaWandMagicSparkles className="text-purple-600 text-xs" />
                    <span>Key Strategic Highlights</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {activeCampaign.keyTakeaways.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 leading-relaxed">
                        <FaCheck className="text-emerald-600 text-xs shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: Live Ad Preview & Direct-Response Copy (5 Cols) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <FaMobileScreen className="text-purple-600 text-sm" />
                      <h4 className="text-sm font-extrabold text-slate-900">
                        Ad Creative & Copy Specs
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Meta Ad Copy
                    </span>
                  </div>

                  {/* Simulated Mobile Ad Preview Box */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 text-xs space-y-3 font-sans">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Primary Hook Text
                      </div>
                      <p className="text-slate-900 font-bold text-xs bg-white p-2.5 rounded-xl border border-slate-200">
                        "{activeCampaign.adCopy.primary}"
                      </p>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Headline
                      </div>
                      <p className="text-slate-800 font-bold text-xs bg-white p-2.5 rounded-xl border border-slate-200">
                        {activeCampaign.adCopy.headline}
                      </p>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Placements & Funnel CTA
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1">
                        <div className="text-[11px] font-bold text-emerald-700 flex items-center justify-between">
                          <span>CTA: {activeCampaign.adCopy.cta}</span>
                          <span>✓ Active</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {activeCampaign.adCopy.placements}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <a
                    href={PDF_DECK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1.5"
                  >
                    <FaFilePdf className="text-red-500 text-xs" />
                    <span>Open 20-Page PDF Deck</span>
                    <FaArrowUpRightFromSquare className="text-[9px]" />
                  </a>

                  <a
                    href="https://wa.me/917860704583?text=Hi%20Shajer,%20I%20saw%20your%20Meta%20Ads%20campaign%20breakdown%20and%20want%20to%20discuss%20a%20campaign!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss Campaign</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
