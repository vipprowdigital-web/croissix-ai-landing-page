import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
  CreditCard,
  TrendingUp,
  Activity,
} from "lucide-react";
import SpotlightText from "../animations/SpotlightText";
import Button from "../animations/Button";

export default function Pricing() {
  const coreFeatures = [
    {
      title: "1 Google Business Profile Connection",
      desc: "Secure enterprise OAuth 2.0 endpoint synchronization.",
    },
    {
      title: "AI Auto-Review Reply Engine",
      desc: "Instant semantic analysis and contextual responses under 1.8s.",
    },
    {
      title: "GBP Media & Photo Management",
      desc: "Algorithmic asset deployment calibrated for local search indexes.",
    },
    {
      title: "AI Post Creation & One-Click Publishing",
      desc: "Generate optimized regional updates and push instantly via automated APIs.",
    },
    {
      title: "GBP Dynamic Optimization Score Card",
      desc: "Granular live audits mapped out of 1,000 to continuously track rank viability.",
    },
    {
      title: "Google Analytics Dashboard with Live Graphs",
      desc: "Deep analytical performance engine tracking proximity traffic and conversion intent hooks.",
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-base-bg py-28 relative overflow-hidden text-white"
    >
      {/* Cinematic Cyber Background Ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-accent/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-72 h-72 bg-[#c084fc]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center mt-20 mb-30">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-primary-accent/10 border border-primary-accent/25 text-primary-accent text-xs font-semibold px-4 py-2 rounded-full mb-5 font-display"
          >
            <Sparkles size={12} className="animate-pulse" /> Clear Transparent
            Pricing
          </motion.span>

          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            <SpotlightText text="One Simple Plan. Infinite Local" />{" "}
            <span className="bg-linear-to-r from-primary-accent to-[#c084fc] bg-clip-text text-transparent">
              Dominance.
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-base lg:text-lg max-w-2xl mx-auto font-body">
            Access the complete five-module autonomous growth suite. Zero hidden
            fees. Cancel configuration structures whenever you want.
          </p>
        </div>

        {/* ─── MAIN CONVERSION GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE: FEATURE MATRIX CHECKLIST */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold tracking-tight font-display text-white">
                Included Enterprise Capabilities
              </h3>
              <p className="text-xs text-[#9CA3AF]">
                Everything required to put your map positions on absolute
                autopilot.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {coreFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card-surface/30 border border-white/5 hover:border-primary-accent/20 transition-all duration-300 group"
                >
                  <div className="w-5 h-5 rounded-full bg-primary-accent/20 border border-primary-accent/40 flex items-center justify-center text-primary-accent shrink-0 mt-0.5 group-hover:bg-primary-accent group-hover:text-white transition-colors duration-300">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary-accent transition-colors duration-300 font-display">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mt-0.5 font-body">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM 3-DAY TRIAL PRICING CARD */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            {/* Visual Accent Box Behind Card */}
            <div className="absolute -inset-1 bg-linear-to-b from-primary-accent to-[#c084fc] rounded-3xl blur-md opacity-30 animate-pulse" />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="relative bg-card-surface border border-primary-accent/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden min-h-135"
            >
              {/* Dynamic Top Badge */}
              <div className="absolute top-0 right-0 bg-linear-to-l from-primary-accent to-[#c084fc] text-white text-[10px] uppercase font-bold tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-md">
                Risk Free Activation
              </div>

              {/* Card Header Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary-accent/10 border border-primary-accent/30 p-2 rounded-xl text-primary-accent">
                    <CreditCard size={18} />
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#c084fc] font-display">
                    All-In-One Pass
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  Autonomous Pro Tier
                </h3>
                <p className="text-xs text-[#9CA3AF] font-body">
                  Unlock zero-friction operational growth mechanics across all
                  indexes.
                </p>

                {/* 3-Day Free Trial Dynamic Banner */}
                <div className="mt-5 p-3.5 rounded-xl bg-primary-accent/10 border border-primary-accent/20 flex items-center gap-3">
                  <Clock
                    className="text-primary-accent animate-spin"
                    style={{ animationDuration: "6s" }}
                    size={18}
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white font-display">
                      3-Days Complementary Trial Access
                    </h5>
                    <p className="text-[11px] text-[#9CA3AF] font-body">
                      Instant profile sync with full feature capabilities at
                      &#8377;0 upfront cost.
                    </p>
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-8 flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold text-white tracking-tight font-display">
                    &#8377;599
                  </span>
                  <span className="text-[#9CA3AF] text-sm font-medium font-body">
                    / month
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF] font-body">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>No credit card required to test setup baseline</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF] font-body">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Charges automatically begin on Day 4</span>
                  </div>
                </div>
              </div>

              {/* Interactive Moving Graph Preview Section (Feature 6 Showcase) */}
              <div className="bg-base-bg/80 border border-white/5 rounded-2xl p-3.5 mb-6 overflow-hidden relative group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#9CA3AF] font-medium tracking-wide flex items-center gap-1">
                    <Activity
                      size={10}
                      className="text-primary-accent animate-pulse"
                    />{" "}
                    Live Local Visibility Graph
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
                    <TrendingUp size={10} /> +42.8% Map Proximity
                  </span>
                </div>

                {/* Moving SVG Waveform Chart */}
                <div className="h-10 relative flex items-end">
                  <svg
                    className="w-full h-full text-primary-accent/30"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="pricingGraphGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#9f57f5"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#9f57f5"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Animated Fill Path */}
                    <motion.path
                      d="M0,40 Q15,15 30,25 T60,10 T90,18 L100,20 L100,40 Z"
                      fill="url(#pricingGraphGrad)"
                      animate={{
                        d: [
                          "M0,40 Q15,15 30,25 T60,10 T90,18 L100,20 L100,40 Z",
                          "M0,40 Q10,25 25,12 T55,28 T85,8 L100,15 L100,40 Z",
                          "M0,40 Q15,15 30,25 T60,10 T90,18 L100,20 L100,40 Z",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Animated Line Path */}
                    <motion.path
                      d="M0,40 Q15,15 30,25 T60,10 T90,18 L100,20"
                      fill="none"
                      stroke="#9f57f5"
                      strokeWidth="1.5"
                      animate={{
                        d: [
                          "M0,40 Q15,15 30,25 T60,10 T90,18 L100,20",
                          "M0,40 Q10,25 25,12 T55,28 T85,8 L100,15",
                          "M0,40 Q15,15 30,25 T60,10 T90,18 L100,20",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  {/* Scanning Neon Node Dot */}
                  <motion.div
                    animate={{ x: ["0%", "450%", "0%"], y: [0, -12, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#9f57f5] border border-primary-accent"
                  />
                </div>
              </div>

              {/* Conversion CTA */}
              <Button text="Initialize 3-Day Free Trial" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
