import { FaCalendarAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Social Media Executive",
    company: "Zaari IT Solutions",
    period: "Nov 2024 – Present",
    type: "Current Role",
    points: [
      "Increased Instagram engagement by 28% within 3 months via short-form video reels and audience targeting.",
      "Generated a consistent flow of qualified leads using Meta Ads with a 32% reduced cost-per-lead (CPL).",
      "Improved campaign CTR by 22% by refining creatives, ad copy hooks, and placement testing.",
      "Managed Google Ads Search and Display campaigns achieving a 15–20% improvement in CPC efficiency.",
      "Produced reels, shorts, and promotional creative video assets expanding organic reach."
    ],
  },
  {
    role: "Google Ads Executive",
    company: "Click Retina",
    period: "Aug 2023 – Nov 2024",
    type: "Previous Agency",
    points: [
      "Improved Google Search campaign CTR by 30% through comprehensive keyword optimization and high-intent copy.",
      "Reduced Cost-Per-Click (CPC) by 18% across accounts with bid strategy optimization and negative keyword expansion.",
      "Increased client lead volume by 25–35% through segmented audience targeting and landing page alignment.",
      "Managed multi-tiered remarketing campaigns that boosted return visitor conversions."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 mb-2.5">
            Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base">
            Hands-on experience managing paid ad spend, social media growth, and content pipelines.
          </p>
        </div>

        {/* Clean Mobile-Optimized List */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200/80">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-purple-700 flex items-center gap-1.5 mt-0.5">
                    <FaBuilding className="text-[11px]" /> {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                    <FaCalendarAlt className="text-purple-600 text-[10px]" /> {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <FaCheckCircle className="text-purple-600 text-xs shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
