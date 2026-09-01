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
  FaEye
} from "react-icons/fa6";
import { videoProjects, creativeProjects, DRIVE_MAIN_URL } from "../data/workData";

// Helper function to format embed URLs for YouTube, Instagram Reels, Google Drive, and Direct MP4s
function getEmbedUrl(url) {
  if (!url) return "";
  
  // Google Drive file link -> embed preview
  if (url.includes("drive.google.com/file/d/")) {
    const fileId = url.split("/file/d/")[1].split("/")[0].split("?")[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  // Google Drive folder link -> embedded folder grid
  if (url.includes("drive.google.com/drive/folders/")) {
    const folderId = url.split("/folders/")[1].split("?")[0];
    return `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
  }
  
  // Instagram Reel / Post
  if (url.includes("instagram.com")) {
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed/captioned/`;
  }
  
  // YouTube watch link -> embed
  if (url.includes("youtube.com/watch")) {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } catch {
      // fallback
    }
  }
  
  // YouTube short url (youtu.be) -> embed
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  // YouTube shorts -> embed
  if (url.includes("youtube.com/shorts/")) {
    const videoId = url.split("youtube.com/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  
  return url;
}

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState("videos"); // "videos" | "creatives"
  const [selectedItem, setSelectedItem] = useState(null);

  const currentItems = activeTab === "videos" ? videoProjects : creativeProjects;

  return (
    <section id="projects" className="py-20 bg-slate-50/80 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 mb-3">
            Portfolio & Creative Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Videos & Graphic Creatives
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Click any card to play the video or view the high-resolution ad design.
          </p>
        </div>

        {/* The Two Main Category Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "videos"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaVideo className="text-xs" />
              <span>🎬 Video Reels ({videoProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("creatives")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "creatives"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
              }`}
            >
              <FaPalette className="text-xs" />
              <span>🎨 Graphic Creatives & Photos ({creativeProjects.length})</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Image Thumbnail or Video Box */}
                {activeTab === "creatives" && item.image ? (
                  <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100 p-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
                      {item.format}
                    </div>
                  </div>
                ) : (
                  <div className={`relative h-48 bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between border-b border-slate-100`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 bg-white/95 rounded-full text-[11px] font-bold text-slate-800 shadow-xs border border-slate-200/60 flex items-center gap-1">
                        <FaVideo className="text-purple-600 text-[10px]" />
                        {item.format}
                      </span>
                      
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-md">
                        {item.tag}
                      </span>
                    </div>

                    {/* Center Play Icon */}
                    <div className="my-auto mx-auto z-10">
                      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-200">
                        <FaPlay className="ml-1 text-xs" />
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 z-10">
                      <span className="bg-white/90 px-2.5 py-0.5 rounded-md text-emerald-700 border border-emerald-200 flex items-center gap-1 text-[11px]">
                        <FaChartLine className="text-[10px]" /> {item.metrics}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5">
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
                <span>{activeTab === "videos" ? "▶ Play Video Reel" : "🔍 View Creative"}</span>
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dedicated Google Drive Creative Vault Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-left">
            <div className="w-13 h-13 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl text-purple-600 shrink-0">
              <FaFolderOpen />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Looking for all raw video exports & creative folders?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Browse the complete cloud folder with original MP4 reels, ad variations, and design assets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={DRIVE_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap"
            >
              <FaFolderOpen className="text-xs" />
              <span>Open Google Drive Folder</span>
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Modal for Playing Videos & Viewing Creatives */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 text-left border border-slate-200"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center text-sm transition z-20"
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
              <p className="text-xs text-slate-500 mb-5">
                Category: <strong className="text-purple-600">{activeTab === "videos" ? "Video Reels & Motion Ads" : "Graphic Creatives & Ad Banners"}</strong>
              </p>

              {/* LIVE PLAYABLE MEDIA AREA */}
              <div className="w-full aspect-video sm:aspect-video bg-slate-950 rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-inner flex items-center justify-center relative">
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
                  /* Embed Video Player (YouTube, Instagram, or Google Drive) */
                  <iframe
                    src={getEmbedUrl(selectedItem.videoUrl)}
                    title={selectedItem.title}
                    className="w-full h-full"
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
                  <span className="font-bold text-slate-900 block mb-2">Key Highlights & Execution:</span>
                  <ul className="space-y-1 text-slate-600">
                    {selectedItem.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100 flex-wrap gap-3">
                  <a
                    href={selectedItem.driveUrl || DRIVE_MAIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-purple-600 font-bold flex items-center gap-1.5"
                  >
                    <FaFolderOpen className="text-purple-600" /> Open in Google Drive Folder ↗
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-bold transition shadow-xs"
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
