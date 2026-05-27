import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  TrendingUp,
  Phone,
  Clock,
  CheckCircle2,
  BarChart2,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow bg */}
      <div className="absolute inset-0 rounded-3xl bg-primary-accent/10 blur-3xl scale-110" />

      {/* Main card */}
      <div className="relative bg-card-surface/80 border border-primary-accent/25 rounded-2xl p-5 backdrop-blur-sm shadow-2xl shadow-black/40">
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-[#9CA3AF] font-medium">GBP Dashboard</p>
            <p className="text-white font-bold text-sm">Milano Bistro</p>
          </div>
          <span className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync
          </span>
        </div>

        {/* Score gauge */}
        <div className="bg-base-bg/60 rounded-xl p-4 mb-4 flex items-center gap-4">
          <div className="relative w-16 h-16 shrink-0">
            <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#2a0e45"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#9f57f5"
                strokeWidth="6"
                strokeDasharray="163.4"
                strokeDashoffset="35"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xs">780</span>
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-base">780 / 1000</p>
            <p className="text-amber-400 text-xs font-medium">
              Needs Attention
            </p>
            <p className="text-[#9CA3AF] text-xs mt-0.5">Profile Score</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            {
              icon: <TrendingUp size={13} />,
              val: "+34%",
              label: "Visibility",
            },
            { icon: <Phone size={13} />, val: "128", label: "Calls" },
            { icon: <MapPin size={13} />, val: "89", label: "Directions" },
          ].map(({ icon, val, label }) => (
            <div
              key={label}
              className="bg-base-bg/50 rounded-xl p-2.5 flex flex-col items-center gap-1"
            >
              <span className="text-primary-accent">{icon}</span>
              <span className="text-white font-bold text-sm">{val}</span>
              <span className="text-[#9CA3AF] text-xs">{label}</span>
            </div>
          ))}
        </div>

        {/* Review reply preview */}
        <div className="bg-base-bg/50 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-white">Latest Review</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
          <p className="text-[#9CA3AF] text-xs leading-relaxed mb-2">
            "Amazing food and super fast service! Will definitely be back soon."
          </p>
          <div className="flex items-center gap-2 bg-primary-accent/10 rounded-lg px-2.5 py-1.5 border border-primary-accent/20">
            <CheckCircle2 size={11} className="text-primary-accent shrink-0" />
            <p className="text-primary-accent text-xs font-medium">
              AI replied · 2s ago
            </p>
          </div>
        </div>

        {/* Bar chart mini */}
        <div className="mt-4 flex items-end gap-1 h-10 px-1">
          {[40, 55, 38, 70, 60, 85, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-linear-to-t from-primary-accent/60 to-primary-accent/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="text-[#9CA3AF] text-xs text-center mt-1">
          Weekly Traffic
        </p>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -top-4 -right-4 bg-card-surface border border-primary-accent/30 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
      >
        <BarChart2 size={14} className="text-primary-accent" />
        <div>
          <p className="text-white text-xs font-bold">+42%</p>
          <p className="text-[#9CA3AF] text-[10px]">Map Visibility</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-card-surface border border-primary-accent/30 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
      >
        <Clock size={14} className="text-emerald-400" />
        <div>
          <p className="text-white text-xs font-bold">18 hrs/mo</p>
          <p className="text-[#9CA3AF] text-[10px]">Time Saved</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-base-bg relative overflow-hidden flex items-center pt-10">
      {/* Background radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-primary-accent/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-card-surface/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #9f57f5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-16 items-center">
          {/* Left column */}
          <div className="w-full">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse" />
                AI-Powered Local Marketing
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl lg:text-6xl font-extrabold text-white leading-tighter tracking-tight mb-6"
            >
              Put Your Local Marketing on{" "}
              <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
                Autopilot.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-[#9CA3AF] text-md leading-relaxed mb-8 max-w-lg"
            >
              Dominate Google Business Profile with AI. Automate reviews, posts,
              photos, and analytics — so you can focus on running your business,
              not marketing it.
            </motion.p>

            {/* Trust bullets */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col gap-2.5 mb-10"
            >
              {[
                "One-click Google Business Profile sync",
                "AI auto-replies to every customer review",
                "Real-time local search optimization score",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-primary-accent shrink-0"
                  />
                  <span className="text-[#9CA3AF] text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 bg-primary-accent hover:bg-primary-accent-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-primary-accent/30 text-sm capitalize"
              >
                Download the app now
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm bg-white/3 hover:bg-white/5"
              >
                Watch Demo
              </motion.button> */}
            </motion.div>

            <motion.p {...fadeUp(0.6)} className="text-[#9CA3AF] text-xs mt-4">
              No credit card required · Free for 3 days
            </motion.p>
          </div>

          {/* Right column — floating dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <DashboardMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
