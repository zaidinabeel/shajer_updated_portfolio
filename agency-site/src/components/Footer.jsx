import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaArrowUp,
  FaFilePdf
} from "react-icons/fa6";
import { AGENCY_INFO, AGENCY_SERVICES } from "../data/agencyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#14100D] border-t border-white/[0.06] pt-16 pb-12 px-4 sm:px-8 text-stone-400 text-xs relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#14100D] flex items-center justify-center font-serif text-sm italic font-semibold">
                S
              </div>
              <span className="font-serif text-lg font-medium tracking-tight text-[#FAF8F5]">
                Shajer Zaidi <span className="font-sans text-xs font-light text-stone-400">Advisory</span>
              </span>
            </a>

            <p className="text-xs text-stone-400 leading-relaxed max-w-xs font-sans font-normal">
              Private performance marketing advisory, algorithmic Meta Advantage+ scaling, Google PPC, and cinematic vertical video production.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={AGENCY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-stone-400 hover:text-white transition"
              >
                <FaLinkedin className="text-xs" />
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-stone-400 hover:text-emerald-400 transition"
              >
                <FaWhatsapp className="text-xs" />
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-stone-400 hover:text-[#965E3A] transition"
              >
                <FaEnvelope className="text-xs" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Practices
            </h4>
            <ul className="space-y-2 text-stone-400 font-sans font-normal">
              {AGENCY_SERVICES.map(s => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof & Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Selected Works
            </h4>
            <ul className="space-y-2 text-stone-400 font-sans font-normal">
              <li>
                <a href="#case-studies" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition">
                  ROAS Modeler
                </a>
              </li>
              <li>
                <a href="#creatives" className="hover:text-white transition">
                  Film & Creative Vault
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition">
                  Operating Architecture
                </a>
              </li>
              <li>
                <a 
                  href={AGENCY_INFO.deckUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#965E3A] transition flex items-center gap-1.5"
                >
                  <FaFilePdf className="text-[#965E3A] text-xs" /> Complete Dossier
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Advisory Lines
            </h4>
            <div className="space-y-2 text-stone-400 font-sans font-normal">
              <div className="flex items-start gap-2">
                <FaLocationDot className="text-[#965E3A] mt-0.5 shrink-0 text-xs" />
                <span>{AGENCY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-stone-500 text-xs shrink-0" />
                <a href={`tel:${AGENCY_INFO.phone}`} className="hover:text-white">
                  {AGENCY_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-stone-500 text-xs shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-sans">
          <div>
            © {new Date().getFullYear()} Shajer Zaidi Advisory. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition">Confidentiality Terms</a>
            <a href="#" className="hover:text-stone-300 transition">Advisory Engagement</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition cursor-pointer"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-[9px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
