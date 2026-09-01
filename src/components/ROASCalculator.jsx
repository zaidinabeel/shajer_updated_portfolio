import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaArrowRight, FaShieldHalved, FaRocket } from "react-icons/fa6";

export default function ROASCalculator() {
  const [adSpend, setAdSpend] = useState(2500); // Monthly budget in $
  const [targetROAS, setTargetROAS] = useState(3.5); // Target ROAS multiplier (e.g. 3.5x)
  const [aov, setAov] = useState(65); // Average Order Value in $

  // Mathematical projections
  const projectedRevenue = Math.round(adSpend * targetROAS);
  const estimatedOrders = Math.round(projectedRevenue / (aov || 1));
  const maxCPA = Math.round((adSpend / (estimatedOrders || 1)) * 10) / 10;
  const estimatedGrossProfit = Math.round(projectedRevenue - adSpend);

  return (
    <section id="calculator" className="py-24 bg-transparent px-6 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 mb-4">
            <FaCalculator className="text-xs" /> Interactive Strategy Tool
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Ad Spend & ROAS Calculator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-slate-600 dark:text-gray-400 text-sm md:text-base"
          >
            Adjust your monthly paid marketing budget and target returns to estimate your projected revenue, profit, and maximum allowable acquisition cost.
          </motion.p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-purple-500/20 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl backdrop-blur-xl">
          
          {/* LEFT: Sliders & Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-gray-200">
                  Monthly Ad Spend Budget
                </label>
                <span className="text-lg font-extrabold text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-xl border border-purple-200 dark:border-purple-800/40">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="250"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600 dark:accent-purple-500 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-500 dark:text-gray-500 mt-2">
                <span>$500</span>
                <span>$15,000</span>
                <span>$30,000+</span>
              </div>
            </div>

            {/* Slider 2: Target ROAS Multiplier */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-gray-200">
                  Target ROAS (Return On Ad Spend)
                </label>
                <span className="text-lg font-extrabold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-xl border border-blue-200 dark:border-blue-800/40">
                  {targetROAS.toFixed(1)}x ROAS
                </span>
              </div>
              <input
                type="range"
                min="1.5"
                max="7.0"
                step="0.1"
                value={targetROAS}
                onChange={(e) => setTargetROAS(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-500 dark:text-gray-500 mt-2">
                <span>1.5x (Breakeven/Cold)</span>
                <span>3.5x (Target Avg)</span>
                <span>7.0x (Scale)</span>
              </div>
            </div>

            {/* Slider 3: Average Order Value / Lead Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-gray-200">
                  Average Order / Lead Value (AOV)
                </label>
                <span className="text-lg font-extrabold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800/40">
                  ${aov}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="500"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-500 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-500 dark:text-gray-500 mt-2">
                <span>$15</span>
                <span>$250</span>
                <span>$500+</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-gray-400 flex items-start gap-3">
              <FaShieldHalved className="text-purple-600 dark:text-purple-400 text-base shrink-0 mt-0.5" />
              <span>
                Based on historical performance benchmarks achieved across Meta Ads (Advantage+ funnels) and Google PPC campaigns.
              </span>
            </div>

          </div>

          {/* RIGHT: Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-purple-950/30 rounded-3xl p-6 md:p-8 border border-purple-200 dark:border-purple-500/30 flex flex-col justify-between shadow-xl">
            
            <div>
              <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                Estimated Monthly Projection
              </span>

              {/* Main Estimated Revenue */}
              <div className="mt-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-gray-400">Projected Monthly Revenue</span>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 mt-1">
                  ${projectedRevenue.toLocaleString()}
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-white dark:bg-slate-950/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Gross Return</span>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    +${estimatedGrossProfit.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-950/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Est. Conversions</span>
                  <div className="text-lg font-bold text-purple-700 dark:text-purple-300 mt-0.5">
                    ~{estimatedOrders.toLocaleString()} leads/orders
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-950/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 col-span-2 shadow-sm">
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Target Max CPA (Cost Per Acquisition)</span>
                  <div className="text-lg font-bold text-blue-700 dark:text-blue-300 mt-0.5">
                    ${maxCPA.toFixed(2)} per conversion
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FaRocket className="text-xs" /> Claim Your Custom Growth Audit
                <FaArrowRight className="text-xs" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
