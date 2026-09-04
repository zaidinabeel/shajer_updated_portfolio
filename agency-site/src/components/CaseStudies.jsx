import { useState } from "react";
import { 
  FaArrowRight, 
  FaFilePdf, 
  FaCircleCheck, 
  FaArrowUpRightFromSquare
} from "react-icons/fa6";
import { CASE_STUDIES, AGENCY_INFO } from "../data/agencyData";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Engagements" },
    { id: "Meta Ads", label: "Paid Social" },
    { id: "Google Search PPC", label: "Google PPC" },
    { id: "Short-Form Video Production", label: "Video Production" },
    { id: "Meta Advantage+ Scaling", label: "DTC ROAS" }
  ];

  const filteredStudies = activeTab === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.service === activeTab);

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#EAE5DE] gap-6">
          <div>
            <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
              Selected Engagements
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
              Case Studies & <span className="italic">Measurable</span> Trajectories
            </h2>
          </div>

          <a
            href={AGENCY_INFO.deckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-stone-700 hover:text-[#965E3A] transition"
          >
            <FaFilePdf className="text-[#965E3A]" />
            <span>Download Verified Case Dossier (PDF)</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#1C1714] text-[#FAF8F5] shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#EAE5DE]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl bg-white border border-[#EAE5DE] hover:border-[#965E3A]/40 p-8 flex flex-col justify-between shadow-maison transition-all duration-300 group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-[#EAE5DE]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#965E3A] block mb-1">
                      {cs.industry} • {cs.client}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#1C1714] group-hover:text-[#965E3A] transition leading-snug">
                      {cs.title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0 bg-[#FAF8F5] border border-[#EAE5DE] px-4 py-3 rounded-2xl">
                    <div className="font-serif text-2xl font-normal text-[#1C1714]">
                      {cs.heroMetric}
                    </div>
                    <div className="text-[9px] font-sans text-stone-500 uppercase tracking-widest font-semibold">
                      {cs.heroMetricLabel}
                    </div>
                  </div>
                </div>

                {/* Challenge & Strategy Ledger */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE]">
                    <div className="text-[10px] font-sans font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                      Client Dilemma
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans font-normal">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE]">
                    <div className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#965E3A] mb-1.5">
                      Strategic Interventions
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans font-normal">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Measurable Results */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-stone-400 block mb-1.5">
                    Documented Realizations
                  </span>
                  {cs.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-700 font-sans">
                      <FaCircleCheck className="text-[#965E3A] text-xs shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cs.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full text-[10px] font-sans font-medium text-stone-600 bg-[#FAF8F5] border border-[#EAE5DE]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-[#EAE5DE] flex items-center justify-between gap-3">
                <a
                  href={cs.deckLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-medium text-stone-600 hover:text-[#965E3A] transition"
                >
                  <FaFilePdf className="text-[#965E3A] text-xs" />
                  <span>Inspect Deck Archive</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-sans font-medium text-xs tracking-wider transition flex items-center gap-1.5"
                >
                  <span>Replicate Architecture</span>
                  <FaArrowRight className="text-[9px]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
