import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaXmark, 
  FaChartLine, 
  FaVideo, 
  FaArrowUpRightFromSquare,
  FaFolderOpen
} from "react-icons/fa6";
import { projectsData, categories, googleDriveVaultUrl } from "../data/projectsData";

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
      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      // fallback
    }
  }
  
  // YouTube short url (youtu.be) -> embed
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // YouTube shorts -> embed
  if (url.includes("youtube.com/shorts/")) {
    const videoId = url.split("youtube.com/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return url;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-slate-50/80 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 mb-3">
            Portfolio & Reels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Creative & Campaign Work
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Curated selection of short-form video reels, Meta ad creatives, and high-intent PPC campaigns.
          </p>
        </div>

        {/* Clean Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-purple-600 text-white shadow-sm scale-105"
                  : "bg-white text-slate-600 hover:text-purple-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Play Area */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between border-b border-slate-100`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 bg-white/95 rounded-full text-xs font-bold text-slate-800 shadow-xs border border-slate-200/60 flex items-center gap-1.5">
                      <FaVideo className="text-purple-600 text-xs" />
                      {project.platform}
                    </span>
                    
                    {project.isNew && (
                      <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-black uppercase rounded-md shadow-xs">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Play Button Icon */}
                  <div className="my-auto mx-auto z-10">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-200">
                      <FaPlay className="ml-1 text-xs" />
                    </div>
                  </div>

                  {/* Bottom Stats Badge */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 z-10">
                    <span className="bg-white/90 px-2.5 py-1 rounded-md text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <FaChartLine className="text-[10px]" /> {project.metrics}
                    </span>
                    <span className="text-slate-600 bg-white/80 px-2 py-0.5 rounded text-[11px]">
                      {project.clientNiche}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium border border-slate-200/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600 group-hover:text-purple-700">
                <span>View Project & Video</span>
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Clean Google Drive Folder Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-xl text-purple-600 shrink-0">
              <FaFolderOpen />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Shajer's Google Drive Creative Vault
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct access to all raw video exports, client reel edits, and campaign assets.
              </p>
            </div>
          </div>

          <a
            href={googleDriveVaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-full flex items-center gap-2 shadow-sm transition whitespace-nowrap"
          >
            <span>Open Google Drive Folder</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>
        </div>

      </div>

      {/* Video & Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 md:p-8 text-left border border-slate-200"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center text-sm transition"
              >
                <FaXmark />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
                  {selectedProject.platform}
                </span>
                <span className="px-3 py-0.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                  {selectedProject.metrics}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Client / Niche: <strong className="text-purple-600">{selectedProject.clientNiche}</strong>
              </p>

              {/* Video Embed */}
              <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-inner">
                {selectedProject.videoUrl?.endsWith(".mp4") ? (
                  <video src={selectedProject.videoUrl} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                  <iframe
                    src={getEmbedUrl(selectedProject.videoUrl)}
                    title={selectedProject.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Strategy Details */}
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="text-slate-600 leading-relaxed">
                  {selectedProject.summary}
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-2">Key Highlights:</span>
                  <ul className="space-y-1 text-slate-600">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-purple-600 font-semibold flex items-center gap-1"
                  >
                    <FaArrowUpRightFromSquare className="text-[10px]" /> View in New Tab
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-bold transition shadow-xs"
                  >
                    Discuss Similar Campaign
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
