import { AGENCY_METRICS } from "../data/agencyData";

export default function MetricsBanner() {
  return (
    <section className="py-16 bg-[#F5EFEB] border-y border-[#EAE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {AGENCY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#EAE5DE] text-center shadow-xs"
            >
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1714] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-sans font-semibold text-stone-800 mt-2 leading-snug">
                {metric.label}
              </div>
              <div className="text-[10px] font-sans font-medium text-stone-500 mt-1 uppercase tracking-widest">
                {metric.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
