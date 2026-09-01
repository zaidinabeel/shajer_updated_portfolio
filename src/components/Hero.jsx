import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { FaArrowRight, FaVideo, FaDownload, FaWhatsapp, FaFolderOpen, FaChartLine, FaGoogleDrive } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 sm:w-[450px] h-72 sm:h-[450px] bg-purple-100/70 blur-[100px] -top-10 -left-10 rounded-full" />
        <div className="absolute w-72 sm:w-[450px] h-72 sm:h-[450px] bg-blue-100/60 blur-[100px] -bottom-10 -right-10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
        
        {/* LEFT COLUMN: Clean Pitch & CTAs (7 Cols) */}
        <div className="text-center lg:text-left lg:col-span-7 flex flex-col items-center lg:items-start">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[11px] sm:text-xs font-bold mb-4 sm:mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shrink-0" />
            <span>Digital Marketing & Reel Specialist</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            Turning <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Creative Reels</span> & Paid Ads into Real Revenue.
          </h1>

          <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-lg max-w-xl leading-relaxed font-normal">
            I help brands scale with <strong>Meta Ads</strong>, <strong>viral Instagram Reels</strong>, and <strong>Google PPC</strong> that lower acquisition costs and boost conversions.
          </p>

          {/* Action CTAs: Thumb-Friendly on Mobile */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-sm shadow-md shadow-purple-600/25 active:scale-95 transition flex items-center justify-center gap-2"
            >
              <FaFolderOpen className="text-xs" /> Explore Creative & Video Vault
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="https://wa.me/917860704583"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-2xl sm:rounded-full font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-sm text-emerald-600" /> WhatsApp Direct
            </a>

            <a
              href="https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-2xl sm:rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <FaGoogleDrive className="text-purple-600 text-xs" /> Campaign Deck (PDF)
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-3.5 py-3 text-slate-500 hover:text-purple-600 text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <FaDownload className="text-xs" /> Resume
            </a>
          </div>

          {/* Mobile-Optimized Metrics Row */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-6 w-full max-w-lg text-center sm:text-left">
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-slate-100 sm:border-0">
              <div className="text-xl sm:text-3xl font-black text-purple-700">+28%</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">IG Growth</div>
            </div>
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-slate-100 sm:border-0">
              <div className="text-xl sm:text-3xl font-black text-blue-700">-18%</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">Lower CPC</div>
            </div>
            <div className="bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-slate-100 sm:border-0">
              <div className="text-xl sm:text-3xl font-black text-emerald-700">+35%</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">Lead Growth</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Mobile Scaled Photo Card (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-88">
            
            {/* Soft decorative backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/50 via-pink-200/40 to-blue-200/50 blur-2xl rounded-3xl" />
            
            {/* Profile Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-lg p-2">
              <img
                src={profile}
                alt="Shajer Zaidi"
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="p-2.5 bg-slate-50 rounded-xl mt-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Shajer Zaidi</div>
                  <div className="text-[10px] text-slate-500 font-medium">Performance Marketer</div>
                </div>
                <div className="flex items-center gap-1 text-purple-700 text-[11px] font-bold bg-purple-100 px-2.5 py-0.5 rounded-lg">
                  <FaChartLine className="text-[9px]" /> Available
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
