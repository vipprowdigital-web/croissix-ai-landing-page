import { motion } from "framer-motion";
import {
  //   Facebook,
  //   Instagram,
  Clock,
  Zap,
  BarChart2,
  RefreshCw,
  Bell,
  Share2,
} from "lucide-react";

const platforms = [
  {
    name: "Facebook",
    // icon: <Facebook size={22} />,
    badge: "Coming Soon",
    badgeColor: "#9f57f5",
    color: "#1877f2",
    blurColor: "#1877f220",
    features: [
      {
        icon: <Share2 size={14} />,
        title: "Auto-Posting",
        desc: "Schedule and publish AI-generated posts directly to your Facebook Business Page.",
      },
      {
        icon: <BarChart2 size={14} />,
        title: "Ad Performance Tracking",
        desc: "Monitor local ad spend, reach, and conversion rates from one unified dashboard.",
      },
      {
        icon: <RefreshCw size={14} />,
        title: "Cross-Platform Review Sync",
        desc: "Facebook reviews pulled into the same AI auto-reply engine as Google.",
      },
      {
        icon: <Bell size={14} />,
        title: "Smart Notifications",
        desc: "Real-time alerts for new comments, messages, and review spikes.",
      },
    ],
  },
  {
    name: "Instagram",
    // icon: <Instagram size={22} />,
    badge: "Beta Integration",
    badgeColor: "#c084fc",
    color: "#e1306c",
    blurColor: "#e1306c20",
    features: [
      {
        icon: <Share2 size={14} />,
        title: "AI-Generated Reels & Posts",
        desc: "Turn business updates into scroll-stopping Instagram content automatically.",
      },
      {
        icon: <BarChart2 size={14} />,
        title: "Story & Reel Analytics",
        desc: "Track impressions, saves, and DM conversions for local visibility campaigns.",
      },
      {
        icon: <RefreshCw size={14} />,
        title: "Hashtag Optimization",
        desc: "AI selects hyper-local hashtags to maximize reach in your city or neighborhood.",
      },
      {
        icon: <Zap size={14} />,
        title: "DM Auto-Responses",
        desc: "Instantly answer common questions and capture leads from Instagram DMs.",
      },
    ],
  },
];

export default function Upcoming() {
  return (
    <section
      id="upcoming"
      className="bg-base-bg py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-card-surface/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <Clock size={12} />
            Product Roadmap
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Expanding Across Every{" "}
            <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
              Platform You Need.
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Google is just the start. Croissix AI is rolling out automation for
            every channel your local customers use.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {platforms.map((platform, pi) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: pi * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative bg-card-surface/50 border border-primary-accent/20 rounded-2xl p-6 overflow-hidden group hover:border-primary-accent/35 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent rounded-2xl pointer-events-none" />

              {/* Blurred platform glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-30"
                style={{ background: platform.color }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-5 relative">
                <div className="flex items-center gap-3">
                  {/* <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: `${platform.color}22`,
                      border: `1px solid ${platform.color}40`,
                      color: platform.color,
                    }}
                  >
                    {platform.icon}
                  </div> */}
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {platform.name} Automation
                    </h3>
                    <p className="text-[#9CA3AF] text-xs">
                      Multi-channel local marketing
                    </p>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full border"
                  style={{
                    background: `${platform.badgeColor}15`,
                    color: platform.badgeColor,
                    borderColor: `${platform.badgeColor}35`,
                  }}
                >
                  {platform.badge}
                </span>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                {platform.features.map((feature, fi) => (
                  <motion.div
                    key={fi}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.1 + fi * 0.07 }}
                    className="bg-base-bg/50 rounded-xl p-3.5 border border-white/5 hover:border-primary-accent/20 transition-colors duration-200"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                      style={{
                        background: `${platform.color}18`,
                        color: platform.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <p className="text-white font-semibold text-xs mb-1">
                      {feature.title}
                    </p>
                    <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Notify me */}
              <div className="mt-4 flex items-center justify-between bg-base-bg/40 rounded-xl px-4 py-3 border border-white/5">
                <p className="text-[#9CA3AF] text-xs">
                  Get notified when {platform.name} launches
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{
                    background: `${platform.badgeColor}20`,
                    color: platform.badgeColor,
                    border: `1px solid ${platform.badgeColor}30`,
                  }}
                >
                  Notify Me
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 relative"
        >
          <div className="absolute top-4 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-accent/30 to-transparent" />
          <div className="flex justify-between relative">
            {[
              { label: "Google GBP", sub: "Live Now", active: true },
              { label: "Facebook", sub: "Q3 2025", active: false },
              { label: "Instagram", sub: "Q4 2025", active: false },
              // { label: "Yelp + Maps", sub: "2026", active: false },
            ].map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 ${
                    step.active
                      ? "bg-primary-accent border-primary-accent text-white shadow-lg shadow-primary-accent/40"
                      : "bg-base-bg border-primary-accent/30 text-[#9CA3AF]"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-xs font-semibold ${step.active ? "text-white" : "text-[#9CA3AF]"}`}
                >
                  {step.label}
                </p>
                <p className="text-[10px] text-[#9CA3AF]">{step.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
