import { motion } from "framer-motion";
import { FaGoogle, FaMeta, FaAward, FaCircleCheck } from "react-icons/fa6";
import { SiGoogleanalytics, SiHubspot } from "react-icons/si";

const certifications = [
  {
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta Blueprint",
    icon: <FaMeta className="text-blue-600 dark:text-blue-400 text-3xl" />,
    badgeColor: "from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20",
    borderColor: "border-blue-200 dark:border-blue-500/30",
    skills: ["Campaign Structure", "Audience Targeting", "Pixel & CAPI", "Advantage+ Ads"]
  },
  {
    title: "Google Ads Search & Display Certification",
    issuer: "Google Skillshop",
    icon: <FaGoogle className="text-amber-600 dark:text-amber-400 text-3xl" />,
    badgeColor: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20",
    borderColor: "border-amber-200 dark:border-amber-500/30",
    skills: ["Keyword Match Types", "Bid Strategies", "Quality Score", "Remarketing"]
  },
  {
    title: "Google Analytics 4 (GA4) Certification",
    issuer: "Google Skillshop",
    icon: <SiGoogleanalytics className="text-orange-600 dark:text-orange-400 text-3xl" />,
    badgeColor: "from-orange-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:to-yellow-500/20",
    borderColor: "border-orange-200 dark:border-orange-500/30",
    skills: ["Event Tracking", "Conversion Funnels", "Custom Reports", "Audience Attribution"]
  },
  {
    title: "Inbound & Social Media Marketing",
    issuer: "HubSpot Academy",
    icon: <SiHubspot className="text-rose-600 dark:text-rose-400 text-3xl" />,
    badgeColor: "from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20",
    borderColor: "border-rose-200 dark:border-rose-500/30",
    skills: ["Content Strategy", "Organic Engagement", "Lead Nurturing", "Brand Positioning"]
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-transparent px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 mb-4">
            <FaAward className="text-xs" /> Verified Credentials
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Professional Certifications
          </motion.h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm">
            Recognized industry standards across leading advertising networks and analytics platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-b ${cert.badgeColor} bg-white dark:bg-slate-900/80 p-6 rounded-3xl border ${cert.borderColor} shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-between`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 shadow-sm">
                  {cert.icon}
                </div>
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {cert.title}
                </h3>

                <ul className="mt-4 space-y-1.5 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  {cert.skills.map((skill, i) => (
                    <li key={i} className="text-xs text-slate-600 dark:text-gray-300 flex items-center gap-1.5">
                      <FaCircleCheck className="text-emerald-600 dark:text-emerald-400 text-[10px] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                <span>Verified Specialist</span>
                <span>✓ Active</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
