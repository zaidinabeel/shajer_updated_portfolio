import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaXmark, 
  FaChartLine, 
  FaVideo, 
  FaPalette,
  FaArrowUpRightFromSquare,
  FaFolderOpen,
  FaGoogleDrive
} from "react-icons/fa6";
import { videoProjects, creativeProjects, PHOTOS_DRIVE_URL, VIDEOS_DRIVE_URL } from "../data/workData";

// Helper function to format embed URLs for YouTube, Instagram Reels, Google Drive, and Direct MP4s
function getEmbedUrl(url) {
  if (!url) return "";
  
  if (url.includes("drive.google.com/file/d/")) {
    const fileId = url.split("/file/d/")[1].split("/")[0].split("?")[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  if (url.includes("instagram.com")) {
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed/captioned/`;
  }
  
  if (url.includes("youtube.com/watch")) {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } catch {
      // fallback
    }
  }
  
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  if (url.includes("youtube.com/shorts/")) {
    const videoId = url.split("youtube.com/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  
  return url;
}

export default function HybridShowcase() {
  const [activeTab, setActiveTab] = useState("videos"); // "videos" | "creatives"
  const [selectedItem, setSelectedItem] = useState(null);

  const currentItems = activeTab === "videos" ? videoProjects : creativeProjects;

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50/80 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 mb-3">
            ✨ Featured Portfolio & Media
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated Creative & Video Showcase
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base max-w-lg">
            Explore high-converting short-form video reels, ad banners, and campaign creatives crafted for real ROI.
          </p>
        </div>

        {/* Category Switcher Tabs (Centered) */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl sm:rounded-full border border-slate-200 shadow-xs flex flex-col sm:flex-row w-full sm:w-auto gap-1.5 items-center justify-center">
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 w-full sm:w-auto ${
                activeTab === "videos"
                  ? "bg-purple-600 text-white shadow-xs scale-102"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaVideo className="text-xs" />
              <span>🎬 Video Reels & Motion Ads ({videoProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("creatives")}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 w-full sm:w-auto ${
                activeTab === "creatives"
                  ? "bg-purple-600 text-white shadow-xs scale-102"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaPalette className="text-xs" />
              <span>🎨 Graphic Creatives & Photos ({creativeProjects.length})</span>
            </button>
          </div>
        </div>

        {/* Curated Visual Cards Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Thumbnail */}
                {activeTab === "creatives" && item.image ? (
                  <div className="relative h-52 bg-slate-100 overflow-hidden border-b border-slate-100 p-2.5 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-sm border border-slate-200/60">
                      {item.format}
                    </div>
                  </div>
                ) : (
                  <div className={`relative h-52 bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between border-b border-slate-100`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 bg-white/95 rounded-full text-[11px] font-bold text-slate-800 shadow-xs border border-slate-200/60 flex items-center gap-1">
                        <FaVideo className="text-purple-600 text-[10px]" />
                        {item.format}
                      </span>
                      
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-md">
                        {item.tag}
                      </span>
                    </div>

                    {/* Center Action Icon */}
                    <div className="my-auto mx-auto z-10">
                      <div className="w-13 h-13 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-200">
                        <FaPlay className="ml-1 text-sm" />
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 z-10">
                      <span className="bg-white/95 px-2.5 py-0.5 rounded-md text-emerald-700 border border-emerald-200 flex items-center gap-1 text-[11px] shadow-xs">
                        <FaChartLine className="text-[10px]" /> {item.metrics}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 text-left">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tools.map((tool, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium border border-slate-200/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600 group-hover:text-purple-700">
                <span>{activeTab === "videos" ? "▶ Play Video Reel" : "🔍 View Full Design"}</span>
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM TIER: Dedicated Google Drive Cloud Vault Access Hub */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl text-purple-600 shrink-0 shadow-xs">
              <FaGoogleDrive />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Looking for All Raw Video Exports & Creative Folders?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                Direct access to Shajer's live Google Drive cloud folders containing original MP4 files, client reel variations, and full-resolution graphics.
              </p>
            </div>
          </div>

          {/* Two Distinct Drive Folder Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={PHOTOS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-full flex items-center justify-center gap-2 transition active:scale-95 border border-slate-200"
            >
              <FaFolderOpen className="text-purple-600 text-xs" />
              <span>Open Photos Folder (Drive)</span>
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>

            <a
              href={VIDEOS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 shadow-sm shadow-purple-600/20 transition active:scale-95"
            >
              <FaFolderOpen className="text-xs" />
              <span>Open Videos Folder (Drive)</span>
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          </div>

        </div>

      </div>

      {/* Interactive Modal for Playing Videos & Full-Res Creative Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-5 sm:p-8 text-left border border-slate-200"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center text-sm transition z-20"
                aria-label="Close"
              >
                <FaXmark />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
                  {selectedItem.format}
                </span>
                <span className="px-3 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                  {selectedItem.metrics}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Category: <strong className="text-purple-600">{activeTab === "videos" ? "Video Reels & Motion Ads" : "Graphic Creatives & Ad Banners"}</strong>
              </p>

              {/* LIVE PLAYABLE MEDIA / LIGHTBOX AREA */}
              <div className="w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-inner flex items-center justify-center relative">
                {activeTab === "creatives" && selectedItem.image ? (
                  /* High-Res Graphic Creative Image */
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain bg-slate-900"
                  />
                ) : selectedItem.videoUrl?.endsWith(".mp4") ? (
                  /* Native MP4 Video Player */
                  <video
                    src={selectedItem.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : selectedItem.videoUrl ? (
                  /* Embed Video Player */
                  <iframe
                    src={getEmbedUrl(selectedItem.videoUrl)}
                    title={selectedItem.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="p-6 text-center text-white">
                    <FaVideo className="text-3xl text-purple-400 mx-auto mb-2" />
                    <p className="text-sm">Video file ready on Google Drive</p>
                  </div>
                )}
              </div>

              {/* Strategy Details */}
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-2">Key Strategy & Highlights:</span>
                  <ul className="space-y-1.5 text-slate-600">
                    {selectedItem.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-t border-slate-100 gap-3">
                  <a
                    href={selectedItem.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-purple-600 font-bold flex items-center justify-center gap-1.5 py-1"
                  >
                    <FaFolderOpen className="text-purple-600" /> Open Original File in Google Drive ↗
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-bold transition shadow-xs text-center"
                  >
                    Request Similar Work
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
