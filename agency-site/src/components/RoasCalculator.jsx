import { useState, useMemo } from "react";
import { 
  FaArrowRight, 
  FaWhatsapp
} from "react-icons/fa6";
import { AGENCY_INFO } from "../data/agencyData";

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState(5000);
  const [targetRoas, setTargetRoas] = useState(4.0);
  const [avgTicket, setAvgTicket] = useState(120);

  const stats = useMemo(() => {
    const projectedRevenue = Math.round(adSpend * targetRoas);
    const estimatedConversions = Math.round(projectedRevenue / avgTicket);
    const estimatedCac = Math.round(adSpend / (estimatedConversions || 1));
    const estimatedGrossProfit = Math.round(projectedRevenue - adSpend);

    return {
      revenue: projectedRevenue,
      conversions: estimatedConversions,
      cac: estimatedCac,
      profit: estimatedGrossProfit,
    };
  }, [adSpend, targetRoas, avgTicket]);

  return (
    <section id="calculator" className="py-24 px-4 sm:px-8 bg-[#F5EFEB] border-y border-[#EAE5DE] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
            Acquisition Financial Modeler
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
            Revenue & Profit <span className="italic">Forecasting</span> Engine
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm font-sans font-normal">
            Calibrate anticipated return on media investment and gross profit realization based on verified unit economics.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#EAE5DE] p-8 sm:p-12 shadow-maison">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* 1. Ad Spend Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-sans font-semibold text-stone-800">
                    Monthly Media Allocation
                  </label>
                  <span className="font-serif text-lg font-medium text-[#1C1714]">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#EAE5DE] rounded-lg appearance-none cursor-pointer accent-[#965E3A]"
                />
                <div className="flex justify-between text-[10px] font-sans text-stone-400 mt-1">
                  <span>$1,000 (Validation)</span>
                  <span>$25,000</span>
                  <span>$50,000 (Enterprise)</span>
                </div>
              </div>

              {/* 2. Target ROAS Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-sans font-semibold text-stone-800">
                    Target Return on Ad Spend (ROAS)
                  </label>
                  <span className="font-serif text-lg font-medium text-[#965E3A]">
                    {targetRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#EAE5DE] rounded-lg appearance-none cursor-pointer accent-[#965E3A]"
                />
                <div className="flex justify-between text-[10px] font-sans text-stone-400 mt-1">
                  <span>2.0x Baseline</span>
                  <span>4.0x Typical</span>
                  <span>6.0x Aggressive</span>
                </div>
              </div>

              {/* 3. Average Order Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-sans font-semibold text-stone-800">
                    Average Order Value (AOV) / Deal Size
                  </label>
                  <span className="font-serif text-lg font-medium text-[#1C1714]">
                    ${avgTicket}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#EAE5DE] rounded-lg appearance-none cursor-pointer accent-[#1C1714]"
                />
                <div className="flex justify-between text-[10px] font-sans text-stone-400 mt-1">
                  <span>$30 (DTC Consumer)</span>
                  <span>$500</span>
                  <span>$1,000+ (High-Ticket)</span>
                </div>
              </div>

            </div>

            {/* Right Financial Projections */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-sans uppercase tracking-widest text-stone-500 font-semibold mb-1">
                  Forecasted Gross Revenue
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1714] tracking-tight">
                  ${stats.revenue.toLocaleString()}
                </div>
                <p className="text-xs font-sans font-medium text-emerald-800 mt-1">
                  +${stats.profit.toLocaleString()} Estimated Gross Profit
                </p>

                <div className="my-6 pt-5 border-t border-[#EAE5DE] space-y-3 text-xs font-sans">
                  <div className="flex justify-between items-center text-stone-600">
                    <span>Estimated Acquisitions:</span>
                    <strong className="font-serif text-sm font-medium text-[#1C1714]">{stats.conversions.toLocaleString()}</strong>
                  </div>

                  <div className="flex justify-between items-center text-stone-600">
                    <span>Effective Target CAC:</span>
                    <strong className="font-serif text-sm font-medium text-stone-800">${stats.cac}</strong>
                  </div>

                  <div className="flex justify-between items-center text-stone-600">
                    <span>Estimated Marketing Margin:</span>
                    <strong className="font-serif text-sm font-medium text-emerald-800">~{Math.round(((stats.profit) / stats.revenue) * 100)}%</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-sans font-medium text-xs tracking-wider uppercase text-center transition flex items-center justify-center gap-2"
                >
                  <span>Model With Our Team</span>
                  <FaArrowRight className="text-[9px]" />
                </a>

                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-white hover:bg-stone-50 border border-[#EAE5DE] text-stone-700 hover:text-[#965E3A] text-xs font-sans font-medium text-center transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-emerald-700" /> Discuss Parameters
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
