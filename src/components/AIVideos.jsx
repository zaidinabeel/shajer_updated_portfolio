import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const videos = [
  {
    title: "AI Real Estate Ad Creative",
    platform: "Instagram Reels",
    tool: "Runway + CapCut",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "AI Fitness Promo Reel",
    platform: "YouTube Shorts",
    tool: "Pika + CapCut",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Product Story AI Video",
    platform: "Instagram Reels",
    tool: "Runway ML",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "AI Marketing Promo",
    platform: "YouTube Shorts",
    tool: "CapCut AI",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
];

export default function AIVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderCard = (video, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setActiveVideo(video.video)}
    >
      <div className="relative h-52 flex items-center justify-center bg-slate-900">

        {/* Play Button */}
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
          ▶
        </div>

      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">
          {video.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Platform: {video.platform}
        </p>

        <p className="text-purple-400 text-sm">
          Tool: {video.tool}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-900 px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        AI Video & Creative Portfolio
      </motion.h2>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video, i) => renderCard(video, i))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden max-w-sm mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          className="pb-12"
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i}>
              {renderCard(video, i)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              src={activeVideo}
              className="w-full h-full rounded-xl"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}