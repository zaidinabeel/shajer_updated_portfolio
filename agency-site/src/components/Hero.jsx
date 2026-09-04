import { 
  FaArrowRight, 
  FaWhatsapp, 
  FaChartLine, 
  FaCircleCheck, 
  FaFilePdf
} from "react-icons/fa6";
import { AGENCY_INFO } from "../data/agencyData";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-24 px-4 sm:px-8 bg-[#FAF8F5] overflow-hidden">
      
      {/* Subtle Warm Atmospheric Light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#965E3A]/[0.04] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[#965E3A]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Editorial Pitch (7 Cols) */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Subtle Category Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE5DE] text-xs font-sans font-medium text-stone-700 mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#965E3A]" />
            <span>Private Performance Advisory & Creative Production</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-normal tracking-tight text-[#1C1714] leading-[1.12]">
            Data-Driven Media Acquisition & <span className="italic font-normal text-[#965E3A]">Cinematic Storytelling</span> for Discerning Brands.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-stone-600 text-base sm:text-lg max-w-xl font-sans font-normal leading-relaxed">
            We architect full-funnel customer acquisition for high-growth DTC companies, luxury real estate developers, and enterprise B2B consultancies. Merging <strong>algorithmic paid media</strong> with <strong>high-retention vertical reels</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto items-stretch sm:items-center">
            <a
              href="#contact"
              className="px-7 py-4 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <span>Schedule Diagnostic Audit</span>
              <FaArrowRight className="text-[10px]" />
            </a>

            <a
              href="#case-studies"
              className="px-6 py-4 rounded-full bg-white hover:bg-[#F3EDE6] border border-[#EAE5DE] text-stone-800 font-sans font-medium text-xs tracking-wider uppercase transition flex items-center justify-center gap-2"
            >
              <FaChartLine className="text-[#965E3A] text-xs" />
              <span>Review Case Studies</span>
            </a>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 rounded-full bg-white hover:bg-[#F3EDE6] border border-[#EAE5DE] text-stone-800 hover:text-emerald-700 font-sans font-medium text-xs transition flex items-center justify-center gap-2"
              title="Private WhatsApp Line"
            >
              <FaWhatsapp className="text-emerald-700 text-sm" />
              <span className="sm:hidden lg:inline font-sans text-xs">Direct Line</span>
            </a>
          </div>

          {/* Typographic Metrics Strip */}
          <div className="mt-12 pt-8 border-t border-[#EAE5DE] grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg text-center sm:text-left">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1714] tracking-tight">4.2x</div>
              <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-stone-500 mt-1">Average ROAS</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#965E3A] tracking-tight">-32%</div>
              <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-stone-500 mt-1">Cost-Per-Lead</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1714] tracking-tight">+35%</div>
              <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-stone-500 mt-1">Acquisition Lift</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Bespoke Dossier Ledger (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-md">
            
            {/* Soft Shadow Base */}
            <div className="rounded-3xl bg-white border border-[#EAE5DE] p-7 shadow-maison">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EAE5DE]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#EAE5DE] bg-stone-100 p-0.5">
                    <img src={profileImg} alt="Shajer Zaidi" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-[#1C1714] flex items-center gap-1.5">
                      Shajer Zaidi
                      <FaCircleCheck className="text-[#965E3A] text-xs" />
                    </h3>
                    <p className="text-[11px] font-sans text-stone-500">Principal Growth Strategist & Producer</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Active Q3
                </span>
              </div>

              {/* Performance Docket Box */}
              <div className="mt-6 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE]">
                <div className="flex justify-between items-center text-xs text-stone-500 mb-3">
                  <span className="font-sans font-semibold uppercase tracking-wider text-[10px] text-stone-700">Account Portfolio Averages</span>
                  <span className="font-serif italic text-stone-500 text-xs">Audited Benchmarks</span>
                </div>

                {/* Progress Lines */}
                <div className="space-y-3.5 my-2">
                  <div>
                    <div className="flex justify-between text-xs font-sans font-medium mb-1.5 text-stone-700">
                      <span>Meta Advantage+ Scaled ROAS</span>
                      <span className="font-serif font-medium text-[#1C1714]">4.2x Sustained</span>
                    </div>
                    <div className="w-full bg-[#EAE5DE] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#965E3A] h-1.5 rounded-full w-[84%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans font-medium mb-1.5 text-stone-700">
                      <span>Google Search Intent CTR</span>
                      <span className="font-serif font-medium text-[#1C1714]">4.2% (+30% Lift)</span>
                    </div>
                    <div className="w-full bg-[#EAE5DE] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-stone-500 h-1.5 rounded-full w-[70%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans font-medium mb-1.5 text-stone-700">
                      <span>Video Reel 0-3s Hook Retention</span>
                      <span className="font-serif font-medium text-[#1C1714]">71.4% Rate</span>
                    </div>
                    <div className="w-full bg-[#EAE5DE] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-700 h-1.5 rounded-full w-[78%]" />
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 mt-3.5 flex items-center justify-between text-xs text-stone-500 border-t border-[#EAE5DE] font-sans">
                  <span>Ad Spend Managed: <strong className="text-stone-800 font-semibold">$1.2M+</strong></span>
                  <span>Average CPL: <strong className="text-stone-800 font-semibold">-32%</strong></span>
                </div>
              </div>

              {/* Minimal Badges */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE]">
                  <div className="text-[10px] font-sans font-semibold uppercase tracking-wider text-stone-500">Client Endorsement</div>
                  <div className="font-serif text-sm font-medium text-[#1C1714] mt-0.5">4.9 / 5.0 (50+ Brands)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE]">
                  <div className="text-[10px] font-sans font-semibold uppercase tracking-wider text-stone-500">Organic Video Reach</div>
                  <div className="font-serif text-sm font-medium text-[#1C1714] mt-0.5">10M+ Verified Views</div>
                </div>
              </div>

              {/* Dossier PDF Download */}
              <div className="mt-5 text-center">
                <a 
                  href={AGENCY_INFO.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-medium text-stone-600 hover:text-[#965E3A] transition"
                >
                  <FaFilePdf className="text-[#965E3A] text-xs" />
                  <span>Inspect Complete Agency Dossier (PDF)</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
