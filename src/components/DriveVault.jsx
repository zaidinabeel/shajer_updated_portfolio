import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaVideo, 
  FaImage, 
  FaFolderOpen, 
  FaArrowUpRightFromSquare,
  FaGoogleDrive,
  FaExpand,
  FaXmark,
  FaLock,
  FaRotateRight,
  FaCircleCheck,
  FaShieldHalved,
  FaChevronRight
} from "react-icons/fa6";

const DRIVE_CONFIG = {
  photos: {
    id: "1r2iFH3voXZsdttXtB-fvNkUdz-lQ7E0r",
    title: "Graphic Creatives & Ad Banners",
    badge: "🎨 Graphic Creatives",
    urlSlug: "shajerzaidi.com/vault/graphic-creatives",
    folderName: "Graphic Creatives & Ad Banners",
    tagline: "High-converting Meta ad banners, Canva posters, and social media carousels.",
    folderUrl: "https://drive.google.com/drive/folders/1r2iFH3voXZsdttXtB-fvNkUdz-lQ7E0r",
    highlights: ["Ad Banners & Meta Creatives", "Carousel Post Designs", "High-Resolution Exports"]
  },
  videos: {
    id: "1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    title: "Video Reels & Motion Creatives",
    badge: "🎬 Video Reels",
    urlSlug: "shajerzaidi.com/vault/video-reels",
    folderName: "Short-Form Video Reels & Motion Ads",
    tagline: "Short-form 9:16 vertical reels, ad hooks, and raw video edits.",
    folderUrl: "https://drive.google.com/drive/folders/1GwJ34HSntsZQ8dAgtDjGczbUHUvgrfm-",
    highlights: ["9:16 Instagram Reels & Shorts", "CapCut & Filmora Video Edits", "Paid Social Video Ads"]
  }
};

