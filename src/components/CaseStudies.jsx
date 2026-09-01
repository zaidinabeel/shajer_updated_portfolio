import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaArrowTrendUp, 
  FaBullseye, 
  FaLightbulb, 
  FaCircleCheck, 
  FaBuilding, 
  FaChartPie 
} from "react-icons/fa6";

const caseStudies = [
  {
    id: "zaari-meta",
    title: "Instagram Organic Growth & Meta Lead Generation Scaling",
    company: "Zaari IT Solutions",
    period: "Nov 2024 – Present",
    tag: "Social Media & Meta Ads",
    overview: "Implemented a full-funnel strategy combining organic short-form reels with hyper-targeted Meta Lead Ads to drive inbound inquiries for IT solutions.",
    kpis: [
      { label: "Instagram Engagement", value: "+28%", highlight: "Growth in 3 Months" },
      { label: "Campaign CTR", value: "+22%", highlight: "Via Creative Testing" },
      { label: "Cost Per Lead (CPL)", value: "-32%", highlight: "Targeting Optimization" },
      { label: "CPC Efficiency", value: "15–20%", highlight: "Cost Reduction" },
    ],
    challenge: "High client acquisition costs on traditional cold outreach and stagnant social media engagement with generic static image posts.",
    strategy: [
      "Shifted content strategy towards value-first short-form video reels (using CapCut & Filmora) showcasing software solutions & client use cases.",
      "Restructured Meta Ads campaigns into Top-of-Funnel (ToFu) video view retargeting and Bottom-of-Funnel (BoFu) Instant Form lead generation.",
      "Implemented weekly KPI tracking dashboards covering Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and audience retention."
    ],
    results: "Achieved consistent 28% engagement growth on Instagram and delivered over 350+ pre-qualified leads with a 32% lower cost per lead."
  },
  {
    id: "click-retina-google",
    title: "High-Intent Google Search & Remarketing PPC Overhaul",
    company: "Click Retina",
    period: "Aug 2023 – Nov 2024",
    tag: "Google Ads & PPC",
    overview: "Revamped multi-account Google Search and Display architectures to eliminate wasted ad spend, capture high-intent search queries, and scale client lead flow.",
    kpis: [
      { label: "Search Campaign CTR", value: "+30%", highlight: "High-Intent Copy" },
      { label: "Cost Per Click (CPC)", value: "-18%", highlight: "Bid Strategy Optimization" },
      { label: "Client Lead Volume", value: "+25–35%", highlight: "Segmented Targeting" },
      { label: "Quality Score", value: "8.5/10", highlight: "Landing Page Alignment" },
    ],
    challenge: "Broad keyword targeting was burning ad budgets on irrelevant clicks, resulting in poor CTR and high CPC across competitive service niches.",
    strategy: [
      "Conducted extensive negative keyword expansion and transitioned accounts from broad match to tightly grouped phrase & exact match keywords.",
      "Crafted responsive search ads (RSA) with dynamic keyword insertion (DKI) and compelling value-proposition headlines.",
      "Built multi-tiered remarketing funnels targeting previous website visitors who didn't convert on first visit."
    ],
    results: "Delivered an average 30% jump in Click-Through Rates, 18% lower cost per click across accounts, and 35% higher inbound conversion volume."
  }
];

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0);
  const current = caseStudies[activeStudy];

  return (
    <section id="case-studies" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-4">
            <FaChartPie className="text-xs" /> Proven Case Studies
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Real Campaigns. Measurable Impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 dark:text-gray-400 text-base"
          >
            How data-backed creative testing, keyword sculpting, and funnel optimization drove tangible business growth for client accounts.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                activeStudy === idx
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
              }`}
            >
              <FaBuilding className="text-xs" />
              <span>{study.company}</span>
              <span className="text-xs opacity-75 hidden sm:inline">• {study.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Details Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-purple-500/20 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl backdrop-blur-xl"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full border border-purple-200 dark:border-purple-500/30">
                  {current.tag}
                </span>
                <span className="text-xs text-slate-500 dark:text-gray-400">{current.period}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.title}
              </h3>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-slate-400 dark:text-gray-400 block">Organization</span>
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                {current.company}
              </span>
            </div>
          </div>

          {/* Metric Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {current.kpis.map((kpi, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-900/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/90 text-center hover:border-purple-400 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                  {kpi.value}
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-white mt-1">{kpi.label}</div>
                <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">{kpi.highlight}</div>
              </div>
            ))}
          </div>

          {/* Strategy Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Left: Challenge & Execution */}
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-rose-600 dark:text-red-400 font-bold text-sm mb-2">
                  <FaBullseye /> The Challenge
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {current.challenge}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                  <FaArrowTrendUp /> Final Business Outcome
                </div>
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-semibold">
                  {current.results}
                </p>
              </div>
            </div>

            {/* Right: Applied Strategy */}
            <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-purple-200 dark:border-purple-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-sm mb-4">
                  <FaLightbulb /> Strategic Roadmap Implemented
                </div>
                <ul className="space-y-3">
                  {current.strategy.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300">
                      <FaCircleCheck className="text-purple-600 dark:text-purple-400 text-sm shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href="#contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white rounded-full text-xs font-bold hover:scale-105 transition shadow-lg shadow-purple-500/25"
                >
                  Consult for Your Brand →
                </a>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
