import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaEye, FaFilePdf, FaLocationDot } from "react-icons/fa6";

export default function Resume() {
  return (
    <section className="py-20 bg-slate-100/40 dark:bg-slate-900 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30 border border-slate-200 dark:border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-slate-200/60 dark:shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-2xl mx-auto mb-6 shadow-md">
            <FaFilePdf />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Looking for the Full Resume?
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Get an in-depth look at campaign case metrics, technical tools breakdown, and career milestones.
          </p>

          {/* Quick Snapshot Badges */}
          <div className="flex flex-wrap justify-center gap-4 my-8 text-xs text-slate-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
              <FaGraduationCap className="text-purple-600 dark:text-purple-400 text-sm" />
              <span>B.Sc — Veer Bahadur Singh Purvanchal University</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
              <FaLocationDot className="text-pink-600 dark:text-pink-400 text-sm" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-full font-bold text-sm text-white shadow-xl shadow-purple-500/25 flex items-center gap-2"
            >
              <FaDownload className="text-xs" /> Download CV (PDF)
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-white rounded-full font-bold text-sm flex items-center gap-2 transition"
            >
              <FaEye className="text-xs" /> View Online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
