import { GROWTH_PROCESS } from "../data/agencyData";

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 px-4 sm:px-8 bg-[#F5EFEB] border-t border-[#EAE5DE] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
            Operating Methodology
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
            The 4-Phase Growth <span className="italic">Architecture</span>
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm font-sans font-normal">
            A disciplined execution framework designed to isolate testing variables, establish benchmark proof, and scale capital with confidence.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROWTH_PROCESS.map((item) => (
            <div
              key={item.step}
              className="p-7 rounded-3xl bg-white border border-[#EAE5DE] shadow-maison flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-normal text-stone-400">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-stone-600 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE5DE]">
                    {item.timeline}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-[#965E3A] mb-1.5 font-semibold">
                  {item.phase}
                </div>
                <h3 className="font-serif text-base font-medium text-[#1C1714] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#EAE5DE]">
                <span className="text-[10px] font-sans text-stone-400 font-semibold uppercase tracking-wider">Phase 0{item.step} Milestones</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
