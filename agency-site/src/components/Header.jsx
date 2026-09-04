import { useState, useEffect } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaBars, 
  FaXmark, 
  FaArrowRight,
  FaFilePdf
} from "react-icons/fa6";
import { AGENCY_INFO } from "../data/agencyData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Practice Areas", href: "#services" },
    { label: "Selected Works", href: "#case-studies" },
    { label: "ROAS Modeler", href: "#calculator" },
    { label: "Film & Creatives", href: "#creatives" },
    { label: "Methodology", href: "#methodology" },
    { label: "Perspectives", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Editorial Utility Bar */}
      <div className="bg-[#FAF8F5] border-b border-[#EAE5DE] text-[11px] text-stone-600 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium tracking-wide text-stone-800">
              <span className="w-1.5 h-1.5 rounded-full bg-[#965E3A]" />
              Private Performance Advisory & Creative Production
            </span>
            <span className="text-stone-300">•</span>
            <a href={`tel:${AGENCY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#965E3A] transition font-medium">
              <FaPhone className="text-[10px] text-[#965E3A]" />
              {AGENCY_INFO.displayPhone}
            </a>
            <span className="text-stone-300">•</span>
            <a href={`mailto:${AGENCY_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#965E3A] transition font-medium">
              <FaEnvelope className="text-[10px] text-[#965E3A]" />
              {AGENCY_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={AGENCY_INFO.deckUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium"
            >
              <FaFilePdf className="text-[#965E3A] text-xs" />
              Dossier & Pitch Deck (PDF)
            </a>
            <span className="text-stone-300">•</span>
            <a 
              href={AGENCY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-700 hover:text-[#965E3A] transition font-medium"
            >
              <FaWhatsapp className="text-xs text-emerald-700" />
              Direct Liaison
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navigation */}
      <nav 
        className={`px-4 sm:px-8 transition-all duration-300 ${
          scrolled 
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DE] py-4 shadow-sm" 
            : "bg-[#FAF8F5]/80 backdrop-blur-sm py-5 border-b border-[#EAE5DE]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Editorial Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#1C1714] text-[#FAF8F5] flex items-center justify-center font-serif text-sm italic font-medium">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1C1714]">
                  Shajer Zaidi
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-widest text-[#965E3A] uppercase px-2 py-0.5 rounded-full bg-[#965E3A]/10 border border-[#965E3A]/20">
                  Advisory
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wider text-stone-700 uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-[#965E3A] transition py-1 text-stone-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-medium text-xs tracking-wider transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <span>Schedule Audit</span>
              <FaArrowRight className="text-[9px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#EAE5DE] text-stone-800 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-2xl bg-white border border-[#EAE5DE] shadow-xl">
            <div className="flex flex-col gap-3 text-xs font-medium text-stone-800 uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#965E3A] transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-[#1C1714] text-white font-medium text-xs tracking-wider uppercase"
                >
                  Schedule Audit
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
