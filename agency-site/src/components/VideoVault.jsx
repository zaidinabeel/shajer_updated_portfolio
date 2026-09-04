import { useState } from "react";
import { 
  FaPlay, 
  FaXmark, 
  FaGoogleDrive,
  FaImage,
  FaVideo
} from "react-icons/fa6";
import { VIDEO_SHOWCASE, CREATIVE_ADS, AGENCY_INFO } from "../data/agencyData";

export default function VideoVault() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [vaultTab, setVaultTab] = useState("videos");

  return (
    <section id="creatives" className="py-24 px-4 sm:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#EAE5DE] gap-6">
          <div>
            <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
              Creative Production
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
              Vertical Film & High-Converting <span className="italic">Visual Artifacts</span>
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-1 bg-[#F5EFEB] p-1.5 rounded-full border border-[#EAE5DE] shrink-0">
            <button
              onClick={() => setVaultTab("videos")}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition flex items-center gap-2 cursor-pointer ${
                vaultTab === "videos" 
                  ? "bg-[#1C1714] text-[#FAF8F5] shadow-xs" 
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <FaVideo className="text-[10px]" /> Vertical Motion Reels
            </button>
            <button
              onClick={() => setVaultTab("creatives")}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition flex items-center gap-2 cursor-pointer ${
                vaultTab === "creatives" 
                  ? "bg-[#1C1714] text-[#FAF8F5] shadow-xs" 
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <FaImage className="text-[10px]" /> Static Ad Formats
            </button>
          </div>
        </div>

        {/* VIDEOS TAB */}
        {vaultTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEO_SHOWCASE.map((vid) => (
              <div 
                key={vid.id}
                className="rounded-3xl bg-white border border-[#EAE5DE] hover:border-[#965E3A]/50 p-5 flex flex-col justify-between shadow-maison transition group"
              >
                <div>
                  {/* Thumbnail / Player Box */}
                  <div 
                    onClick={() => setActiveVideo(vid)}
                    className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-stone-950 mb-4 cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    
                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#1C1714] flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                        <FaPlay className="ml-0.5 text-xs" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20">
                        {vid.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <div className="text-[10px] font-mono text-white/90">
                        {vid.stats}
                      </div>
                      <div className="font-serif text-sm font-medium text-white line-clamp-1 mt-0.5">
                        {vid.title}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#965E3A] block mb-1">
                    {vid.niche}
                  </span>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-sans font-normal">
                    {vid.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE5DE] flex items-center justify-between text-xs font-sans">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="font-medium text-stone-800 hover:text-[#965E3A] flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <FaPlay className="text-[9px]" /> Preview Reel
                  </button>

                  <a
                    href={vid.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-stone-500 hover:text-stone-800 flex items-center gap-1 transition"
                  >
                    <FaGoogleDrive className="text-stone-400" /> Raw Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CREATIVES TAB */}
        {vaultTab === "creatives" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREATIVE_ADS.map((ad) => (
              <div
                key={ad.id}
                className="rounded-3xl bg-white border border-[#EAE5DE] hover:border-[#965E3A]/50 p-5 flex flex-col justify-between shadow-maison transition group"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-[#EAE5DE] mb-4">
                    <img 
                      src={ad.image} 
                      alt={ad.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20">
                        {ad.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#965E3A] block mb-1">
                    {ad.format}
                  </span>
                  <h4 className="font-serif text-sm font-medium text-[#1C1714] line-clamp-1">
                    {ad.title}
                  </h4>
                  <div className="text-[11px] font-mono text-stone-600 mt-0.5">
                    {ad.metrics}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE5DE]">
                  <a
                    href={AGENCY_INFO.creativesVaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-full bg-[#FAF8F5] hover:bg-stone-200 text-stone-700 text-xs font-sans font-medium transition flex items-center justify-center gap-1.5 border border-[#EAE5DE]"
                  >
                    <FaGoogleDrive className="text-stone-500 text-xs" /> Inspect High-Res Asset
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1714]/80 backdrop-blur-md p-4 animate-in fade-in">
          <div className="relative w-full max-w-sm bg-white border border-[#EAE5DE] rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE5DE]">
              <div>
                <h3 className="font-serif text-sm font-medium text-[#1C1714]">{activeVideo.title}</h3>
                <span className="text-[10px] text-stone-500 font-mono">{activeVideo.stats}</span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EAE5DE] text-stone-700 hover:text-black flex items-center justify-center transition cursor-pointer"
              >
                <FaXmark className="text-xs" />
              </button>
            </div>

            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black max-h-[65vh]">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="mt-4 flex items-center justify-between font-sans">
              <a
                href={activeVideo.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-600 hover:text-black flex items-center gap-1.5 transition"
              >
                <FaGoogleDrive className="text-stone-500" /> Direct Drive Link
              </a>

              <a
                href="#contact"
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 rounded-full bg-[#1C1714] text-[#FAF8F5] font-medium text-xs uppercase tracking-wider"
              >
                Commission Reel
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