export default function DriveVault() {
  const [activeTab, setActiveTab] = useState("photos"); // "photos" | "videos"
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const current = DRIVE_CONFIG[activeTab];
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${current.id}#grid`;

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-50 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Ambient background glow mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-pink-100/30 to-blue-200/40 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/90 border border-purple-200/80 text-purple-700 shadow-sm mb-3.5 backdrop-blur-xs">
            <FaGoogleDrive className="text-purple-600 text-sm" />
            <span>Interactive Google Drive Vault</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore My Live Creative Vault
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg leading-relaxed">
            Browse high-resolution graphic designs, ad banners, and short-form video reels directly synced with my cloud storage.
          </p>
        </div>

        {/* Category Switcher Tabs (Centered & Modern) */}
        <div className="flex justify-center mb-10 w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-md flex w-full gap-1.5 items-center justify-center">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 scale-[1.02]"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaImage className="text-xs" />
              <span>1. 📸 Graphic Creatives</span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 scale-[1.02]"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaVideo className="text-xs" />
              <span>2. 🎬 Video Reels</span>
            </button>
          </div>
        </div>

        {/* MAC STUDIO DISPLAY DEVICE MOCKUP FRAME */}
        <div className="w-full relative group">
          
          {/* Soft backglow around device */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-blue-500/20 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

          {/* Main Device Chassis */}
          <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col">
            
            {/* Mac Titlebar (Top Header) */}
            <div className="bg-slate-100/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-slate-200/80 flex items-center justify-between gap-4">
              
              {/* Traffic Light Window Dots */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsFullscreen(false)}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:opacity-80 transition cursor-pointer" 
                  title="Close"
                />
                <button 
                  className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:opacity-80 transition cursor-pointer" 
                  title="Minimize"
                />
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:opacity-80 transition cursor-pointer" 
                  title="Toggle Fullscreen"
                />
              </div>

              {/* Centered Professional Browser Address Bar */}
              <div className="flex-1 max-w-md mx-auto bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 font-medium flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-1.5 truncate">
                  <FaLock className="text-emerald-600 text-[10px] shrink-0" />
                  <span className="text-slate-400 select-none text-[11px]">https://</span>
                  <span className="text-slate-800 font-bold text-xs truncate">{current.urlSlug}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-700">Live SSL</span>
                </div>
              </div>

              {/* Right Action Icons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-white transition"
                  title="Refresh Cloud Storage"
                  aria-label="Refresh view"
                >
                  <FaRotateRight className="text-xs" />
                </button>

                <button
                  onClick={() => setIsFullscreen(true)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-white transition"
                  title="Expand Fullscreen"
                  aria-label="Expand Fullscreen"
                >
                  <FaExpand className="text-xs" />
                </button>
              </div>

            </div>

            {/* Sub-Header Breadcrumb & Quick Sync Status */}
            <div className="bg-slate-50/90 px-4 sm:px-6 py-2.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-500 truncate text-xs">
                <FaGoogleDrive className="text-purple-600 text-sm shrink-0" />
                <span className="font-medium text-slate-500">My Drive</span>
                <FaChevronRight className="text-[9px] text-slate-400" />
                <span className="font-medium text-slate-500">Shajer Zaidi</span>
                <FaChevronRight className="text-[9px] text-slate-400" />
                <span className="font-bold text-slate-800 truncate">{current.folderName}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FaCircleCheck className="text-[10px]" /> Auto-Synced Live
                </span>

                <a
                  href={current.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] rounded-full flex items-center gap-1.5 shadow-xs transition"
                >
                  <span>Open in Drive</span>
                  <FaArrowUpRightFromSquare className="text-[9px]" />
                </a>
              </div>
            </div>

            {/* EMBEDDED GOOGLE DRIVE BROWSER (Smooth & Scrollable) */}
            <div 
              className="relative w-full h-[480px] sm:h-[620px] bg-white overflow-y-auto overflow-x-auto flex items-center justify-center"
              style={{ 
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-y pan-x"
              }}
            >
              <iframe
                key={`${activeTab}-${refreshKey}`}
                src={embedUrl}
                title={current.title}
                className="w-full h-full min-h-[480px] sm:min-h-[620px] border-0"
                scrolling="yes"
                allow="autoplay; fullscreen"
                style={{
                  WebkitOverflowScrolling: "touch",
                  width: "100%",
                  height: "100%"
                }}
              />
            </div>

            {/* Device Bottom Status Bar */}
            <div className="bg-slate-50/90 px-4 sm:px-6 py-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <FaShieldHalved className="text-purple-600 text-xs" />
                <span className="text-[11px] sm:text-xs font-medium">
                  Direct live access to Shajer's Google Drive creative repository.
                </span>
              </div>

              <a
                href={current.folderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-bold text-xs flex items-center gap-1"
              >
                <span>Launch in Google Drive App</span>
                <FaArrowUpRightFromSquare className="text-[9px]" />
              </a>
            </div>

          </div>

          {/* Realistic Display Stand Base Shadow */}
          <div className="w-2/3 h-3 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent mx-auto blur-xs mt-1 rounded-full pointer-events-none" />
        </div>

      </div>

      {/* Fullscreen Immersive Modal View */}
      <AnimatePresence>
        {isFullscreen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center text-sm">
                    <FaGoogleDrive />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {current.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-medium">Fullscreen Cloud Viewer</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={current.folderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-xs flex items-center gap-1.5 transition"
                  >
                    <span>Open Drive App</span>
                    <FaArrowUpRightFromSquare className="text-[9px]" />
                  </a>
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 text-sm transition"
                    aria-label="Close fullscreen"
                  >
                    <FaXmark />
                  </button>
                </div>
              </div>

              <div 
                className="flex-1 w-full rounded-2xl overflow-y-auto overflow-x-auto border border-slate-200 bg-white"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <iframe
                  src={embedUrl}
                  title={current.title}
                  className="w-full h-full border-0"
                  scrolling="yes"
                  allow="autoplay; fullscreen"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
