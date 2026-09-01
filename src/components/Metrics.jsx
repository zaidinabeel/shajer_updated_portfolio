import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChartLine, FaMousePointer, FaDollarSign, FaUsers } from "react-icons/fa";
import MobileCarousel from "./MobileCarousel";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const metrics = [
    {
      value: 28,
      suffix: "%",
      label: "Instagram Growth",
      icon: <FaUsers />,
      accent: "text-purple-600 dark:text-purple-400",
      bgAccent: "bg-purple-100 dark:bg-purple-500/20"
    },
    {
      value: 30,
      suffix: "%",
      label: "Search CTR Boost",
      icon: <FaMousePointer />,
      accent: "text-blue-600 dark:text-blue-400",
      bgAccent: "bg-blue-100 dark:bg-blue-500/20"
    },
    {
      value: 18,
      suffix: "%",
      label: "CPC Reduction",
      icon: <FaDollarSign />,
      accent: "text-emerald-600 dark:text-emerald-400",
      bgAccent: "bg-emerald-100 dark:bg-emerald-500/20"
    },
    {
      value: 35,
      suffix: "%",
      label: "Lead Volume Growth",
      icon: <FaChartLine />,
      accent: "text-pink-600 dark:text-pink-400",
      bgAccent: "bg-pink-100 dark:bg-pink-500/20"
    },
  ];

  const renderCard = (item) => (
    <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/80 dark:border-purple-500/20 shadow-xl shadow-slate-200/40 dark:shadow-purple-950/20 text-center hover:border-purple-400 transition-all duration-300">
      <div className={`w-14 h-14 mx-auto rounded-2xl ${item.bgAccent} ${item.accent} mb-4 flex items-center justify-center text-2xl shadow-sm`}>
        {item.icon}
      </div>

      <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
        <Counter target={item.value} suffix={item.suffix} />
      </h3>

      <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-gray-300">{item.label}</p>
    </div>
  );

  return (
    <section className="py-20 bg-slate-100/60 dark:bg-slate-900/50 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          Performance Highlights
        </motion.h2>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {renderCard(item)}
            </motion.div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden max-w-md mx-auto">
          <MobileCarousel effectType="fade">
            {metrics.map((item, i) => (
              <div key={i} className="w-full">
                {renderCard(item)}
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
