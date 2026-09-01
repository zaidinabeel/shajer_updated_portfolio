import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp, FaGoogleDrive } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 pb-24 md:pb-12 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-xs">
              SZ
            </div>
            <span className="font-extrabold text-base tracking-tight">
              SHAJER ZAIDI
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Digital Marketing & Short-Form Video Reels Specialist
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-slate-300">
          <a
            href="https://drive.google.com/file/d/1gdR0lXgKANFOEWKJiCxu4yOI-ZuP9brT/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 flex items-center gap-1.5 transition py-1 px-2"
          >
            <FaGoogleDrive className="text-purple-400" /> Campaign Deck (PDF)
          </a>
          <a
            href="mailto:shajerzaidi6@gmail.com"
            className="hover:text-purple-400 flex items-center gap-1.5 transition py-1 px-2"
          >
            <FaEnvelope className="text-purple-400" /> Email
          </a>
          <a
            href="tel:+917860704583"
            className="hover:text-purple-400 flex items-center gap-1.5 transition py-1 px-2"
          >
            <FaPhone className="text-blue-400" /> Call
          </a>
          <a
            href="https://wa.me/917860704583"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 flex items-center gap-1.5 transition py-1 px-2"
          >
            <FaWhatsapp className="text-emerald-400" /> WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/shajer-zaidi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center gap-1.5 transition py-1 px-2"
          >
            <FaLinkedin className="text-blue-400" /> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] sm:text-xs text-slate-500 text-center md:text-right">
          © {year} Shajer Zaidi. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
