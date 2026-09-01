import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Creative Vault", href: "#projects" },
    { name: "Campaign Proof", href: "#case-studies" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white/70 backdrop-blur-xs py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
            SZ
          </div>
          <span className="text-base font-extrabold text-slate-900 tracking-tight">
            SHAJER ZAIDI
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-purple-600 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/917860704583"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-100 transition"
          >
            <FaWhatsapp className="text-sm text-emerald-600" /> WhatsApp
          </a>

          <a
            href="#contact"
            className="px-5 py-2 bg-purple-600 text-white rounded-full font-bold text-xs hover:bg-purple-700 transition duration-200 shadow-xs"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/917860704583"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-sm active:scale-95 transition"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp />
          </a>

          <button
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-base active:scale-95 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-white border-l border-slate-200 shadow-2xl z-50 flex flex-col p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                    SZ
                  </div>
                  <span className="font-extrabold text-slate-900 text-sm">Shajer Zaidi</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 text-slate-400 hover:text-slate-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-800 hover:text-purple-600 font-bold text-base py-2 px-3 rounded-xl hover:bg-slate-50 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                <a
                  href="https://wa.me/917860704583"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <FaWhatsapp className="text-base text-emerald-600" /> Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-xs text-center block shadow-md shadow-purple-500/20"
                >
                  Hire Me / Get In Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
