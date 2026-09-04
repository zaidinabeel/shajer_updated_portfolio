import { useState } from "react";
import { 
  FaBolt, 
  FaVideo, 
  FaChartLine, 
  FaFilter, 
  FaPalette, 
  FaMagnifyingGlassDollar, 
  FaArrowRight, 
  FaCircleCheck 
} from "react-icons/fa6";
import { AGENCY_SERVICES } from "../data/agencyData";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Disciplines" },
    { id: "Paid Acquisition", label: "Paid Media" },
    { id: "Creative Production", label: "Video Studio" },
    { id: "Conversion Funnels", label: "CRO & Funnels" },
    { id: "Strategy & Diagnostics", label: "Advisory & Audits" },
  ];

  const getIcon = (id) => {
    switch (id) {
      case "meta-ads": return <FaBolt className="text-[#965E3A]" />;
      case "reels-studio": return <FaVideo className="text-[#965E3A]" />;
      case "google-ppc": return <FaChartLine className="text-[#965E3A]" />;
      case "cro-funnels": return <FaFilter className="text-[#965E3A]" />;
      case "creative-strategy": return <FaPalette className="text-[#965E3A]" />;
      default: return <FaMagnifyingGlassDollar className="text-[#965E3A]" />;
    }
  };

  const filteredServices = activeCategory === "all" 
    ? AGENCY_SERVICES 
    : AGENCY_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 px-4 sm:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-8 border-b border-[#EAE5DE]">
          <div className="max-w-2xl">
            <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
              Practices & Disciplines
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
              Bespoke Growth Capabilities for <span className="italic">Every Stage</span> of Scale.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#EAE5DE] hover:border-[#965E3A] text-stone-800 hover:text-[#965E3A] font-sans font-medium text-xs tracking-wider uppercase transition shrink-0 shadow-xs"
          >
            <span>Request Scope Brief</span>
            <FaArrowRight className="text-[10px]" />
          </a>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#1C1714] text-[#FAF8F5] shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#EAE5DE]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-white border border-[#EAE5DE] hover:border-[#965E3A]/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-maison hover:shadow-maison-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] flex items-center justify-center text-lg">
                    {getIcon(service.id)}
                  </div>
                  
                  <span className="font-mono text-xs font-medium text-stone-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1C1714] group-hover:text-[#965E3A] transition">
                  {service.title}
                </h3>
                <p className="text-xs font-sans font-semibold text-[#965E3A] mt-1">
                  {service.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-normal">
                  {service.description}
                </p>

                {/* Scope of Work */}
                <div className="mt-7 pt-5 border-t border-[#EAE5DE] space-y-2.5">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-stone-400 block mb-2">
                    Scope of Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 font-sans">
                      <FaCircleCheck className="text-[#965E3A] text-xs mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric & Action */}
              <div className="mt-8 pt-4 border-t border-[#EAE5DE] flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg font-medium text-[#1C1714]">{service.metric}</div>
                  <div className="text-[10px] font-sans text-stone-500 uppercase tracking-wider">{service.metricLabel}</div>
                </div>

                <a
                  href="#contact"
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#1C1714] text-stone-800 hover:text-white text-xs font-sans font-medium transition flex items-center gap-1.5 border border-[#EAE5DE]"
                >
                  <span>Inquire</span>
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
